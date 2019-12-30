/**
 * Created by Tuancam on 31/12/19.
 */

import config from '../config'
import mongoose from 'mongoose'

var connect = () => {
  mongoose.connect(
    config.database,
    config.db_options, (err) => {
      if (err) throw err
      console.log('connect success !!!')
    }
  )
}
export default async function manageConnectDatabase() {
  var db = mongoose.connection
  db.on('connecting', () =>
    console.log('connecting to MongoDB...')
  )
  db.on('error', (error) => {
    console.error('Error in MongoDb connection: ' + error)
    mongoose.disconnect()
  })
  db.on('connected', () =>
    console.log('Mongoose default connection open to: ' + config.database)
  )
  db.once('open', () =>
    console.log('MongoDB connection opened!')
  )
  db.on('reconnected', () =>
    console.log('MongoDB reconnected!')
  )
  db.on('disconnected', async () => {
    console.log('MongoDB disconnected!')
    connect()
  })
  connect()
  process.on('SIGINT', function () {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination')
      process.exit(0)
    })
  })
}
