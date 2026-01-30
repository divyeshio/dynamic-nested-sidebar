import { createContext, useContext, useMemo, useState } from "react";

import { Sidebar } from "@/components/ui/sidebar";

export interface AppNavigationContextProps {
  sidebarContent: React.ReactNode;
  depth: number,
  direction: NavigationDirection
}

type NavigationDirection = "none" | "deeper" | "shallower";

const AppNavigationContext = createContext<AppNavigationContextProps | null>(null)

export function useNavigationContext() {
  const context = useContext(AppNavigationContext)
  if (!context) {
    throw new Error("useNavigationContext must be used within a NavigationProvider.")
  }

  return context
}

export function AppNavigationProvider({ sidebars, children }: { sidebars: React.ReactNode[], children: React.ReactNode }) {
  const currentLength = sidebars.length;
  const [prevLength, setPrevLength] = useState(currentLength);
  const [direction, setDirection] = useState<NavigationDirection>("none");

  // Sync depth change to direction during render
  if (currentLength !== prevLength) {
    setDirection(currentLength > prevLength ? "deeper" : "shallower");
    setPrevLength(currentLength);
  }

  const depth = currentLength - 1;
  const sidebarContent = sidebars[depth];

  const contextValue = useMemo<AppNavigationContextProps>(
    () => ({
      sidebarContent,
      depth,
      direction,
    }),
    [sidebarContent, depth, direction]
  )

  return (
    <AppNavigationContext.Provider value={contextValue}>
      {children}
    </AppNavigationContext.Provider>
  );
}


export function AppSidebar() {
  const { sidebarContent, direction, depth } = useNavigationContext();

  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden">
        <div
          key={depth}
          className={`flex h-full w-full flex-col transition-all duration-250 ease-out ${direction === "deeper" ? "animate-in fade-in slide-in-from-right-12" : ""} ${direction === "shallower" ? "animate-in fade-in slide-in-from-left-12" : ""}`}
        >
          {sidebarContent}
        </div>
      </div>
    </Sidebar>
  );
}