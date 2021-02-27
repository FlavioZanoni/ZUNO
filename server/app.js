import express from 'express'
import http from 'http'

const app = express()
const server = http.createServer(app)

server.listern(8080, ()=> {
  console.log('[server] -> Server listening on port 8080')
})