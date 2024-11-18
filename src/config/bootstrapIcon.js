import express from 'express'
const path = require('path')

const useBootstrap = (app) => {
    app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
}
export default useBootstrap