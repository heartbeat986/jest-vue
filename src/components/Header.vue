<template>
  <div class="header">
    <input data-test="input" v-model="inputValue" @keyup.enter="changeValue" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    changeValue() {
      if (this.inputValue) {
        this.$emit('add', this.inputValue);
        this.inputValue = '';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
