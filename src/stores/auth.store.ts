import { defineStore } from 'pinia';
import { ref } from 'vue';
import { signin, signup } from 'src/helper/fetch.auth';
// import { useRouter } from 'vue-router';

// import router from 'src/router';
// import { useQuasar } from 'quasar'
// import Router  from 'src/router/index'


export const useAuthStore = defineStore('useAuthStore', () => {

  const user = ref(JSON.parse(localStorage.getItem('user') as string));
  // const router = useRouter()
  // const $q = useQuasar()
    // const route = useRoute()
  const returnUrl = ref('');

  function refeshToken( token : string){
    user.value.accessToken = token;
    localStorage.setItem('user', JSON.stringify(user));
  }

  async function login(username : string, password : string){
    try {
      const signuser = await signin(username, password )

      // // update pinia state
      user.value = signuser;

      // // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(signuser));

      // redirect to previous url or default to home page
      // router.push(returnUrl.value || '/');
      // router.push('/');
      // router.push( { name: 'main',
      //   query: {
      //       ...route.query
      //   }
      // })
      return true
    } catch (error) {
        console.log('useAuthStore login error =>', `${error}`)
        // const $q = useQuasar()
        // $q.notify({
        //   color: 'green-4',
        //   textColor: 'white',
        //   icon: 'cloud_done',
        //   message: `${error}`
        // })
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
    // router.push({ path: '/login' });
  }
  return { user, returnUrl, login, register, refeshToken, logout}
});
