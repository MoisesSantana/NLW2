// server
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


// configure nunjucks
const nunjucks = require('nunjucks');
//const { query } = require('express');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
// Start configuration of server
server

.use(express.urlencoded({ extended: true }))
// configure arquives static (css, scripts, images)
.use(express.static("public"))
// rote of applications
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start server
.listen(5000)
// npm run dev <<<< !!IMPORTANT!! >>>>> (execut the server)