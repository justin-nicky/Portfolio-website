const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regxName = /^[a-zA-Z ]+$/

var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var messageInput = document.getElementById('message')

var errName = document.getElementById('error_name')
var errEmail = document.getElementById('error_email')
var errPhone = document.getElementById('error_phone')
var errMessage = document.getElementById('error_message')

// #################### Validating Name!######################

nameInput.addEventListener('blur', () => {
  var name = nameInput.value
  if (name == '') {
    errName.innerHTML = 'This field cannot be empty!'
  } else if (name.length < 4) {
    errName.innerHTML = 'Name should have atleast 4 charecters.'
  } else {
    errName.innerHTML = ''
  }
})

nameInput.addEventListener('keyup', () => {
  var name = nameInput.value
  if (name.length == 0) {
    errName.innerHTML = ''
  } else if (name.charAt(0) == ' ') {
    errName.innerHTML = 'Name should not start with space.'
  } else if (name.includes('  ')) {
    errName.innerHTML = 'Name should not contain consecutive spaces.'
  } else if (/\d/.test(name)) {
    errName.innerHTML = 'Name should not contain numbers.'
  } else if (!name.match(regxName)) {
    errName.innerHTML = 'Invalid charecter!'
  } else if (
    errName.innerHTML == 'Name should not contain numbers.' ||
    errName.innerHTML == 'Name should not start with space.' ||
    errName.innerHTML == 'Name should not contain consecutive spaces.' ||
    errName.innerHTML == 'Invalid charecter!'
  ) {
    errName.innerHTML = ''
  }
})

function post() {
  console.log('post')
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbw79b_crwItgWTVdvNaUylzUKAdVMOJcla-pHZm/exec',
    data: $('#submit-form').serialize(),
    method: 'post',
    success: function (response) {
      alert('Form submitted successfully')
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert('Something Error')
    },
  })
}
