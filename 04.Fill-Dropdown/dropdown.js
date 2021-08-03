import { render } from './../node_modules/lit-html/lit-html.js';
import { allOptionsTemplate } from './templates/optionTemplates.js';

let menuSelect = document.getElementById('menu');

let addOptionForm = document.getElementById('add-option-form');
addOptionForm.addEventListener('submit', addItem);

loadOptions();

async function loadOptions() {
    let optionsResponse = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    let optionsObj = await optionsResponse.json();
    let options = Object.values(optionsObj);
    render(allOptionsTemplate(options), menuSelect);
}

async function addItem(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let newOption = {
        text: formData.get('text')
    }

    let createResponse = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        headers: { 'Content-Type': 'applicatoin/json' },
        method: 'Post',
        body: JSON.stringify(newOption)
    });

    if (createResponse.ok) {
        await loadOptions();
    }
}