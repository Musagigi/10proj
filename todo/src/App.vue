<template>
  <wrapper class="wrapper">
    <section class="section">
      <header class="header">
        <h1 class="head__title">Список дел</h1>
      </header>

      <main-list :addNote="list" />

      <footer class="footer">
        <input
          class="inp__text"
          type="text"
          placeholder="введите текст..."
          v-model="enterText"
          @keypress.enter="addText"
        />
        <button class="btn__text" @click="addText">добавить</button>
      </footer>
    </section>
  </wrapper>
</template>

<script>
import mainList from "./components/main-list.vue";

export default {
  components: {
    mainList,
  },

  data() {
    return {
      list: [],
      enterText: "",
    };
  },

  methods: {
    addText() {
      if (this.enterText) this.list.push(this.enterText);
      this.enterText = "";
    },
  },
};
</script>

<style scoped>
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
.head__title {
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 15px rgb(255, 0, 255);
  padding-top: 10px;
}
/* END HEAD */

/* START FOOT */
.footer {
  min-height: 50px;
  min-width: 300px;
}
.inp__text {
  display: block;
  width: 200px;
  margin: 5px auto;
}
.btn__text {
  display: block;
  margin: 15px auto;
  height: 30px;
  width: 100px;
  transition: 0.3s;
  color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255);
}
.btn__text:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  border: 2px solid rgb(255, 0, 225);
}
/* END FOOT */
</style>
