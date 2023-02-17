import tcp from "net"
const serverPort = 3002
const serverHost = "localhost"
const massage = "Tsp server"
const client = new tcp.Socket()
client.on("data", data => {
  const startTimer = Date.now()
  console.log(`
    Sent : ${massage}
    Resived: ${data}
    Time to receive response: ${Date.now() - startTimer} ms
    `)
})
client.connect(serverPort, serverHost, () => {
  console.log("Connected to server")
  client.write(massage)
})
client.on("error", err => {
  throw err
})
