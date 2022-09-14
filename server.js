const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const vehiculeRoutes = require('./routes/vehicule.routes');
const marqueRoutes = require('./routes/marque.routes');
const modeleRoutes = require('./routes/modele.routes');
const rapportRoutes = require('./routes/rapport.routes');
const localisationRoutes = require('./routes/localisation.routes');
const inspectionRoutes = require('./routes/inspection.routes');

require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser,requireAuth} = require('./middleware/auth.middleware');
const app = express();


// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cookieParser());

//jwt
app.get('*', checkUser);
app .get('/jwtid', requireAuth, (req, res) => {
res.status(200).send(res.locals.user._id)
});


// routes
app.use('/api/user', userRoutes);
app.use('/api/vehicule', vehiculeRoutes);
app.use('/api/marque', marqueRoutes);
app.use('/api/modele', modeleRoutes);
app.use('/api/rapport', rapportRoutes);
app.use('/api/localisation', localisationRoutes);
app.use('/api/inspection', inspectionRoutes);

// server
app.listen(process.env.PORT, () =>{
    console.log('Listening on port ${process.env.PORT}');
})

