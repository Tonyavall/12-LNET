const signupForm = document.querySelector('#signup-form');

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#firstname-signup').value.trim();
  const last_name = document.querySelector('#lastname-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // Check all form variables
  if (first_name && last_name && username && email && password) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          first_name,
          last_name,
          email,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      const dbMessage = await response.json()

      if (response.ok) {
        return document.location.replace('/login');
      }
      const checkMessage = document.querySelector('.invalid-auth');

      if (checkMessage) {
        checkMessage.remove();
      }
      const message = {
        tag: 'p',
        setAttr: {
          class: 'invalid-auth',
        },
        textContent: dbMessage,
        appendTo: signupForm,
      };
      return appendContent(message);
    } catch (err) {
      console.log(err);
    }
  }
  // If one of the form variables is undefined continue here.
  const checkMessage = document.querySelector('.invalid-auth');

  if (checkMessage) {
    checkMessage.remove();
  }

  const message = {
    tag: 'p',
    setAttr: {
      class: 'invalid-auth',
    },
    textContent: 'You must fill out the entire form!',
    appendTo: signupForm,
  };
  appendContent(message);
};

signupForm.addEventListener('submit', signupFormHandler);