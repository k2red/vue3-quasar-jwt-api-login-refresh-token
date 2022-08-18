<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div>
      회원가입
    </div>
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
        :rules="[ val => val && val.length > 2 || 'Please type id']"
      />

      <q-input
        filled
        type="email"
        v-model="email"
        label="Your email *"
        hint="email"
        lazy-rules
        :rules="[ val => val && val.length > 2 || 'Please type email']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="password"
        lazy-rules
        :rules="[ val => val && val.length > 5 || 'Please type something passwords']"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
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
    const email = ref(null)
    const password = ref(null)
    const accept = ref(false)
    return {
      name,
      password,
      email,
      accept,
      router,
      async onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted '+ name.value
          })
          const useAuth = useAuthStore();
          const isok = await useAuth.register(name.value, email.value, password.value);
          if(isok){
            router.push({ path: '/login' });
          }

        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>
