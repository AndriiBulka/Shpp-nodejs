//client
import udp from "dgram"

const serverPort = 3001
const serverAdress = "localhost"

const client = udp.createSocket("udp4")

const sendMsg = "UDP Server!!!"
const startTimer = Date.now()

client.send(sendMsg, serverPort, serverAdress, err => {
  if (err) {
    client.close()
    throw err
  }
})

client.on("message", massege => {
  const msg = massege.toString()
  console.log(`
  Sent maseege: ${sendMsg}
  Resived massege: ${msg}
  Time to get response : ${Date.now() - startTimer} ms
  `)
  client.close()
})
