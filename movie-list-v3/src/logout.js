import { logout } from './auth.js'

function showPage() {
    logout();
}

function hidePage() {
}

export default {
    showPage,
    hidePage,
}