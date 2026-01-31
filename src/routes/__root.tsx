import { DefaultCatchBoundary } from '@/components/shared/default-catch-boundary';
import { NotFound } from '@/components/shared/not-found';
import { ThemeSwitcher } from '@/components/shared/theme-switcher';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppBreadcrumbs } from '@/features/navigation/app-breadcrumbs';
import { AppNavigationProvider, AppSidebar } from '@/features/navigation/app-sidebar';
import { DefaultSidebar } from '@/main';
import { CatchBoundary, HeadContent, Outlet, createRootRouteWithContext, useMatches } from '@tanstack/react-router'
import { useMemo } from 'react';


declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    sidebar?: React.ReactNode
  }
}

export const Route = createRootRouteWithContext()({
  component: RootComponent,
  staticData: {
    sidebar: <DefaultSidebar />
  },
  head: () => ({
    meta: [
      {
        title: "Nested Sidebar",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/vite.svg",
      },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  errorComponent: (error) => (
    <DefaultCatchBoundary
      error={error.error}
      reset={error.reset}
    />
  ),
});

function RootComponent() {

  const matches = useMatches({ structuralSharing: true })
  var sidebars = useMemo(() => matches.filter(match => match.staticData.sidebar).map(match => match.staticData.sidebar), [matches]);

  return (
    <div>
      <HeadContent />
      <SidebarProvider defaultOpen={true}>
        <AppNavigationProvider sidebars={sidebars}>
          <AppSidebar />
        </AppNavigationProvider>
        <SidebarInset className="max-h-[calc(100dvh-1rem)] max-w-full overflow-y-visible px-3">
          <header className="flex h-16 shrink-0 items-center justify-between gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 h-4"
              />
              <AppBreadcrumbs />
            </div>
            <div className="flex gap-2">
              <ThemeSwitcher />
            </div>
          </header>
          <CatchBoundary
            getResetKey={() => "reset"}
            onCatch={(error, info) => console.error(error, info)}
            errorComponent={DefaultCatchBoundary}
          >
            <Outlet />
          </CatchBoundary>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
