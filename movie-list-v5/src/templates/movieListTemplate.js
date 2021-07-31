import { html } from './node_modules/lit-html/lit-html.js';

export default (movies) => html `
<ul class="movie-list">
    ${movies.map(x => html `${x.title}`)}
</ul> 
`;