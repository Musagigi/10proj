<template>
  <main class="main">
    <ul class="main__list">
      <li class="list__item" v-for="item in addNote" :key="item.index">
        {{ item }}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "main-list",
  props: {
    addNote: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.main {
  min-height: 400px;
  min-width: 300px;
  margin-bottom: 20px;
  border: 2px dashed rgb(255, 255, 255);
  transition: 0.3s;
}
.main:hover {
  border: 2px dashed rgb(255, 0, 225);
}

.main__list {
  list-style-type: none;
}

.list__item {
  margin: 10px;
  font-size: 24px;
  color: rgb(255, 255, 255);
}
</style>
