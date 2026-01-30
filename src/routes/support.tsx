import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/support')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Support",
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/support"!</div>
}
