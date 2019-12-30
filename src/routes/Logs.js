import express from "express";

var router = express.Router();


router.get('/save', (req, res) => {
  res.json({
    idDriver: 1,
    idGuess: 2,
    logType: 1,
    status: 1,
    fee: 10000,
    appSource: 'MOBILE_APP',
    description: 'CHARGE FEE',
    createdAt: new Date(),
    updatedAt: new Date()
  })
})
export default router