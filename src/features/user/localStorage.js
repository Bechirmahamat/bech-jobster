export const getUserLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user || null
}
export const setUserLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}
