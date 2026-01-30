import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/firewall')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Firewall",
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/firewall"!</div>
}
