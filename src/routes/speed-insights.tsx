import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/speed-insights')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Speed Insights",
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/speed-insights"!</div>
}
