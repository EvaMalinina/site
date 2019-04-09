import Vue from 'vue';
import Vuex from'vuex';


Vue.use(Vuex);

import categories from './modules/categories.js';
import works from './modules/works.js';

export default new Vuex.Store ({
    modules: {
      categories,
      works
    },
});
