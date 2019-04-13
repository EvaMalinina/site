<template lang="pug">
  .content
    .container
      .block-info
        .block-info__name Block «About me»
        ButtonAddgroup(
          @showAddingForm="showAddFormTest = true",
        )
      .blocks
        Skilladd(
          v-if="showAddFormTest"
          @onHideNewSkill="showAddFormTest = false"
        )
        Skillplank(
          v-for="category in categories"
          :key="category.id"
          :category = "category"
          :skills = "filterSkillsByCategoryId(category.id)"
        )
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const {
    mapActions: categoriesMapActions,
    mapState: categoriesMapState,
    mapGetters: categoriesMapGetters,
    mapMutations: categoriesMapMutations
} = createNamespacedHelpers('categories');
const {
    mapActions: skillsMapActions,
    mapState: skillsMapState,
    mapGetters: skillsMapGetters,
    mapMutations: skillsMapMutations
} = createNamespacedHelpers('skills');

export default {
  name: 'About',
  data () {
    return {
      showAddFormTest: false,
    }
  },
  computed: {
    ...categoriesMapState( {
      categories: state => state.categories
    }),
    ...skillsMapState({
      skills: state => state.skills
    })
  },
  components: {
    Skilladd: () => import("../ui/Skilladd.vue"),
    Skillplank: () => import("../ui/Skillplank.vue"),
    ButtonAddgroup: () => import("../ui/ButtonAddgroup.vue")
  },
  methods: {
    ...categoriesMapActions(['fetchCategories']),
    ...skillsMapActions(['fetchSkills']),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    },
    },
    async created() {
      try {
        await this.fetchCategories(); 
        
      } catch (error) {
        alert('Произошла ошибка при загрузке категорий') 
      }

      try {
        await this.fetchSkills(); 
        
      } catch (error) {
        alert('Произошла ошибка при загрузке скиллов') 
      }
    },
  
};
</script>

<style lang="pcss">
@import "../../styles/mixins.pcss";
.content {
  display: grid;
  grid-area: content;
  background-color:#f7f9fe;
}
.block-info {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template: 135px
  / repeat(5, 1fr);
}
.block-info__name {
  font-size: 21px;
  font-weight: bold;
  line-height: 1.62;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;
}
.blocks {
  display: grid;
  grid-template: 387px 387px
  /525px 525px;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  justify-content: center;
}

.block-frontend {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
</style>
