 <template lang='pug'>
    diV.works
      WorkEdit
      WorkAdd
 </template>
 
 <script>
import WorkEdit from '../components/WorkEdit'
import WorkAdd from '../components/WorkAdd'

   export default {
     name: 'Works',
     data () {
       return {
 
       }
     },
     computed: {},
     methods: {},
     components: {
       WorkEdit,
       WorkAdd
     }
   }
 </script>
 
 
 <style lang='pcss'>
  .works {
    grid-area: content-works;
    display: flex;
    flex-direction: column;

  }
 </style>