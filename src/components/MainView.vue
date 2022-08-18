<template lang="">
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">User All</div>
        <div class="text-subtitle2">PUBLIC</div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat @click="requestData('all')">조회</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">User</div>
        <div class="text-subtitle2">USER OR ADMIN</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat @click="requestData('user')">조회하기</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h6">ADMIN</div>
        <div class="text-subtitle2">ADMIN</div>
      </q-card-section>

      <q-card-actions vertical align="right">
        <q-btn flat @click="requestData('admin')">조회하기</q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>
<script setup lang="ts">
import { getData } from 'src/helper/fetch.user';
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
const $q = useQuasar()
const router = useRouter();
async function requestData(data : string){
    try {
      const res = await getData( data );
      console.log(`request data : ${data} => ${res}`)
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: `request data : ${data} => ${res}`
      })
    } catch (error) {
      //권한없거나 잘못 호출한 경우
      console.log('unexpected error: ', error);
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: `No Roles : ${data} => ${error}`
      })
      router.push({path:'/login'})
    }

}


</script>
<style lang="">

</style>
