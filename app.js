const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bodyparser = require('body-parser');

const port = process.env.PORT || 3200;

mongoose
    .connect('mongodb://localhost:27017/fish_tracker', {
        useNewUrlParser: true
    })
    .then(() => {
        const app = express();

        const fishRouter = require('./routes/fish');

        // middleware
        app.use(cors());
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: false }));
        app.use('/fish', fishRouter);

        app.listen(port, () => {
            console.log(`running on port ${port}`);
        });
    });

