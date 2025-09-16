document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('newUserForm');
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    if(password !== verified) {
        const password = document.getElementById('password').value;
        const verified = document.getElementById('validatePassword').value;
        
        console.log(password, verified)
        alert('Passwords do not match!')
    } else {
        "Match!"
    }
    });
})

