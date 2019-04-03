<template lang="pug">
    div.c-plank
        .workadd__item
            .workadd__exmpl(
                v-if="item.pic"
                :style="{ backgroundImage:` url(${require(`../../../../images/content/${item.pic}`)})` }"
            )
            .workadd__exmpl-name {{ item.title }}
            .workadd__exmpl-text {{ item.text }}
            a.workadd__link(href="#") {{ item.link }}
            .workadd__btns
                .workadd__btn-correct(@click="add(item, $event)")
                    button.button__correct Correct
                    img.workadd__img
                .workadd__btn-delete(@click="remove(item, $event)")
                    button.button__delete Remove
                    img.workadd__img
</template>

<script>
export default {
    props: {
        item: Object,
        remove: Function,
        add: Function
    },
    data(){
        return {}
    },
    computed: {},
    methods: {},
    components: {}
}
</script>

<style lang="scss" src="./c-plak.pcss"></style>