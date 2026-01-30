import { NotFound } from '@/components/shared/not-found';
import { SidebarHeader, SidebarMenuButton, SidebarContent } from '@/components/ui/sidebar';
import { NavMain } from '@/features/navigation/nav-main';
import { Group } from '@/features/navigation/sidebar.types';
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { ActivityIcon, AlertTriangleIcon, BookOpenIcon, ChevronLeftIcon, CpuIcon, DatabaseIcon, FileTextIcon, GlobeIcon, ImageIcon, LayersIcon, LayoutGridIcon, LayoutIcon, LinkIcon, RefreshCwIcon, RepeatIcon, SearchIcon, ShuffleIcon, SquareFunctionIcon, ZapIcon } from 'lucide-react';

export const Route = createFileRoute('/logs')({
  component: RouteComponent,
  staticData: {
    sidebar: <LogsSidebar />,
  },
  notFoundComponent: () => <NotFound />,
  head: () => ({
    meta: [
      {
        title: "Logs",
        rel: "/logs"
      },
    ],
  }),
})

function RouteComponent() {
  return <Outlet />
}


function LogsSidebar() {
  return (
    <>
      <SidebarHeader>
        <SidebarMenuButton asChild>
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <ChevronLeftIcon className="size-4" />
            <span>Logs</span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={logsMenuList} />
      </SidebarContent>
    </>
  );
}

export const logsMenuList: Group[] = [
  {
    groupLabel: "",
    menus: [
      {
        url: "/logs",
        title: "Overview",
        icon: LayoutGridIcon,
      },
      {
        url: "/logs/query",
        title: "Query",
        icon: SearchIcon,
      },
      {
        url: "/logs/notebooks",
        title: "Notebooks",
        icon: BookOpenIcon,
      },
      {
        url: "/logs/alerts",
        title: "Alerts",
        icon: AlertTriangleIcon,
      },
    ],
  },
  {
    groupLabel: "Compute",
    menus: [{
      url: "/logs/functions",
      title: "Functions",
      icon: SquareFunctionIcon,
    },
    {
      url: "/logs/external-apis",
      title: "External APIs",
      icon: LinkIcon,
    },
    {
      url: "/logs/middleware",
      title: "Middleware",
      icon: LayersIcon,
    },
    {
      url: "/logs/workflows",
      title: "Workflows",
      icon: RepeatIcon,
    },
    {
      url: "/logs/runtime-cache",
      title: "Runtime Cache",
      icon: DatabaseIcon,
    },]
  },
  {
    groupLabel: "CDN",
    menus: [
      {
        url: "/logs/edge-requests",
        title: "Edge Requests",
        icon: GlobeIcon,
      },
      {
        url: "/logs/fast-data-transfer",
        title: "Fast Data Transfer",
        icon: ZapIcon,
      },
      {
        url: "/logs/image-optimization",
        title: "Image Optimization",
        icon: ImageIcon,
      },
      {
        url: "/logs/isr",
        title: "ISR",
        icon: RefreshCwIcon,
      },
      {
        url: "/logs/external-rewrites",
        title: "External Rewrites",
        icon: ShuffleIcon,
      },
      {
        url: "/logs/microfrontends",
        title: "Microfrontends",
        icon: LayoutIcon,
      },
    ]
  },
  {
    groupLabel: "Services",
    menus: [{
      url: "/logs/build-diagnostics",
      title: "Build Diagnostics",
      icon: ActivityIcon,
    },]
  },
  {
    groupLabel: "Services",
    menus: [{
      url: "/logs/ai",
      title: "AI",
      icon: CpuIcon,
    },
    {
      url: "/logs/blob",
      title: "Blob",
      icon: FileTextIcon,
    },]
  }
];