const express = require("express")
const router = express.Router()


router.get("/events", async (req, res) => {
    let id = req.query.id
    let type = req.query.type
    let limit = req.query.limit
    let page = req.query.page

    return res.status(200).json({ id, type, limit, page   })
})

router.post("/events", async (req, res) => {

   let { name, files, tagline, schedule, description, moderator, category, sub_category, rigor_rank} = req.body

    return res.status(200).json({ response: 'helo form post event' })
})
router.put("/events/:id", async (req, res) => {



    return res.status(200).json({ response: req.params })
})
router.delete("/events/:id", async (req, res) => {



    return res.status(200).json({ response: req.params })
})

module.exports = router