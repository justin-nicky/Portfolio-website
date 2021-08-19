const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexName = /^[a-zA-Z ]+$/
const regexPhone = /^\d{10}$/
const regexNumber = /^[0-9]+$/

var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var messageInput = document.getElementById('message')

var errName = document.getElementById('error_name')
var errEmail = document.getElementById('error_email')
var errPhone = document.getElementById('error_phone')
var errMessage = document.getElementById('error_message')

var form = document.getElementById('submit-form')
var submitButton = document.getElementById('submit')
submitButton.disabled = true

// #################### Validating Name! ###########################

nameInput.addEventListener('blur', () => {
  var name = nameInput.value
  if (name == '') {
    errName.innerHTML = 'This field cannot be empty!'
  } else if (name.length < 4) {
    errName.innerHTML = 'Name should have atleast 4 charecters.'
  } else if (name.slice(-1) == ' ') {
    errName.innerHTML = 'Name should not end with space.'
  } else {
    errName.innerHTML = ''
  }
  enableDisableButton()
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
  } else if (!name.match(regexName)) {
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

//########################## Validating Email! ##############################

emailInput.addEventListener('blur', () => {
  var email = emailInput.value
  if (email == '') {
    errEmail.innerHTML = 'This field cannot be empty!'
  } else if (!email.match(regexEmail)) {
    errEmail.innerHTML = 'This email id is not valid.'
  } else {
    errEmail.innerHTML = ''
  }
  enableDisableButton()
})

emailInput.addEventListener('keyup', () => {
  var email = emailInput.value
  if (email.includes(' ')) {
    errEmail.innerHTML = 'Email id should not contain space.'
  } else if (
    errEmail.innerHTML == 'Email id should not contain space.' ||
    email.match(regexEmail)
  ) {
    errEmail.innerHTML = ''
  }
})

//######################### Validating phone number! ###########################

phoneInput.addEventListener('blur', () => {
  var phone = phoneInput.value
  if (phone == '') {
    errPhone.innerHTML = 'This field cannot be empty!'
  } else if (phone.length < 10) {
    errPhone.innerHTML = 'Phone number does not have 10 digits'
  } else if (phone.length > 10) {
    errPhone.innerHTML = 'Phone number has more than 10 digits'
  } else {
    errPhone.innerHTML = ''
  }
  enableDisableButton()
})

phoneInput.addEventListener('keyup', (e) => {
  var phone = phoneInput.value
  if (!phone.match(regexNumber) && phone != '') {
    errPhone.innerHTML = 'Enter numbers only!'
  } else if (phone.length > 10) {
    errPhone.innerHTML = 'Phone number has more than 10 digits'
  } else if (
    errPhone.innerHTML == 'Phone number should not contain space.' ||
    errPhone.innerHTML == 'Enter numbers only!' ||
    errPhone.innerHTML == 'Phone number has more than 10 digits'
  ) {
    errPhone.innerHTML = ''
  }
})

//######################### Validating message! ###########################

messageInput.addEventListener('blur', () => {
  var message = messageInput.value
  if (message == '') {
    errMessage.innerHTML = 'This field cannot be empty!'
  } else if (message.length < 10) {
    errMessage.innerHTML = 'Message should have atleast 10 charecters.'
  } else if (message.slice(-1) == ' ') {
    errMessage.innerHTML = 'Message should not end with space.'
  } else {
    errMessage.innerHTML = ''
  }
  enableDisableButton()
})

messageInput.addEventListener('keyup', (e) => {
  var message = messageInput.value
  if (message.length == 0) {
    errMessage.innerHTML = ''
  } else if (message.charAt(0) == ' ') {
    errMessage.innerHTML = 'Message should not start with space.'
  } else if (message.includes('  ')) {
    errMessage.innerHTML = 'Message should not contain consecutive spaces.'
  } else if (
    errMessage.innerHTML == 'Message should not start with space.' ||
    errMessage.innerHTML == 'Message should not contain consecutive spaces.' ||
    (errMessage.innerHTML == 'This field cannot be empty!' &&
      e.key != 'Backspace')
  ) {
    errMessage.innerHTML = ''
  }
})

//########################## Mailing ########################################
function post() {
  if (
    nameInput.value != '' &&
    emailInput.value != '' &&
    phoneInput.value != '' &&
    messageInput.value != '' &&
    errName.innerHTML == '' &&
    errEmail.innerHTML == '' &&
    errPhone.innerHTML == '' &&
    errMessage.innerHTML == ''
  ) {
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbw79b_crwItgWTVdvNaUylzUKAdVMOJcla-pHZm/exec',
      data: $('#submit-form').serialize(),
      method: 'post',
      success: function (response) {
        alert('Form submitted successfully')
        window.location.reload()
      },
      error: function (err) {
        alert('Something Error')
      },
    })
  } else {
    alert('Form values are not proper!')
  }
}

//############ Enable and disable the submit button upon validation ###########
function enableDisableButton() {
  if (
    nameInput.value != '' &&
    emailInput.value != '' &&
    phoneInput.value != '' &&
    messageInput.value != '' &&
    errName.innerHTML == '' &&
    errEmail.innerHTML == '' &&
    errPhone.innerHTML == '' &&
    errMessage.innerHTML == ''
  )
    submitButton.disabled = false
  else submitButton.disabled = true
}
