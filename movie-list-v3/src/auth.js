export function saveToken(token) {
    localStorage.setItem('auth_token', token);
}

export function isAuthenticated() {
    let isAuth = Boolean(localStorage.getItem('auth_token'));
    
    return isAuth;
}

export function logout() {
    localStorage.removeItem('auth_token');
}