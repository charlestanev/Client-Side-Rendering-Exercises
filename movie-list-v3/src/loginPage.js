let loginSection = document.querySelector('.login');

function showPage() {
    loginSection.classList.remove('hidden');
}

function hidePage() {
    loginSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage,
}