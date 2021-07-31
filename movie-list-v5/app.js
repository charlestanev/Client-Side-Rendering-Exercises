import { render, html } from './node_modules/lit-html/lit-html.js';

let movieTemplate = (movie) => html `
    <article>
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
        <button ?disabled=${movie.isDisabled}>Details</button>
    </article>
`;

let movie = { title: 'Black Widow', description: 'New movie', isDisabled: true };
let templateResult = movieTemplate(movie);
let rootElemet = document.getElementById('root');

render(templateResult, rootElemet);