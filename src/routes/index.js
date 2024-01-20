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

router.post('/registerNewUser', (req,res) =>{
    res.render('register_success',{layout:'main', title:'Successful registration'});
});

router.get('/home',(req,res) =>{
    res.render('homepage',{layout:'home',title:'KimioLink Patient Home', patientId:'12345'});
});

// Export the router
module.exports = router;
