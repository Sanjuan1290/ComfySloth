export function getIsLoggedIn() {
    return JSON.parse(localStorage.getItem('isLoggedIn')) || false
}

export function saveIsLoggedIn(success) {
    localStorage.setItem('isLoggedIn', JSON.stringify(success))
}
