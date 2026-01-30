import { Link } from "@tanstack/react-router";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Group } from "@/features/navigation/sidebar.types";
import { Separator } from "@/components/ui/separator";
import { ChevronRightIcon } from "lucide-react";

export const NavMain = ({ groups }: { groups: Group[] }) => {
  return (
    <>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <SidebarGroup >
            {group.groupLabel && <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>}
            <SidebarMenu>
              {group.menus.map((menu) =>
                <SidebarMenuItem key={menu.title}>
                  <SidebarMenuButton
                    className="h-9"
                    asChild
                    tooltip={menu.title}
                  >
                    <Link
                      to={menu.url}
                      search={(prev) => prev}
                      className="text-foreground/60 hover:text-foreground"
                      activeProps={{
                        "data-active": "true",
                        className:
                          "dark:bg-primary/20 dark:text-primary dark:border-primary/50 active:hover:bg-primary hover:bg-primary/40 hover:dark:bg-primary/30",
                      }}
                      activeOptions={{
                        includeSearch: false,
                        exact: true
                      }}
                    >
                      {menu.icon && <menu.icon />}
                      {menu.title}
                      {menu.hasNested && (
                        <div className="ml-auto hover:bg-primary/10 rounded p-1" >
                          <ChevronRightIcon size="14" />
                        </div>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroup>
          {groupIndex !== groups.length - 1 && <Separator />}
        </div>
      ))}
    </>
  );
};
