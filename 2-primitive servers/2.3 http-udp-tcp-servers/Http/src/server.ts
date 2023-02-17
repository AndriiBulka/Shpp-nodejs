import http from "http"

const port = 3000
const host = "localhost"

const server = http.createServer((req, res) => {
  let body = ""

  req.on("data", data => {
    body += JSON.parse(data)
    console.log(`
    Client ip : ${req.socket.remoteAddress}:${req.socket.remotePort}
    Time request: ${new Date().toISOString()} ms
    Data resived: ${body}
    Connection : ${req.headers.connection}
    `)
  })
  req.on("end", () => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(body)
  })
})

server
  .listen(port, host, () => console.log("Server run ..."))
  .on("error", err => {
    console.log(err)
  })
