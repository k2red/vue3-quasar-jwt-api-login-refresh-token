<template lang="">
  <div>
    text : {{text}}
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'TestCompo',
  setup() {
    const text = inject('text')
    return { text}
  }
})
</script>
<style lang="">

</style>
