import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Settings",
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/settings"!</div>
}
