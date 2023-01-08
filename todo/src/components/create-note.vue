<template>
  <div class="footer">
    <input
      class="inp-text"
      type="text"
      placeholder="введите текст..."
      v-model="enterText"
      @keypress.enter="addText"
    />
    <button class="btn-text" @click="addText">добавить</button>
  </div>
</template>

<script>
export default {
  name: "create-note",
  data() {
    return {
      enterText: "",
    };
  },
  methods: {
    addText() {
      if (this.enterText) {
        this.$emit("createText", this.enterText);
      }
      this.enterText = "";
    },
  },
};
</script>

<style>
/* START FOOT */
.footer {
  min-height: 50px;
  min-width: 300px;
}
.inp-text {
  display: block;
  width: 200px;
  margin: 5px auto;
}
.btn-text {
  display: block;
  margin: 15px auto;
  height: 30px;
  width: 100px;
  transition: 0.3s;
  color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255);
}
.btn-text:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  border: 2px solid rgb(255, 0, 225);
}
/* END FOOT */
</style>
