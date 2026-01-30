import { Link, useMatches } from "@tanstack/react-router";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export function AppBreadcrumbs() {
  const matches = useMatches({
    structuralSharing: true,
    select: (m) => {
      return m
        .filter((match) => match.meta)
        .map((match) => ({
          link: match.meta?.at(0)?.rel ?? match.pathname,
          title: match.meta?.at(0)?.name ?? match.meta?.at(0)?.title,
        }));
    },
  });

  const breadcrumbs = matches.filter((x) => x.title);

  return (
    <Breadcrumb>
      <LayoutGroup>
        <BreadcrumbList
          layout
          className="rounded-lg bg-muted/60 px-3 py-2"
        >
          <AnimatePresence initial={false}>
            {breadcrumbs.map((b, index) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.25 } }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 align-middle"
                key={`${b.title}-${index}`}
              >
                {index > 0 && (
                  <BreadcrumbSeparator
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  />
                )}
                <BreadcrumbItem className="text-muted-foreground">
                  {index != breadcrumbs.length - 1 ? (
                    <BreadcrumbLink asChild>
                      <Link to={b.link}>{b.title}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{b.title}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </BreadcrumbList>
      </LayoutGroup>
    </Breadcrumb>
  );
}
