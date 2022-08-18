<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div>회원 로그인1</div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type id']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something passwords']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

      <q-btn @click="router.push({ path: '/register' });">신규 회원가입</q-btn>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { useAuthStore } from 'src/stores/auth.store';
// import { axios } from 'boot/axios'
// import { signin } from 'src/helper/fetch.auth';
export default {
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const name = ref(null)
    const password = ref(null)
    return {
      name,
      password,
      router,
      async onSubmit () {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted '+ name.value
          })
          // api.request
          // const url = 'http://localhost:8000/api/auth/signin'
          // const param = { username : name.value, password : password.value }
          // console.log('user info =>', name.value, password.value)
          // await axios.post(url, param, {
          //   headers: { 'Content-Type': 'application/json'}
          //     }
          // ).then((res) => {
          //   console.log('result ==>' , res);
          // })
          // .catch(function (error) {
          //   if (error.response) {
          //     // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          //     console.log(error.response.data);
          //     console.log(error.response.status);
          //     console.log(error.response.headers);
          //   }
          //   else if (error.request) {
          //     // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          //     // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          //     // Node.js의 http.ClientRequest 인스턴스입니다.
          //     console.log(error.request);
          //   }
          //   else {
          //     // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          //     console.log('Error', error.message);
          //   }
          //   console.log(error.config);
          // });
          //
          //  const login = await signin(name.value, password.value)
          // console.log('login result =>', login)
          const useAuth = useAuthStore();
          const isok = await useAuth.login(name.value, password.value);
          if(isok){
            router.push({ path: '/' });
          }
      },

      onReset () {
        name.value = null
        password.value = null
      }
    }
  }
}
</script>
