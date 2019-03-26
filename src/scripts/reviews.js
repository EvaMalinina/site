import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
    template: "#reviews-list",
    el: "#reviews-component",

    components: {
        Flickity
    },

    data () {
        return {
            flickityOptions: {
                // initialIndex: 3,
                // prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                groupCells: 2,
                resize: true

                // any options from Flickity can be used
            }
        }
    },

    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    }
});
