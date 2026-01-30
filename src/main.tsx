import "./styles.css";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "next-themes";
import { BoxIcon, ChartLineIcon, LogsIcon, BrickWallFireIcon, EyeIcon, GaugeIcon, ChartPieIcon, LifeBuoyIcon, SettingsIcon } from "lucide-react";
import { SidebarContent } from "./components/ui/sidebar";
import { NavMain } from "./features/navigation/nav-main";
import { Group } from "./features/navigation/sidebar.types";


// Create a new router instance
const router = createRouter({
  routeTree,
  defaultStructuralSharing: true,
  context: {
    sidebar: null,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}


// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ThemeProvider
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export function DefaultSidebar() {
  return (
    <>
      <SidebarContent>
        <NavMain groups={mainMenuList} />
      </SidebarContent>
    </>
  );
}

export const mainMenuList: Group[] = [
  {
    groupLabel: "Main",
    menus: [
      {
        url: "/deployments",
        title: "Deployments",
        icon: BoxIcon,
      },
      {
        url: "/logs/",
        title: "Logs",
        icon: LogsIcon,
        hasNested: true
      },
      {
        url: "/analytics",
        title: "Analytics",
        icon: ChartLineIcon,
      },
      {
        url: "/speed-insights",
        title: "Speed Insights",
        icon: GaugeIcon,
      },
      {
        url: "/observability",
        title: "Observability",
        icon: EyeIcon,
      },
      {
        url: "/firewall",
        title: "Firewall",
        icon: BrickWallFireIcon,
      },
    ],
  },
  {
    groupLabel: "",
    menus: [
      {
        url: "/usage",
        title: "Usage",
        icon: ChartPieIcon,
      },
      {
        url: "/support",
        title: "Support",
        icon: LifeBuoyIcon,
      },
      {
        url: "/settings",
        title: "Settings",
        icon: SettingsIcon,
      },
    ],
  },
];
