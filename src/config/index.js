export default {
    database: 'mongodb://171.244.9.42:27017/tungtung',
    dbOptions: {
      native_parser: true,
      poolSize: 5,
      user: 'tungtung',
      pass: 'admintungtung',
      useMongoClient: true,
      promiseLibrary: global.Promise
    },
    port: 3000,
  
}