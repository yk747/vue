<template>
  <div class="note-card">
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
    <p>{{ message.toUpperCase() }}</p>
    <p>{{ 1 + 2 * 3 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '我的第一条笔记',
      message: 'hello vue',
      count: 0
    }
  }
}
</script>

<style scoped>
.note-card {
  border: 1px solid #42b983;
  padding: 10px 16px;
  border-radius: 6px;
  margin: 10px 0;
}
</style>
