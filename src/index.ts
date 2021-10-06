import fastify from 'fastify'

const server = fastify()

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
