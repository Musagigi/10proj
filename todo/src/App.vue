<template>
  <wrapper class="wrapper">
    <section class="section">
      <header class="header">
        <h1 class="head__title">Список дел</h1>
      </header>

      <main class="main" v-if="list.length >= 1 ? brdColor : ''">
        <ul class="main__list">
          <li v-for="(item, index) in list" :key="item.id" class="list__item">
            {{ item }} {{ index }}
          </li>
        </ul>
      </main>

      <footer class="footer">
        <input
          v-model="enterText"
          @keypress.enter="addText"
          class="inp__text"
          type="text"
          placeholder="введите текст..."
        />
        <button @click="addText" class="btn__text">добавить</button>
      </footer>
    </section>
  </wrapper>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      enterText: "",
      brdColor: {
        border: "2px dashed rgb(255, 255, 255)",
      },
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

/* START MAIN */
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
/* END MAIN */

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
