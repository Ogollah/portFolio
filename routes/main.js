const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) =>{

    res.send("Hello i Kenya! ")

})

module.exports = router
