<template lang="pug">
  .content
    .container
      .block-info
        .block-info__name Block «About me»
        ButtonAddgroup(
          @showAddingForm="showAddFormTest = true",
        )
        button.add add
      pre {{ skills }}
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
        .block.block-frontend
          .block__row.block__row_first
            input.block__input.block__input_bb.block__input_first(name='newgroup', placeholder='Frontend', required='')
            .block__btns
              .block__pencil
                button.button__pencil
              //- .block__tick
              //-   button.button__tick
              //- .block__cross
              //-   button.button__cross
          ul.block__list
            li.block__item
              input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='HTML5', required='')
              input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='100 %', required='')
              .block__btns
                .block__pencil
                  button.button__pencil
                .block__trash
                  button.button__trash
                //- .block__tick
                //-   button.button__tick
                //- .block__cross
                //-   button.button__cross
            li.block__item
              input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='CSS3', required='')
              input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='95 %', required='')
              .block__btns
                //- .block__pencil
                //-   button.button__pencil
                //- .block__trash
                //-   button.button__trash
                .block__tick
                  button.button__tick
                .block__cross
                  button.button__cross

            li.block__item
              input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='JavaScript', required='')
              input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='50 %', required='')
              .block__btns
                .block__pencil
                  button.button__pencil
                .block__trash
                  button.button__trash
                //- .block__tick
                //-   button.button__tick
                //- .block__cross
                //-   button.button__cross
            li.block__item
              input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='jQuery and Vue.js', required='')
              input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='80 %', required='')
              .block__btns
                .block__pencil
                  button.button__pencil
                .block__trash
                  button.button__trash
                //- .block__tick
                //-   button.button__tick
                //- .block__cross
                //-   button.button__cross
          .block__row.block__row_last
            input.block__input.block__input_newskill(name='newskill', placeholder='New skill', required='')
            input.block__input.block__input_percentage(name='percent', placeholder='100 %', required='')
            button.circle-btn.cirlce-btn_block
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
