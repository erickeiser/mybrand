// Smooth Scrolling animation for sections

$('nav').find('a').click(function(e){
  e.preventDefault();
  var section = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(section).offset().top
    })
})

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCXaiP9XVxNEice5ol8MoArKkF-Pxppvds",
  authDomain: "contact-form-f5a8a.firebaseapp.com",
  databaseURL: "https://contact-form-f5a8a.firebaseio.com",
  projectId: "contact-form-f5a8a",
  storageBucket: "",
  messagingSenderId: "132737329912"
};
firebase.initializeApp(config);

//REFERENCE MESSAGES COLLECTION
var messagesRef = firebase.database().ref('messages');



// EVENT LISTENER FOR FORM SUBMIT
document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit Form
function submitForm(e) {
e.preventDefault();

// GET values
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');
var form = document.getElementById('contactForm');

//Save Messages
saveMessages(name, company, email, phone, message);

//Show Alert
document.querySelector('.alert').style.display = 'block';

//Hide Alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

//Form reset 
form.reset();

}





// function to get form values
function getInputVal(id) {
return document.getElementById(id).value;
} 

// Save messages to firebase
function saveMessages(name, company, email, phone, message) {
var newMessageRef = messagesRef.push();
newMessageRef.set({
  name: name,
  company: company,
  email: email,
  phone: phone,
  message: message
})
}