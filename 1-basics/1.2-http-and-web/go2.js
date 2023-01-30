// этот файл надо будет дописать...
// не обращайте на эту функцию внимания
// она нужна для того чтобы правильно читать входные данные
function readHttpLikeInput() {
  var fs = require("fs");
  var res = "";
  var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
  let was10 = 0;
  for (;;) {
    try {
      fs.readSync(0 /*stdin fd*/, buffer, 0, 1);
    } catch (e) {
      break; /* windows */
    }
    if (buffer[0] === 10 || buffer[0] === 13) {
      if (was10 > 10) break;
      was10++;
    } else was10 = 0;
    res += new String(buffer);
  }

  return res;
}

let contents = readHttpLikeInput();

function outputHttpResponse(statusCode, statusMessage, headers, body) {
  const response = `
HTTP/1.1 ${statusCode} ${statusMessage}
${Object.keys(headers)
  .reduce((acc, item) =>
      acc + item + " : " + headers[item] + "\n", "")}
        
${body}`;
 console.log(response);
}

function processHttpRequest($method, $uri, $headers, $body) {
  const status = {
    "200": "OK",
    "400": "Bad Request",
    "404": "Not Found"
};
const statusCode =  $method !== "GET" ? "400" : !$uri.startsWith("/sum")? "404" : !$uri.includes("?nums=")? "400" : "200";
const statusMessage = status[statusCode];
const sumOfnum = statusCode === "200" 
    ? $uri.match(/[^(nums=)](,?\d)+/g)[0]
    .split(",")
    .reduce((accumulator, current) => +accumulator + +current, 0):undefined;
const body = sumOfnum || status[statusCode];

const headers = {
    "Date": new Date(),
    "Server": "Apache / 2.2.14 (Win32)",
    "Connection": "Closed",
    "Content-Type": "text/html; charset=utf-8",
    "Content-Length": body.toString().length,
};
outputHttpResponse(statusCode, statusMessage, headers, body);
}

function parseTcpStringAsHttpRequest(string) {
  let method = string.match(/\w+/)[0].trim();
  let uri = string.match(/\/[^\s]+/)[0].trim();
  let headers = string.match(/.+:.+/gm).reduce((acc, item) => {
    let header = item.split(":");
    let head = header[0]
      .toLowerCase()
      .trim()
      .replace(/(?=\b)[a-z]/gm, word => word[0].toUpperCase());
    let value = header[1].trim();
    acc[head] = value;
    return acc;
  }, {});
  let body = string.match(/^(.*=[^\s,]*&?)+$/gm);
  body = body ? body.join().trim() : undefined;  
  return {
      method, uri, headers, body,   
  };
}
const testRequest = `
GET /sum?nums=1,2,3 HTTP/1.1
Host: student.shpp.me`;
http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);

