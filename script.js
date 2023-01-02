document.addEventListener('DOMContentLoaded', () => {
  // UI Vars
  const loginForm = document.querySelector('#login-form');
  const signupForm = document.querySelector('#signup-form');

  console.log(signupForm);

  // Error arr
  let errorArr = [];

  const validateLogin = (e) => {
    e.preventDefault();

    const body = new FormData(loginForm);

    document.querySelectorAll('#errorEl').forEach((elem) => elem.remove());
    errorArr = [];

    if (body.get('email') === '') errorArr.push('Email is required');
    if (body.get('password') === '') errorArr.push('Password is required');

    if (errorArr.length > 0) {
      Array.from(document.querySelector('#login-form').children).forEach(
        (item, index) => {
          label = document.createElement('div');
          label.innerHTML = `
            <small id="errorEl" class="text-red">${errorArr[index]}*</small>
          `;
          item.appendChild(label);
        }
      );
    } else {
      alert('Logged in');
    }
  };

  const validateSignup = (e) => {
    e.preventDefault();

    const body = new FormData(signupForm);

    document.querySelectorAll('#errorEl').forEach((elem) => elem.remove());
    errorArr = [];

    if (body.get('name') === '') errorArr.push('Name is required');
    if (body.get('email') === '') errorArr.push('Email is required');
    if (body.get('password') === '') errorArr.push('Password is required');

    if (errorArr.length > 0) {
      Array.from(document.querySelector('#signup-form').children).forEach(
        (item, index) => {
          label = document.createElement('div');
          label.innerHTML = `
            <small id="errorEl" class="text-red">${errorArr[index]}*</small>
          `;
          item.appendChild(label);
        }
      );
    } else {
      alert('Signup success');
    }
  };

  loginForm.addEventListener('submit', validateLogin);
  signupForm.addEventListener('submit', validateSignup);
});