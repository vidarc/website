<template functional>
  <div class="card">{{ props.suit }} - {{ props.value }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props: {
    suit: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid black;
  height: 100px;
}
</style>
