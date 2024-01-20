const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
    res.render('landing', { layout:'main',title: 'KimioLink' });
});

router.get('/login', (req, res) => {
    res.render('login', {layout:'main', title:'KimioLink user authentication'});
});

router.get('/register',(req, res)=> {
    res.render('register',{layout:'main', title:'KimioLink User Registration'});
});

// Export the router
module.exports = router;
