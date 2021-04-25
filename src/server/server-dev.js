import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  console.log('result  == ', result)
  res.set('content-type', 'text/html')
  res.send("HELLO")

  next();
  res.end()
  })
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});

/** Mongo DB Access **/

import {MongoClient} from 'mongodb';

  const uri = "mongodb+srv://adminUser:adminUserPassword@cluster-node-express.pg4av.mongodb.net/test?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function main(){

  try {
      // Connect to the MongoDB cluster
      await client.connect();
      const db = client.db('found')
      const found = await  db.collection("foundData").find().toArray();

      app.get('/api', (req, res) => {
        res.send(found);
        res.end()
      })

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}



 main().catch(console.error);

 async function listDatabases(client){
  let databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
