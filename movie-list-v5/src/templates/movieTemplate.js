import { html } from '../../node_modules/lit-html/lit-html.js';

export default (movie) => html `
    <li class="movie-item" style="width: 18rem;">
        <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <a href="#" @click=${movie.onDetailsClick} class="btn btn-primary">Show Details</a>
        </div>
    </li>
`;