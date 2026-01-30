import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytics')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Analytics",
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/analytics"!</div>
}
