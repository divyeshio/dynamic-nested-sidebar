import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/deployments')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Deployments",
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/deployments"!</div>
}
