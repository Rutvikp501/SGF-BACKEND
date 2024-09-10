const express = require("express");
const app = express();
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const cors = require("cors");
require("dotenv").config();
require("./config/dbConnection.js")();

// Use CORS middleware
app.use(cors({
    origin: (origin, callback) => {
        callback(null, origin); 
    },
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, 
}));

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

const swaggerUI = require('swagger-ui-express');
const YAML = require("yamljs");
const swaggerDocument = YAML.load(path.join(__dirname, '/swagger.yaml'));
app.use('/sgr', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Routes
app.get('/',(req,res)=>{
    try {
        res.json("Welcome to SGF backend");
    } catch (error) {
        res.send({
            success: false,
            statusCode: 500,
            message: 'Internal server error'
        });
    }
})
app.use('/api/user',require('./routes/user.route.js'));
app.use('/api/lead', require('./routes/lead.route.js'));
app.use('/api', require('./routes/index.routes.js'));


const port = process.env.PORT;
app.listen(port, console.log(`Server is running at http://localhost:${port}`));
