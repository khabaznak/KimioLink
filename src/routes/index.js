const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
    res.render('landing', { layout:'main',title: 'KimioLink' });
});

router.get('/login', (req, res) => {
    res.render('login', {layout:'main', title:'KimioLink user authentication'});
});

router.post('/validate_user', (req, res) => {
    console.log('I should be validating!');
    res.render('homepage',{layout:'home', title:'KimioLink Your Home Page', patientId:req.body.txtUserEmail});
});

router.get('/register',(req, res)=> {
    res.render('register',{layout:'main', title:'KimioLink User Registration'});
});

router.post('/registerNewUser', (req,res) =>{
    res.render('register_success',{layout:'main', title:'Successful registration'});
});

router.get('/home',(req,res) =>{
    console.log('Home');
    res.render('homepage',{layout:'home',title:'KimioLink Patient Home', patientId:'12345'});
});

router.get('/patient_profile', (req, res) => {
    res.render('patient_profile_admin', 
    {layout:'home', title:'KimioLink Patient Profile', patientId:'12345'});
});

router.post('/patient_profile', (req, res) => {
    console.log('received this patient profile: '. req.body);
    res.render('patient_profile_admin',
    {layout:'home', title:'KimioLink Patient profile', patient_id:'12345', toast:'Attempted to save profile'});
});

router.get('/show_add_stage_form', (req, res) => {
    console.log('Showing the add new stage capture form');
    res.render('partials/add_new_stage_form',
    {layout:false, title:'KimioLink Oncological Plan', patient_id:'123345'});
});

router.get('/oncological_plan', (req, res) => {
    console.log('Oncological planner');
        res.render('oncological_plan',
        {layout:'home', title:'KimioLink Oncological Plan', patient_id:'12345'});
});


// Export the router
module.exports = router;
