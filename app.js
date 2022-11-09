const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
const port  = 3006;
const app = express();

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json({limit : '50mb'}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const patientCanvasRoutes = require('./src/routes/patientCanvas.routes');

app.use('/api/canvas/',patientCanvasRoutes);

app.post('/',(req,res)=>{
    res.send("Server is running...");   
});

app.listen(port, async()=> {console.log(`app listening on ${port}!`)});