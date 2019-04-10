 <template lang='pug'>
    diV.works
      WorkEdit(
        v-if="showBlankEdit"
        @onSubmit="createNewItem"
      )
      WorkAdd(
        @handleShowBlankEdit="showBlankEdit = true"
        :items="items"
      )
 </template>

<script>
import axios from 'axios';
import WorkEdit from '../components/WorkEdit'
import WorkAdd from '../components/WorkAdd'

export default {
  name: 'Works',
  data () {
    return {
      showBlankEdit: false,
      items:[
         {
           pic: '1.jpg',
           title: 'School website',
           text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
           link: 'http://loftschool.ru'
         },
         {
           pic: '2.jpg',
           title: 'Music website',
           text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
           link: 'http://loftschool.ru'
         },
         {
           pic: '3.jpg',
           title: 'Beauty salon website',
           text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
           link: 'http://loftschool.ru'
         },
       ]
    }
  },
  computed: {},
  methods: {
    getItems() {
      // -> GET https://webdev-api.loftschool.com/works/
      // -> this.items = result
    },
    createNewItem(data) {
      console.log("data", data);
      // -> POST https://webdev-api.loftschool.com/works/
      // -> this.getItems()
    },
  },
  components: {
    WorkEdit,
    WorkAdd
  },
  created() {
    this.getItems();
  }
}
</script>


 <style lang='pcss'>
  .works {
    grid-area: content;
    display: flex;
    flex-direction: column;

  }
 </style>
