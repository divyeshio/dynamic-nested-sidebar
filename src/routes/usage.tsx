import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/usage')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Usage",
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/usage"!</div>
}
