<template>
  <div class="containerr">
    <div class="listenname">{{ listname }}</div>
    <div class="add-task">
      <div class="addTask flex-nowrap" style="padding: 0px">
        <input
          type="text"
          class="form-control"
          placeholder="Task"
          aria-describedby="button-addon2"
          v-model="taskname"
        />
      </div>
      <div class="addTask flex-nowrap" style="padding: 0px">
        <textarea
          type="text"
          class="textarea form-control"
          placeholder="Aufgabenbeschreibung"
          aria-describedby="button-addon2"
          v-model="aufgabenbeschreibung"
        ></textarea>
      </div>
      <div class="flex-nowrap">
        <select
          class="select me-2"
          v-model="priority"
          style="border: 0px solid white"
        >
          <option disabled hidden>Priorität</option>
          <option>Hoch</option>
          <option>Mittel</option>
          <option>Niedrig</option>
        </select>
        <select class="select" v-model="person" style="border: 0px solid white">
          <option disabled hidden>Zugehörige Person</option>
          <option>Thien</option>
          <option>Dani</option>
          <option>Andi</option>
        </select>
      </div>

      <div>
        <VueDatePicker v-model="date"></VueDatePicker>
      </div>
      <div>
        <button class="btn" @click="addNewTask">Task hinzufügen</button>
      </div>
    </div>
    <TaskComponent
      v-for="(i, index) of liste"
      :key="index"
      :taskname="i.taskname"
      :priority="i.priority"
      :aufgabenbeschreibung="i.aufgabenbeschreibung"
      :person="i.person"
      :date="i.date"
      :time="i.time"
      @editname="liste[index].taskname = $event"
      @editbeschreibung="liste[index].aufgabenbeschreibung = $event"
      @delete="remove($event)"
      @taskUpdate="editTaskAufgabe(event)"
    ></TaskComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TaskComponent from "./TaskComponent.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();

defineProps(["listname"]);

const taskname = ref();
const priority = ref("Priorität");
const aufgabenbeschreibung = ref("");
const person = ref("Zugehörige Person");
const liste = ref([]);

function addNewTask() {
  liste.value.push({
    taskname: taskname.value,
    priority: priority.value,
    aufgabenbeschreibung: aufgabenbeschreibung.value,
    person: person.value,
    date: date.value.toLocaleString("de").split(", ")[0],
    time: date.value.toLocaleString("de").split(", ")[1],
  });
  liste.value = liste.value.sort(
    (a, b) => getPriorityInt(b.priority) - getPriorityInt(a.priority)
  );
}
function getPriorityInt(priority) {
  switch (priority) {
    case "Hoch":
      return 3;
    case "Mittel":
      return 2;
    case "Niedrig":
      return 1;
  }
}

function remove(id) {
  const i = liste.value.findIndex((e) => e.id === id);
  liste.value.splice(i, 1);
}
</script>

<style scoped>
.containerr {
  border: 1px solid white;
  background-color: black;
  width: 33.33%;
  min-height: 900px;
}

.listenname {
  color: white;
  font-size: 200%;
  font-weight: bold;
}

.btn {
  background-color: white;
}

div {
  margin-top: 10px;
}

select {
  border-radius: 7%;
  padding: 10px;
  background-color: white;
}
</style>
