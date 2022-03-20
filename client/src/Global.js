export const headers = {
  "Accept": "application/json",
  "Content-type": "application/json"
}

export const getToken = () => {
  return {
    'Authorization': `bearer ${ localStorage.getItem('jwt') }`
  }
}