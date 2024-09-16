export function SubForm() {

// Select the container where the form will be inserted
const container = document.querySelector('.container.subscription-content');

// Create the subscription details container
const subscriptionDetails = document.createElement('div');
subscriptionDetails.classList.add('subscription-details');

// Create and append the logo
const logo = document.createElement('img');
logo.src = '/logo_white.svg';
logo.alt = '';
subscriptionDetails.append(logo); // Using append

// Create and append the title
const title = document.createElement('h1');
title.classList.add('subscription-title');
title.innerHTML = 'Подпишитесь на E-mail рассылку'; // Using innerHTML
subscriptionDetails.append(title); // Using append

// Create and append the description
const description = document.createElement('p');
description.classList.add('subscription-description');
description.innerHTML = 'Если хотите быть в курсе последних новостей и новинок кино – заполните форму ниже и оформите бесплатную E-mail рассылку!'; // Using innerHTML
subscriptionDetails.append(description); // Using append

// Create the form
const form = document.createElement('form');
form.classList.add('subscription-form');

// Create the email input
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.classList.add('email-input');
emailInput.placeholder = 'Введите свой E-mail адрес';
emailInput.required = true;
form.append(emailInput); // Using append

// Create and append the submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.classList.add('submit-button');
submitButton.innerHTML = 'Подписаться'; // Using innerHTML
form.append(submitButton); // Using append

// Append the form to the subscription details
subscriptionDetails.append(form); // Using append

// Create and append the checkbox label
const label = document.createElement('label');
label.classList.add('subscription-checkbox');

// Create and append the checkbox input
const checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';
checkboxInput.classList.add('checkbox-input');
checkboxInput.checked = true; // Correctly setting the checkbox as checked
checkboxInput.required = true;
label.append(checkboxInput); // Using append

// Add the text and privacy link
const labelText = document.createTextNode(' Соглашаюсь на условия ');
label.append(labelText); // Using append

const privacyLink = document.createElement('a');
privacyLink.href = '#';
privacyLink.classList.add('privacy-link');
privacyLink.innerHTML = 'политики конфиденциальности'; // Using innerHTML
label.append(privacyLink); // Using append

// Append the checkbox label to the subscription details
subscriptionDetails.append(label); // Using append

// Finally, append everything to the container
container.append(subscriptionDetails); // Using append

}