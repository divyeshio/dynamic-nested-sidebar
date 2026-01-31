import { SidebarHeader, SidebarMenuButton, SidebarContent } from '@/components/ui/sidebar';
import { NavMain } from '@/features/navigation/nav-main';
import { createFileRoute, Link } from '@tanstack/react-router'
import { AlertTriangleIcon, ChevronLeftIcon, InfoIcon, RouteIcon } from 'lucide-react';
import { Group } from '@/features/navigation/sidebar.types';

export const Route = createFileRoute('/logs/query')({
  component: RouteComponent,
  staticData: {
    sidebar: <QuerySidebar />,
  },
})

function RouteComponent() {
  return <div>Hello "/logs/query"!</div>
}

function QuerySidebar() {
  return (
    <>
      <SidebarHeader>
        <SidebarMenuButton asChild>
          <Link
            to=".."
            className="flex items-center gap-2"
          >
            <ChevronLeftIcon className="size-4" />
            <span>Query</span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={queryMenuList} />
      </SidebarContent>
    </>
  );
}

export const queryMenuList: Group[] = [
  {
    groupLabel: "",
    menus: [
      {
        url: "/logs/query/information",
        title: "Information",
        icon: InfoIcon,
      },
      {
        url: "/logs/query/warning",
        title: "Warning",
        icon: AlertTriangleIcon,
      },
      {
        url: "/logs/query/trace",
        title: "Trace",
        icon: RouteIcon,
      },
    ],
  }
];
