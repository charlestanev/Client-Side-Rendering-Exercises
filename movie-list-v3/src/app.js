import { isAuthenticated } from './auth.js';
import loginPage from './loginPage.js';
import registerPage from './registerPage.js';
import moviesPage from './pages/moviesPage.js';
import navigation from './navigation.js'
import logout from './logout.js';

let headerElement = document.querySelector('.header .nav');

let pages = {
    register: registerPage,
    login: loginPage,
    movies: moviesPage,
    logout,
}

navigation.updateNavigation();

if (isAuthenticated()) {
    moviesPage.showPage();
}

headerElement.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName == 'A') {
        let dataLink = e.target.getAttribute('data-link');
        navigation.updateNavigation();


        if (Object.keys(pages).includes(dataLink)) {
            hidePages();

            let currentView = pages[dataLink];

            currentView.showPage();
        }
    }
});

function hidePages() {
    Object.values(pages).forEach(x => x.hidePage());
}