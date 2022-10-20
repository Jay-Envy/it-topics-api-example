const express = require('express');
const router = express.Router();
const campus = require('./models/campus');
const docent = require('./models/docent');

// == ROUTES ==

router.get('/', (req, res) => {
    console.log('/ route called');
    res.send(
        '<h1>Welcome to my API, these are the available routes: </h1>'
        
        +'<h2>/</h2>'
        +'Where you are right now'

        +'<hr/>'

        +'<h2>/docent</h2>'
        +'Returns all teachers in the database using .find()'

        +'<hr/>'      

        +'<h2>/docent/create</h2>'
        +'Creates a docent using .create()'

        +'<hr/>' 

        +'<h2>/campus</h2>'
        +'Returns all campuses in the database using .find()'

        +'<hr/>'      

        +'<h2>/campus/:id</h2>'
        +'Returns a campus in the database with the relevant ID using .findById()'

        +'<hr/>'      

        +'<h2>/campus/create</h2>'
        +'Creates a campus using .create()'

        +'<hr/>'      

        +'<h2>/campus/delete/:id</h2>'
        +'Deletes a campus in the database with the relevant ID using .findByIdAndDelete()'

        +'<hr/>'      

        +'<h2>/campus/update/:id</h2>'
        +'Updates a campus in the database with the relevant ID using .findByIdAndUpdate()'

        +'<hr/>'  
        );
})

// -============-
// -== DOCENT ==-
// -============-

// GET DOCENT
router.get('/docent', async (req, res) => {
    console.log('/docent route called');
    try {
        res.json(await docent.find().populate('campussen').sort('voornaam'));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// CREATE DOCENT
router.post('/docent/create', async (req, res) => {
    console.log('/docent/create route called');
    try {
        res.send(await docent.create(req.body));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// -============-
// -== CAMPUS ==-
// -============-

// GET CAMPUS
router.get('/campus', async (req, res) => {
    console.log('/campus route called');
    try {
        res.json(await campus.find());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// GET
router.get('/campus/:id', async (req, res) => {
    console.log('/campus/:id route called');
    try {
        res.send(await campus.findById(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// CREATE
router.post('/campus/create', async (req, res) => {
    console.log('/campus/create route called');
    try {
        res.send(await campus.create(req.body));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// DELETE
router.delete('/campus/delete/:id', async (req, res) => {
    console.log('/campus/delete/:id route called');
    try {
        res.send(await campus.findByIdAndDelete(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// UPDATE
router.put('/campus/update/:id', async (req, res) => {
    console.log('/campus/update/:id route called');
    try {
        res.send(await campus.findByIdAndUpdate(req.params.id, {$set: req.body}));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;