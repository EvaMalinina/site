<template lang="pug">
  main-header
    h1 Welcome to the Vue App fffff
    p.text {{ text }}
</template>

<style lang="pcss"></style>

<script>
import MainHeader from './components/Header.vue'

export default {
  data() {
    return {
      text: // Переменная, которую мы объявляем в шаблоне
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  methods: {
		handleClick(e) {
			console.log(this.text);
		}
	}
}
</script>
