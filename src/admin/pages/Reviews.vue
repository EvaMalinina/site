<template lang='pug'>
  div.reviews
    ReviewEdit
    ReviewAdd
</template>

<script>
import ReviewEdit from '../components/ReviewEdit'
import ReviewAdd from '../components/ReviewAdd'

  export default {
    name: 'Reviews',
    data () {
      return {

      }
    },
    computed: {},
    methods: {},
    components: {
      ReviewEdit,
      ReviewAdd
    }
  }
</script>


<style lang='pcss'>
.reviews {
  grid-area: content;
  display: flex;
  flex-direction: column;
}
</style>