const request = (method, url, data) => {
    const options = {
        method,
    };
    
    if (method = 'POST') {
        options.headers = {
            'Content-Type': 'application/json'
        }

        options.body = JSON.stringify(data);
    }
    
    return fetch(url, options).then(res => res.json());
}

export default request;

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');