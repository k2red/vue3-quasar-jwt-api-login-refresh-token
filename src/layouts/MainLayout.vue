<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Vue3 Quasar Typescript - JWT API Login and refresh token
        </q-toolbar-title>
        <!-- <AuthBtn title="Composable Style"></AuthBtn> -->
        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <!-- <AuthBtnPiniaOptional title="Pinia Optional"></AuthBtnPiniaOptional> -->
        <!-- <AuthBtnPiniaComposition title="Pinia Composition"></AuthBtnPiniaComposition> -->
        <AuthUser title="login"></AuthUser>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          메뉴
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
// import AuthBtn from 'components/auth/AuthBtn.vue';
// import AuthBtnPiniaComposition from '../components/auth/AuthBtnPiniaComposition.vue';
import AuthUser from 'src/components/auth/AuthUser.vue';
// import AuthBtnPiniaOptional from 'src/components/auth/AuthBtnPiniaOptional.vue';

const linksList = [
  {
    title: '홈',
    caption: 'quasar.dev',
    icon: 'home',
    link: '/',
    target: '_self'
  },
  {
    title: '게시판',
    caption: '게시판을 조회합니다.',
    icon: 'code',
    link: '/board',
    target: '_self'
  },
  {
    title: 'quasar',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    // AuthBtn,
    // AuthBtnPiniaOptional,
    // AuthBtnPiniaComposition,
    AuthUser
},

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
