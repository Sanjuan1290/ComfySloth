
export function saveIsLoggedIn(success) {
    localStorage.setItem('isLoggedIn', JSON.stringify(success))
}
