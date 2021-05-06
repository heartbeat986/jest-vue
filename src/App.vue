<template>
  <div id="app">
    <my-header></my-header>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import MyHeader from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    MyHeader,
  },
};
</script>

<style lang="scss">

</style>
