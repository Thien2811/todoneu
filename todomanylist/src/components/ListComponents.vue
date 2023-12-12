<template>
<div class="container">
    <div class="listenname">
        {{ listname }}:
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
import {ref} from 'vue'
import TaskComponent from './TaskComponent.vue';
defineProps(["listname"])


const taskname = ref()
const priority = ref('Priorität')
const aufgabenbeschreibung = ref('')
const person = ref('Zugehörige Person')

const liste = ref([])



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
    .container{
        margin:15px;
        border: 1px solid white;
        min-height: 500px;
        width: 535px;
        display: inline-block;
        background-color: black;
    }

    .listenname{
        color: white;
        font-size: 150%;
    }
</style>