
const route = (fastify: any, opts: unknown, done: () => void): void => {
  fastify.get('/', () => {
    return {
      email: 'hello@world.com'
    }
  })
  done()
}

export default route