import { LucideIcon } from "lucide-react";

export type Submenu = {
  url: string;
  title: string;
};

export type Menu = {
  url: string;
  title: string;
  icon: LucideIcon;
  hasNested?: boolean;
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
};
