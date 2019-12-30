import express from "express";

var router = express.Router();


router.get('/demo', async(req, res) => {
    res.json({
        demo: "demo"
    })
  });

  export default router;