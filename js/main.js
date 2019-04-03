'use strict';





const Validation = (evt) => {
  console.log('täällä on käyty');
  const name = document.querySelector('input[name=firstname]');
  const lastname = document.querySelector('input[name=lastname]');
  const email = document.querySelector('input[name=email]');
  const num = document.querySelector('input[name=phonenumber]');
  const post = document.querySelector('input[name=postalcode]');
  const pwd = document.querySelector('input[name=password');

 const emailReg = /\S+@\S+\.\S+/;
 const numReg = /[+][3][5][8]\d{9}/;
 const postReg = /\d{5}/;


  if (name.value === "") {
    alert("Invalid input");
    evt.preventDefault();
  }
  if (lastname.value === "") {
    alert("Invalid input");
    evt.preventDefault();
  }
  if (email.value === "") {
    alert("Invalid input");
    evt.preventDefault();
  }
  if (emailReg.test(email.value) === false) {
    alert("Invalid email input");
    evt.preventDefault();
  }
  if (numReg.test(num.value) === false) {
    alert("Invalid num input");
    evt.preventDefault();
  }
  if (post.value !== "") {
    if (postReg.test(post.value) === false) {
      alert("Invalid postcode input");
      evt.preventDefault();
    }
  }
  if (pwd.value == "") {
    alert("Input password");
    evt.preventDefault();
  }



};

const element = document.querySelector('form');
console.log(element);
element.addEventListener('submit', Validation);
