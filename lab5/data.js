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
