const mongoose = require('./connection')
const Yum = require('../models/yum')
const yumData = require('./seedData.json')

const db = mongoose.connection

Yum.deleteMany({}).then(() => {
    Yum.insertMany(yumData).then(yum => {
        console.log('yum', yum)
        db.close()
    })
})