import udp from "dgram"
const port = 3000
const host = "localhost"

const server = udp.createSocket("udp4")

server.on("error", err => {
  console.log(`server error:\n${err.stack}`)
  server.close()
})

server.on("listening", () => console.log("Udp server run..."))

server.on("message", (msg, rinfo) => {
  const startTimer = Date.now()
  server.send(msg, rinfo.port, rinfo.address)
  console.log(`
  Client ip : ${rinfo.address}:${rinfo.port}
  Time session: ${Date.now() - startTimer} ms
  Data resived: ${msg}
  Connection : close
  `)
})

server.bind(port, host)
