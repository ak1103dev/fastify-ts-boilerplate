import fastify from 'fastify'
import routesV1 from './routes/v1'

const server = fastify()

server.register(routesV1, { prefix: '/v1' })

server.get('/', async (request, reply) => {
  return {
    message: 'Welcome to API',
    timestamp: new Date(),
  }
})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
