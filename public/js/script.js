document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('newUserForm');
form.addEventListener('submit', (e)=> {
    
    const password = document.getElementById('password').value;
    const verified = document.getElementById('validatePassword').value;

    if(password !== verified) {
        e.preventDefault();
        console.log(password, verified)
        alert('Passwords do not match!');
    }
});
});


