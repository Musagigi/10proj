<template>
  <main class="main">
    <li class="items" v-for="(item, index) in viewNote" :key="index">
      <div class="item">{{ index + 1 }} {{ item }}</div>
      <button class="item-btn" @click="$emit('delNote', index)">Удал</button>
    </li>
  </main>
</template>

<script>
export default {
  name: "view-notes",
  props: {
    viewNote: {
      type: Array,
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

.items {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

.item {
  list-style-type: none;
  font-size: 24px;
  color: rgb(255, 255, 255);
}
</style>
