import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/observability')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Observability",
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/observability"!</div>
}
