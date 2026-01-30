import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { NotFound } from './components/shared/not-found'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    defaultNotFoundComponent: () => <NotFound />,
  })

  return router
}
