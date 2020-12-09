const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { urlencoded } = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//turn on routes
app.use(routes);

//turn on connection to dv and server
sequelize.sync({ force: false, alter: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

