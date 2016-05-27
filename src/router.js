import uniloc from 'uniloc-clebert-fork'

let router = uniloc()

export function configureRouter(routes, aliases) {
  router = uniloc(routes, aliases)
}

export default function getRouter() {
  return router
}
