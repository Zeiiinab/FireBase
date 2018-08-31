document.getElementById('contactForm').addEventListener('submit', submitForm);
function getInputVal(id){
    return document.getElementById(id).value;
  }
function submitForm(e) {
    e.preventDefault();
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
}
document.getElementById('contactForm').reset();

var messagesRef = firebase.database().ref('messages');
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }
  saveMessage(name, company, email, phone, message);
  // Show alert
document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
            
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAoPfF0YKvLvikeElvJM2Vh2-w-GQkw_8A",
    authDomain: "projet-de-stage-21f84.firebaseapp.com",
    databaseURL: "https://projet-de-stage-21f84.firebaseio.com",
    projectId: "projet-de-stage-21f84",
    storageBucket: "projet-de-stage-21f84.appspot.com",
    messagingSenderId: "1028419758709"
  };
  firebase.initializeApp(config);
</script>

