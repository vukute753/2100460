
import express from 'express'
const path = require('path')

const staticFiles = (app) => {
    app.use(express.static(path.join(__dirname, '../public')))
}
export default staticFiles