const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');
const saveUser = document.getElementById('saveUser');
const usernameInput = document.getElementById('username');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });
  
  closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });


saveUser.addEventListener('click', () => {
    const username = usernameInput.value;
    localStorage.setItem('username', username);
    alert(`Welcome, ${username}`);
    loginModal.style.display = 'none';
  });
  