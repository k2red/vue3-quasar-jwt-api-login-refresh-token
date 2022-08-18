<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Cafe Basilico
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          $・Italian, Cafe
        </div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve {{ itext }}
        </q-btn>
      </q-card-actions>
      <q-card-section>
        compo...
        <test-compo-vue :text="itext"></test-compo-vue>
        provide
        <test-comp-pro :text="itext"></test-comp-pro>
      </q-card-section>
      <q-card-section>
        <q-input v-model="itext" />
      </q-card-section>
      <q-card-section>
        <!-- <q-chip class="text-subtitle1" color="white" text-color="black" >
        <q-avatar floating color="green-10" text-color="white" size="22px" >5</q-avatar>
        상품보기
        </q-chip>
<br/>
<br/><br/>
<span class="text-subtitle1" color="white" text-color="black">
        상품보기<q-avatar floating color="green-10" text-color="white" size="22px" >5</q-avatar>
        </span>
<br/>
<br/><br/> -->
        <!-- <q-chip color="green" text-color="white">
        <q-avatar floating color="teal">5</q-avatar>
        상품보기
      </q-chip>
        <br/> -->
        <!-- <q-chip class="text-subtitle1" color="white" text-color="black">
        <q-badge rounded floating color="green-10" text-color="white">6</q-badge>
        상품보기
      </q-chip>
      <br/><br/>
        <div class="text-subtitle1" text-color="black">
        <q-icon color="green-10" name="filter_alt" size="2em" />필터
      </div>
      <div >
      <q-icon class="text-subtitle1"  name="shopping_cart" size="2em" color="green-10"/>
        <q-chip class="text-subtitle1" color="white" text-color="black">
        <q-badge rounded floating color="green-10" text-color="white">6</q-badge>
        상품보기
      </q-chip> -->

  <div class="q-pa-md">
    <q-select
        filled
        :options="options"
        options-cover
        stack-label
        label="연령대"
      />
  </div>

    <q-btn color="white" text-color="black" label="데이터 조회!!"  @click="getdata" />
      <!-- </div> -->
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import TestCompoVue from '../components/TestCompo.vue'
import TestCompPro from '../components/TestCompPro.vue'
import {api} from 'src/boot/axios'

export default {
  name: 'TestCompo',
  components: { TestCompoVue, TestCompPro },
  setup () {
    const itext = ref('abc')
    provide('text', itext)
    return {
      group: ref(null),
      stars: ref(4),
      itext,
      options: [
        { label: '10대', value: '10' },
        { label: '20대', value: '20', color: 'green' },
        { label: '30대', value: '30', color: 'red' },
        { label: '40대', value: '40', color: 'red' },
        { label: '50대', value: '50', color: 'red' },
        { label: '60대', value: '60', color: 'red' },
        { label: '70대이상', value: '70', color: 'red' }
      ]
    }
  },
  methods: {
    async getdata () {
      console.log('== getdata1 == 시작')
      var url = 'http://localhost:8080/api/items'
      const r = await api.get(url)
      console.log(r)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
