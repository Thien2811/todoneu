<template>
  <h1 style="text-align: center">ToDo-Liste</h1>
  <br />
  <div style="width: 100%">
    <div class="containerr" style="margin: auto; width: 70vw">
      <div class="add-list">
        <div
          class="addListWindow"
          style="display: flex; justify-content: center"
        >
          <input
            v-model="listname"
            class="inputfield"
            type="text"
            placeholder="Listenname"
          />
        </div>
        <div style="display: flex; justify-content: center">
          <button class="btn" @click="addNewList" style="margin-top: 10px">
            Liste hinzufügen
          </button>
        </div>
      </div>
    </div>
    <div style="margin-left: auto; margin-right: auto; width: 70vw">
      <ListComponents
        v-for="(liste, index) of allLists"
        :key="index"
        :listname="liste.listname"
        :tasks="liste.tasks"
        style="display: inline-table"
      ></ListComponents>
    </div>
  </div>
</template>

<script setup>
import ListComponents from "./components/ListComponents.vue";
import { ref } from "vue";

const listname = ref("");

const liste = ref([]);
const allLists = ref([]);

function addNewList() {
  allLists.value.push({
    listname: listname.value,
    tasks: liste.value,
  });

  console.log(allLists.value);
}
</script>

<style scoped>
.btn {
  background-color: white;
}

.containerr {
  border: 3px solid white;
  padding: 10px;
  background-color: black;
}

div {
  color: white;
  margin-top: 10px;
}

.addListWindow {
  font-size: 150%;
}

.inputfield {
  border-radius: 7px;
}

.whichList {
  min-width: 150px;
}

::placeholder {
  text-align: center;
}
</style>
