import users from './users'

const routes = (fastify: any, opts: unknown, done: () => void): void => {
  fastify.register(users, { prefix: '/users' })
  done()
}

export default routes
