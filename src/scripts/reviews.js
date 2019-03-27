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
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                groupCells: window.screen.width > 768 ? 2 : 1,
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
