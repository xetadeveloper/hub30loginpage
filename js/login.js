document.addEventListener('readystatechange', () => {
  if (document.readyState == 'complete') {
    const designPage = document.querySelector('.design-page');
    const heroHeader = document.querySelector('.hero h1');
    const heroParagraph = document.querySelector('.hero p');

    heroHeader.classList.add('swing-in');
    heroParagraph.classList.add('fade-in');
    designPage.classList.add('drop-down');
  }
});

/** Handles opening and closing of the login modal */
function loginModal() {
  const loginBody = document.querySelector('.login-body');
  const loginOpenBtn = document.querySelector('.login-open-btn');
  const loginOverlay = document.querySelector('.login-overlay');

  loginBody.classList.toggle('slideIn');
  loginOpenBtn.classList.toggle('slideOut');
  loginOverlay.classList.toggle('show-overlay');
}

/**Handles toggling password visibility */
function showPassword() {
  const inputPass = document.querySelector('.form-input[name=password]');

  if (inputPass.value) {
    if (inputPass.type === 'password') {
      inputPass.type = 'text';
    } else {
      inputPass.type = 'password';
    }
  }
}

