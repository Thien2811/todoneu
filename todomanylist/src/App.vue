<template>
  <h1 style="text-align: center">ToDo-Liste</h1>
  <br />
  <div style="width: 100%;">
    <div class="container row" style="margin: auto">
      <div class="add-list col-4">
        <div class="addListWindow">
          Listenname:
          <input
            v-model="listname"
            class="inputfield"
            type="text"
            placeholder="Listenname"
          />
        </div>
        <div>
          <button class="btn" @click="addNewList">Liste hinzufügen</button>
        </div>
      </div>
      <div class="add-task col-8">
        <div class="addTask  flex-nowrap container" style="padding: 0px">
        <input
          type="text"
          class="form-control"
          placeholder="Task"
          aria-describedby="button-addon2"
          v-model="taskname"
        />
      </div>
      <div class="addTask  flex-nowrap container" style="padding: 0px">
        <textarea
          type="text"
          class="form-control"
          placeholder="Aufgabenbeschreibung"
          aria-describedby="button-addon2"
          v-model="aufgabenbeschreibung"
        ></textarea>
      </div>
      <div class="flex-nowrap"> 
        <select class="select me-2 " v-model="priority" style="border: 0px solid white;">
          <option disabled hidden>Priorität</option>
          <option >Hoch</option>
          <option>Mittel</option>
          <option >Niedrig</option>
        </select>
        <select class="select" v-model="person" style="border: 0px solid white;">
          <option disabled hidden>Zugehörige Person</option>
          <option >Thien</option>
          <option >Dani</option>
          <option >Andi</option>
        </select>
        <div>
          <select class="whichList">
            <option v-for="(liste, index) of allLists" :key="index">
              {{ liste.listname }}
            </option>
          </select>
        </div>
      </div>
      <div>
        <button class="btn" @click="addNewTask">Task hinzufügen</button>
      </div>
    </div>
  </div>
  <div>
    <ListComponents
      v-for="(liste, index) of allLists"
      :key="index"
      :listname="liste.listname"
      :tasks="liste.tasks"
    ></ListComponents>
  </div>
  </div>
</template>

<script setup>
import ListComponents from "./components/ListComponents.vue";
import { ref } from "vue";

const listname = ref("");
const taskname = ref()
const priority = ref('Priorität')
const aufgabenbeschreibung = ref('')
const person = ref('Zugehörige Person')

const liste = ref([])
const allLists = ref([]);

function addNewList() {
  allLists.value.push({
    listname: listname.value,
    tasks: liste.value
  });

  console.log(allLists.value)
}

function addNewTask(){
    liste.value.push({
    taskname: taskname.value,
    priority: priority.value,
    aufgabenbeschreibung: aufgabenbeschreibung.value,
    person: person.value,
    // date: date.value.toLocaleString('de').split(', ')[0],
    // time: date.value.toLocaleString('de').split(', ')[1],
    
  })
  liste.value = liste.value.sort((a, b) => getPriorityInt(b.priority) - getPriorityInt(a.priority))
    
}

function getPriorityInt(priority) {
  switch (priority) {
    case 'Hoch':
      return 3
    case 'Mittel':
      return 2
    case 'Niedrig':
      return 1
  }
}
</script>

<style scoped>
.btn {
  background-color: white;
}

.container {
  border: 3px solid white;
  padding: 10px;
  background-color: black;
}

div {
  color: white;
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
</style>
