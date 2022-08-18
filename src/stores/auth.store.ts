import { defineStore } from 'pinia';
import { ref } from 'vue';
import { signin, signup } from 'src/helper/fetch.auth';


export const useAuthStore = defineStore('useAuthStore', () => {

  const user = ref(JSON.parse(localStorage.getItem('user') as string));
  const returnUrl = ref('');

  function refeshToken( token : string){
    user.value.accessToken = token;
    localStorage.setItem('user', JSON.stringify(user));
  }

  async function login(username : string, password : string){
    try {
      const signuser = await signin(username, password )

      // update pinia state
      user.value = signuser;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(signuser));

      return true
    } catch (error) {
        console.log('useAuthStore login error =>', `${error}`)
        return false
    }
  }
  async function register(username : string, email : string, password : string){
    try {
      await signup(username, email, password )
      return true
    } catch (error) {
      console.log('useAuthStore login error =>', `${error}`)
      return false
    }
  }
  function logout() {
    user.value = null;
    localStorage.removeItem('user');
  }
  return { user, returnUrl, login, register, refeshToken, logout}
});
