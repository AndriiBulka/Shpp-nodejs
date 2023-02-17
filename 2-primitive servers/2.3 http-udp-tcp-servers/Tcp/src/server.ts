import net from "net"
const port = 3002
const host = "localhost"
const server = net.createServer(socket => {
  const interval = setInterval(() => {
    if (socket.destroyed) {
      console.log("Client disconnected")
      clearInterval(interval)
    }
  }, 10000)
  socket.write("hello")
  socket.on("data", msg => {
    socket.write(msg)
    const startTimer = Date.now()
    console.log(`
    New client has connected
    Client ip : ${socket.remoteAddress}:${socket.remotePort}
    Time session: ${Date.now() - startTimer} ms
    Data resived: ${msg}
    Connection : Alive
    `)
  })
  socket.on("error", err => {
    throw err
  })
})
server.on("error", err => {
  throw err
})
server.listen(port, host, () => {
  console.log(`Tsp server run on ${host}:${port}...`)
})
