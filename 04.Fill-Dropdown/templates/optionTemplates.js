import { html } from './../../node_modules/lit-html/lit-html.js';

export let optionTemplate = (option) => html `<option .value=${option._id}>${option.text}</option>`

export let allOptionsTemplate = (option) => html `${option.map(o => optionTemplate(o))}`