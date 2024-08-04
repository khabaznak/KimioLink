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
  let menu = [
    {title: 'Home', url: '/home'},
    {title: 'Logout', url: '/Logout'},
    {title: 'Search meds', url: '/search'},
    {title: 'Treatment Plan', url: '/oncological_plan'},
    {title: 'Your patient profile', url: '/patient_profile'},
    {title: 'Your sponsors', url: '/sponsors'}
  ];
  res.render('homepage',{layout:'home',title:'KimioLink Patient Home', sidebar: menu, patientId:'12345'});
});

router.get('/patient_profile', (req, res) => {
  let menu = [
    {title: 'Back to Home', url: '/home'},
    {title: 'Logout', url: '/Logout'},
    {title: 'Search meds', url: '/search'},
    {title: 'Treatment Plan', url: '/oncological_plan'},
    {title: 'Your patient profile', url: '/patient_profile'},
    {title: 'Your sponsors', url: '/sponsors'}
  ];
  res.render('patient_profile_admin', 
    {layout:'home', title:'KimioLink Patient Profile', sidebar:menu, patientId:'12345'});
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
// Route to handle form submission
router.post('/add-stage', (req, res) => {
  const { stageName, drug, dose, frequency, restingPeriod } = req.body;
  
  // Here, you would typically save the data to your database
  // For simplicity, let's log it and respond with a success message
  console.log(`New stage added: ${stageName}, ${drug}, ${dose}, ${frequency}, ${restingPeriod}`);
  
  // Respond with a success message or updated content
  res.send(`<p>Stage "${stageName}" successfully added!</p>`);
});

router.get('/oncological_plan', (req, res) => {
  console.log('Oncological planner');
  let menu = [
    {title: 'Back to Home', url: '/home'},
    {title: 'Logout', url: '/Logout'},
    {title: 'Search meds', url: '/search'},
    {title: 'Treatment Plan', url: '/oncological_plan'},
    {title: 'Your patient profile', url: '/patient_profile'},
    {title: 'Your sponsors', url: '/sponsors'}
  ];
  res.render('oncological_plan',
    {layout:'home', title:'KimioLink Oncological Plan', sidebar:menu, patient_id:'12345'});
});


router.post('/save-treatment-medication', (req, res) => {   
  let medicationPlan = {
    medicationName: req.body.medicationName,
    activeSubstance: req.body.activeSubstance,
    alternative: req.body.alternative,
    dosage: req.body.dosage,
    dosageUnit: req.body.dosageUnit,
    guide: req.body.guide,
    restPeriod: req.body.restPeriod,
    duration: req.body.duration,
    durationUnit: req.body.durationUnit,
    doctorName: req.body.doctorName,
    doctorEmail: req.body.doctorName
  };

  console.log('Saving treatment medication');

  let menu = [
    {title: 'Home', url: '/'},
    {title: 'Logout', url: '/Logout'},
    {title: 'Search meds', url: '/search'},
    {title: 'Treatment Plan', url: '/oncological_plan'},
    {title: 'Your patient profile', url: '/patient_profile'},
    {title: 'Your sponsors', url: '/sponsors'}
  ];
  res.render('oncological_plan',{layout:'home', title:'KimioLink Oncological Plan', sidebar: menu, patientId:'12345', treatmentPlan: medicationPlan});
});


// Export the router
module.exports = router;
