let baseUrl = 'http://localhost:3030';

function getAll() {
    return fetch(`${baseUrl}/data/movies`)
        .then(res => res.json());
}

export default {
    getAll,
}