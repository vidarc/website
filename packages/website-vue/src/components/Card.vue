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
    },
    face: {
      type: Boolean,
      required: true
    }
  },
  render: (createElement, { props, listeners }) => {
    const { suit, value, face } = props

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

    const classes = suit === 'clubs' || suit === 'spades' ? 'card black' : 'card red'
    const display = suit === 'joker' ? `${value}` : `${suitEmoji} - ${value}`

    return face
      ? createElement('div', { class: classes, on: { ...listeners } }, display)
      : createElement('div', { class: classes, on: { ...listeners } })
  }
})
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid black;
  cursor: pointer;
  height: 100px;

  &.red {
    color: red;
  }

  &.black {
    color: black;
  }
}
</style>
