//password match checking

const passwordField = document.querySelector('#password');
const passwordFieldError = document.querySelector('#password + span.error');
const confirmField = document.querySelector('#confirm');
const confirmFieldError = document.querySelector('#confirm + span.error');

const updateErrors = () => {
   const passwordsMatch = passwordField.value === confirmField.value;

   if (passwordField.validity.tooShort && confirmField.value === '') {
      passwordFieldError.textContent = '*Password too short';
      confirmFieldError.textContent = '';
   } else if (passwordField.validity.tooShort) {
      passwordFieldError.textContent = '*Password too short';
      confirmFieldError.textContent = passwordsMatch ? '' : '*Passwords do not match';
   } else {
      passwordFieldError.textContent = '';
      confirmFieldError.textContent = passwordsMatch ? '' : '*Passwords do not match';
   }
};

passwordField.addEventListener('input', updateErrors);
confirmField.addEventListener('input', updateErrors);


// first name and email validation

const nameField = document.querySelector('#name');
const nameFieldError = document.querySelector('#name + span.error');
const emailField = document.querySelector('#email');
const emailFieldError = document.querySelector('#email + span.error');

nameField.addEventListener('input', () => {
   if (nameField.validity.valid) {
      nameFieldError.textContent = '';
   }
   else {
      nameFieldError.textContent = '*Name too short';
   }
});

emailField.addEventListener('input', () => {
   //emailField.required = 'true';
   if (emailField.validity.valid) {
      emailFieldError.textContent = '';
   }
   else {
      emailFieldError.textContent = '*You need to enter a valid e-mail address';
   }
});

//field validation after submit 

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {

   event.preventDefault();

   function validate() {
      let fieldsArray = form.querySelectorAll('label');


      fieldsArray.forEach(element => {
         if (element.innerText.includes('*')) {
            // console.log('element:', element.innerText);
            let inputReq = element.querySelector('input');

            inputReq.required = 'true';

            if (!inputReq.validity.valid) {
               event.preventDefault();
            }
         }
      })
   }


   validate();

});