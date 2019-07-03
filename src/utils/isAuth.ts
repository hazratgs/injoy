import axios from 'axios'

const isAuth = (): boolean => {
  const token = window.localStorage.getItem('token')
  
  if (token) {
    axios.defaults.headers = {
      'Authorization': `bearer ${token}`
    }
    
    return true
  }
  return false
}

export default isAuth
