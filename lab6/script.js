'use strict'

const button = document.querySelector('.load');
const userList = document.querySelector('.user-list');
const users = document.querySelectorAll('.user');

button.addEventListener('click', async () => {
    const users = document.querySelectorAll('.user').length;
    console.log(users);
    while (userList.firstChild) {
        userList.removeChild(userList.firstChild);
    }
    
    await loadAll();
})

const loadAll = async () => {
    for (let i = 0; i < 5; i++) {
        const data = await load();
        const div = document.createElement("div");
        div.innerHTML = `
        <img src=${data.picture.large} alt="image" class="result__image">
        <p>City: ${data.location.city}</p>
        <p>Cell: ${data.cell}</p>
        <p>Country: ${data.location.country}</p>
        <hr>
        <p>Email:</p>
        <p>${data.email}</p>
        `;
        div.classList.add('user');
        userList.appendChild(div);
    }
    
}

const load = async () => {
    const res = await fetch('https://randomuser.me/api');
    const json = await res.json();
    const data = json.results.pop();
    console.log(data);
    return data;
}
