<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  functional: true,
  props: {
    suit: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    }
  },
  render: (createElement, { props }) => {
    const { suit, value } = props

    this.props

    let suitEmoji
    switch (suit) {
      case 'clubs':
        suitEmoji = '\u2663'
        break
      case 'spades':
        suitEmoji = '\u2660'
        break
      case 'hearts':
        suitEmoji = '\u2665'
        break
      case 'diamonds':
        suitEmoji = '\u2666'
        break
      default:
        suitEmoji = suit
    }

    const display = suit === 'joker' ? `${value}` : `${suitEmoji} - ${value}`

    return createElement('div', { class: 'card' }, display)
  }
})
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid black;
  height: 100px;
}
</style>
