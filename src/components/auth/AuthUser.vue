<template>
<div>
  <q-btn v-if="authStore.user"
    round
    color="green"
  >
  <q-avator size="24px">
    {{authStore.user.username}}
    <q-menu persistent auto-close>
        <q-list style="min-width: 100px">
          <q-item>
            <q-item-section  avator><q-icon name="mdi-account"  size="lg" /></q-item-section>
            <q-item-section>
              <q-item-label>{{authStore.user.username}}</q-item-label>
              <q-item-label caption>{{authStore.user.email}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label >
                <div v-for="(role) in authStore.user.roles" v-bind:key="role">
                <q-chip outline color="primary" text-color="white" icon="pets">
                  {{role}}
                </q-chip>
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avator @click="logout"><q-icon name="mdi-logout" size="lg"/></q-item-section>
            <q-item-section>
              <q-item-label>sign out</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
  </q-avator>
  </q-btn>
  <q-btn v-else @click="router.push('/login')" round color="info" >
    <q-avator icon="mdi-login" size="24px">{{props.title}}</q-avator>
  </q-btn>
  </div>
</template>
<script setup lang="ts">

import { defineProps } from 'vue'
import { useAuthStore } from 'src/stores/auth.store';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({ title: {
    Type: String,
      default : ''
  } });
// vue store state management with pinia composition api style
const authStore = useAuthStore();

function logout(){
      authStore.logout();
      router.push('/login');
}

</script>
