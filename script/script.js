const modal = document.getElementById('modal')
const closeModalBtn = document.getElementById('close-dialog-btn')
const formBody = document.getElementById('form-body')
const userForm = document.getElementById('user-form')
const emailError = document.getElementById('email-error')
const formEmail = userForm.querySelector('.user-email-input')
const messageSuccess = document.getElementById('user-email')
let isError = false


const handleSubmit = (e) => {
  e.preventDefault()

  const formData = formEmail.value


  if (!formData) {
    emailError.style.display = 'flex'
    formEmail.classList.add('is-error')
    emailError.textContent = 'Valid email required'
    isError = true
  } else {
    modal.style.display = 'flex'
    formBody.style.display = 'none'
    messageSuccess.textContent = formData
  }
}


closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  formBody.style.display = 'flex'
  userForm.reset()
})

function removeError() {
  if(isError){
    formEmail.classList.remove('is-error')
    emailError.style.display = 'none'
    isError = false
  }
}



userForm.addEventListener('submit', handleSubmit)

