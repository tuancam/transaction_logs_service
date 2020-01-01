import express from "express";

var router = express.Router();


router.get('/save', (req, res) => {
  res.json({
    cmd: 1000,
    subCmd: 0,
    status: 1,
    billingId: 'abcxyz',
    sourceId: 'abcxyz',
    destId: 'abcxyz',
    billSource: 'abcxyz',
    amount: 10000,
    billingInfo: {},
    infoParams: {},
    createdTime: 1282828282,
    updatedTime: 1818181,
  })
})
export default router