<template>
  <div>
    <!-- <q-card>
      User {{ firebaseUser?.displayName }}
    </q-card>
    <q-page-sticky
      :offset="[28,28]"
    >
      <button v-if="isSigned">write {{ firebaseUser?.email }}</button>
    </q-page-sticky> -->
    <PostWrite></PostWrite>
  </div>
</template>
<script setup lang="ts">
import { } from 'vue'
// import { firebaseUser, isSigned } from 'src/composables/useAuth';
import PostWrite from '../components/PostWrite.vue';
// export default {

// }
</script>
