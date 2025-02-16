<template>
  <div>
    <svg-icon icon-class="question" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'RoseDoc',
  data() {
    return {
      url: 'http://doc.rose.vip/rose-vue'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>