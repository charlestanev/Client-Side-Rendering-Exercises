import { html } from './node_modules/lit-html/lit-html.js';

export default (movie) => html `
    <li class="card" style="width: 18rem;">
        <img src="${movie.imgSrc}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <a href="#" class="btn btn-primary">Show Details</a>
        </div>
    </li>
`;