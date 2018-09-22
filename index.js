const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const mongodb = require('mongodb').MongoClient;
const url = `mongodb://${process.env.MONGO_SERVER}:27017`;

app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/hello', (req, res) => {
  res.status(200).send({express:'Express says hey gurl hey'});
});

app.get('/api/testdb', (req, res) => {
    mongodb.connect(url, (err, client) => {
        if(err) console.log(err)
        else{
            const db = client.db(process.env.MONGO_INITDB_DATABASE);
                res.status(200).send(`Successfully connected to database ${process.env.MONGO_INITDB_DATABASE}... now closing`)
            client.close()
        }
    })
})

app.get('/', (req, res) => {
  res.send(`
    <form action="/upload" enctype="multipart/form-data" method="post">
      <input type="file" name="foo" /><br /><br />
      <input type="submit" value="Upload" />
    </form>
  `);
});

app.post('/upload', (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded!');

  const { foo } = req.files;
  const uploadTo = `uploads/${foo.name}`;

  foo.mv(uploadTo, (err) => {
    if (err) return res.status(500).send(err);

    res.send(`File uploaded to <a href="${uploadTo}">${uploadTo}</a>`);
  });
});

app.listen(8080, () => {
  console.log('Server listening on port 8080!');
});