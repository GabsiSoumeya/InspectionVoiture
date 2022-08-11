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



const path = require('path')
if(process.env.NODE_ENV==='production')
{
    app.use('/' ,express.static('client/build') )
}


// server
app.listen(process.env.PORT, () =>{
    console.log('Listening on port ${process.env.PORT}');
})