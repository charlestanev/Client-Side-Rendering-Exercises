import { isAuthenticated } from './auth.js';

let guestNavItems = document.getElementsByClassName('guest');
let privatetNavItems = document.getElementsByClassName('private');

function updateNavigation() {
    if (isAuthenticated()) {
        for (const navItem of guestNavItems) {
            navItem.classList.add('hidden');
        }

        
        for (const navItem of privatetNavItems) {
            navItem.classList.remove('hidden');
        }
    } else {
        
        for (const navItem of guestNavItems) {
            navItem.classList.remove('hidden');
        }

        for (const navItem of privatetNavItems) {
            navItem.classList.add('hidden');
        }
    }
}

export default {
    updateNavigation
}
