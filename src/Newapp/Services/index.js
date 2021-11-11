import Credintials from '../Data/Credintial.json'

export const isLogin = () => {
    if (localStorage.getItem('access')) {
        return true
    }

    return false

}
export const login = (data) => {
    if (data.email=== Credintials.email) {
        if (data.password === Credintials.password) {
            localStorage.setItem('access', Credintials.email)
            return 'success'
        }
        else {
            return 'False'
        }
    }
    else {
        return 'False'
    }
}