<template>
  <wrapper class="wrapper">
    <section class="section">
      <header class="header">
        <h1 class="head-title">Список дел</h1>
      </header>

      <view-notes
        v-show="list.length > 0"
        :viewNote="list"
        @delNote="delText"
      />

      <create-note @createText="addText" />
    </section>
  </wrapper>
</template>

<script>
import viewNotes from "./components/view-notes.vue";
import createNote from "./components/create-note.vue";

export default {
  components: {
    viewNotes,
    createNote,
  },

  data() {
    return {
      list: [],
    };
  },

  methods: {
    addText(enterText) {
      this.list.push(enterText);
    },
    delText(index) {
      console.log(index);
      this.list.splice(index, 1);
    },
  },
};
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  background-color: rgb(255, 255, 255);
}
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 900px;
  min-width: 300px;
  background-color: rgb(0, 0, 0);
}

/* START HEAD */
.header {
  min-height: 50px;
  min-width: 300px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 35px rgb(255, 0, 225, 0.5);
}
.head-title {
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 15px rgb(255, 0, 255);
  padding-top: 10px;
}
/* END HEAD */
</style>
