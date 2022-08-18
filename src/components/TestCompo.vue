<template lang="">
  <div>
    text :{{text}}
  </div>
  <div>
    text :{{upper.toUpperCase()}}
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'TestCompo',
  props: {
    text: {
      type: String,
      default: () => 'abc'
      }
  },
  setup(props) {
    const upper = computed( () => props.text)
    return { upper}
  }
})
</script>
<style lang="">

</style>
