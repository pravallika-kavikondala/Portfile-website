// This js file uses node and express to publish the application
// when node server.js command is run in the terminal, the application listens on port 8080. This port is specified in app.listen()
// References: https://firebase.google.com/docs/web/setup and https://expressjs.com/en/api.html
var admin = require('firebase-admin');
var express = require('express');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'pravallika-kavikondala-2e429',
    clientEmail: 'firebase-adminsdk-acwdw@pravallika-kavikondala-2e429.iam.gserviceaccount.com',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCx6jmr3l+UIixM\nUhUHEcNdZ0biUKbR7iPUHV0yggZumsZL+msCQiYdBmSfQCCJe7usXydfY+lZCzU9\nlaXQjDV1HJJ7Qn5/dqOJ+y76kIgqOEFWpT01enfvlZrDSxotNAXj7R1TkcwfqcrU\nNm+AR4383ElTdUngYl/asLaI8WtL2cd/s73VXfsS29v5ehxG24enDfyfgwOCGySj\nW+3EWUWjzTjtvu99bQV5ooJs4s93vggdsjujQ//wDGyp9Do+tOBzPjvjbkQkH85z\nHT6dzwpOeHolW7NQtJMkK2ES4MMQVsIh1+qgavbqp5gK2AbIOg4VqLqdW0rCei08\nPOYiyXHbAgMBAAECggEATWXukeDLJrfZGpio0ir9mSApO6JHeFNHnerqVOMw5iQJ\n+RqnO9PIHd9endL5dKXx5pJ8n+hoptaT4kc8W+XrCZgU929ddZkImym9bb67pdZU\nQlvfLWkqTP2B1szQxfJ4T4gjNmxaZznn5XsK9bzrPaIdeiOvsGBLf+lZd2jDOzr3\nLzcnztadqJePPBvPNIK45VJ/+ADebbOCtuyUcvMA775/QEHvXy2MlTrHLY/Gxep2\nsbjs1OyFBCdlR3bctEeSTXeoDZ4nCYgphLUvm2ul0Ny/9dbWkxV3oe5MzUK8xn0T\nSFkpLdobeKs/xkJKt99ZNiiIt1jWS6C3EjHBSdM4rQKBgQDwHAcXtkR+SyYLyLoO\nqa0ctsvZZPHPk2lRUguB/4KuTALnAYskc2wJ1J+L0Fl8jd1BU/D4j7fkWsPOwvEw\n6xKklS21GQjWgFKAde7I/7L54RHT4Ld3CYUq1E8M6nbAO5orlCS+5miUXK3GlH2+\nQjfMU1ew9p6t5DT/tYcXDz4DPwKBgQC9sHzrh8UqDakJl7WO6AcUt0FSh+kZsLG0\nerW5kGDEkG5uk8vjxo7EEM2R1LlOMX010pSSgwG9V0do4uJ5/cSlTNz1hym5ewaf\nYbOCd0AE4CY/hf+CX95VMj5Y9zVA9c7nM06r4+4t0nLoMovJGVHzVu/swxDEv9uV\n9FsrRgVWZQKBgDNfa80Q/FqhLYS778MPXrCUE81xoaMuAQybJ0crKgSs0romRGUK\nJQV9bp11eJADsmE12or0BP5gxSBJ6Vz0DssT9/GVZ6StU/mUQgDTZLG+DBhvLhHU\nAaAGSNuUls/OcM/+JFaL6bhElBG216iLdnDLLCn6ujyuZQCJEFxIsJX1AoGBAIdH\n3d9P5dI3Cc3Yj1hKq/ofM4v7d8ellybCuOWNTSYCZ2+fIjLgwaKc5S7SyhE1BDol\nY2YV3mC9ZSUtYh1kWSEWbyL/8UbhsXhrgk1SZKrVfRGiq/W8D2EtQv/J1gXtCFEk\n6z91f8DYLLDik4So9SQZZWSyPTxEJAOO0JJNDrNtAoGBAKZF5mLeU1SCZqpgnl6p\nhD9QlTjaGZHOerVl72G7RzItRXXM0B3oZIeRYMqoZv9qeEAqDXkfwVEKdGgVxRgK\nwwiUkn0IipGKMzkgYEDvHPBvFYbTrBFGfh8/uJTg3gTwBl/PKy/jm5Fshvy+VGbf\ncxSIP+8Dkop0k8iAG6tBZ6Nr\n-----END PRIVATE KEY-----\n'
  }),
  databaseURL: 'https://pravallika-kavikondala-2e429.firebaseio.com'
});

var database = admin.database();
var app = express();

app.set('views', __dirname + '/');
app.set('view engine', 'ejs');

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use('/', express.static(__dirname + "/"));

app.get('/',
  function(req, res) {
    res.render('home.html');
  });

app.get('/summary',
  function(req, res) {
    res.render('summary');
  });
  
app.get('/set4',
  function(req, res) {
    res.render('set4.html');
  });

app.listen(8080);