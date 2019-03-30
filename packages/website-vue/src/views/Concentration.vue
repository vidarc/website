<template>
  <div class="about">
    <h2>Concentration</h2>
    <div class="container">
      <template v-for="(card, index) in deck">
        <card @click="flipCard(index)" :key="card.id" :suit="card.suit" :value="card.value" :face="card.face" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

import Card from '../components/Card.vue'

export default Vue.extend({
  name: 'Concentration',
  components: { Card },
  computed: {
    ...mapState(['deck'])
  },
  methods: {
    ...mapActions(['flipCard'])
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  margin: 0 auto;
  justify-content: center;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
</style>
