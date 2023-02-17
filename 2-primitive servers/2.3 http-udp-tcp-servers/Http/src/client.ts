import http from "http"

const port = 3000
const host = "localhost"
const massage = JSON.stringify("Http Server!!")
const options = {
  hostname: host,
  port: port,
  path: "/",
  method: "get",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": massage.length,
  },
}

const clientReq = http.request(options, res => {
  res.on("data", data => {
    const startTimer = Date.now()
    console.log(`
    Sent : ${massage}
    Resived: ${data}
    Time to receive response: ${Date.now() - startTimer} ms
    Connectin : ${res.headers.connection}
    `)
  })
})
clientReq.write(massage)
clientReq.on("error", error => {
  console.error(`Problem with request: ${error}`)
})
clientReq.end()
