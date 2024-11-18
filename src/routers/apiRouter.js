import express from 'express'
const router = express.Router()

router.post('/add', (req, res) => {
    res.send('Thêm thành công')
})


export default router