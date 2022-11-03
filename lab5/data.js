const fullName = document.querySelector('#full-name');
const idCard = document.querySelector('#id-card');
const dateOfBirth = document.querySelector('#date-of-birth');
const address = document.querySelector('#address');
const eMail = document.querySelector('#e-mail');
const formOutput = document.querySelector(".form-output");

const inputs = document.querySelectorAll(".input");

document.querySelector(".submit").onclick = function() {
    let error;
    inputs.forEach(input => {
        input.classList.remove('input-error');
    });

    if (!/^[А-ЯІЇЄ][а-яіїє]+ [А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/.test(fullName.value)) {
        fullName.classList.add('input-error');
        error = true;
    }
    if (!/^[A-Z]{2} №\d{6}$/.test(idCard.value)) {
        idCard.classList.add('input-error');
        error = true;
    }
    if (!/\d{2}.\d{2}.\d{4}/.test(dateOfBirth.value)) {
        dateOfBirth.classList.add('input-error');
        error = true;
    }
    if (!/^м\. [А-ЯҐЄІЇ][а-яґєії]+((-| )[А-ЯҐЄІЇ][а-яґєії]+)?/.test(address.value)) {
        address.classList.add('input-error');
        error = true;
    }
    if (!/^\S+@\S+\.\S+$/.test(eMail.value)) {
        eMail.classList.add('input-error');
        error = true;
    }
    
    if (error) {
        return false;
    }

    formOutput.innerHTML = '';
    const outputData = `
            <h3>Введені дані:</h3>
                <ul>
                   <li>ПІБ: <span>${fullName.value}</span></li>
                    <li>ID-card: <span>${idCard.value}</span></li>
                    <li>Дата народження: <span>${dateOfBirth.value}</span></li>
                    <li>Адреса: <span>${address.value}</span></li>
                    <li>e-mail: <span>${eMail.value}</span></li>
                </ul>
    `;
    formOutput.insertAdjacentHTML('afterbegin', outputData);

    fullName.value = '';
    idCard.value = '';
    dateOfBirth.value = '';
    address.value = '';
    eMail.value = '';
    
    return false;
};

const table = document.querySelector('.table');
const colorPicker = document.querySelector('.color-picker');

for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const num = i * 6 + j + 1;
        const td = document.createElement('td');
        td['id'] = num;
        td.textContent = num;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

const getRandomColor = () => {
    return '#' + (Math.random().toString(16)
        + '000000').substring(2,8).toUpperCase();
} 

const myCell = document.getElementById('21');

myCell.onclick = function () {
    myCell.style.backgroundColor = colorPicker.value;
}

myCell.ondblclick = function () {
    const randomColor = getRandomColor();
    for (let i = 1; i < 4; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j < 7; j++) {
            const cell = document.getElementById(`${(i) * 12 + j - 6}`)
            cell.style.backgroundColor = colorPicker.value;
        }
    }
}

myCell.onmouseover = function () {
    myCell.style.backgroundColor = getRandomColor();
}