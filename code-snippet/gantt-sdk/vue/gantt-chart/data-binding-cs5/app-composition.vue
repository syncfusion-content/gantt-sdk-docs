<template>
  <div>
    <ejs-button id="databind" cssClass="e-info" @click="databind">
      Bind Data
    </ejs-button>
    <br /><br />
    <ejs-gantt
      ref="ganttRef"
      :dataSource="data"
      id="GanttContainer"
      :taskFields="taskFields"
      :height="height"
      :projectStartDate="projectStartDate"
      :projectEndDate="projectEndDate"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { Ajax } from "@syncfusion/ej2-base";

const data = ref([]);

const height = "450px";
const taskFields = {
  id: "TaskId",
  name: "TaskName",
  startDate: "StartDate",
  progress: "Progress",
  duration: "Duration",
  dependency: "Predecessor",
  child: "SubTasks",
};

const projectStartDate = new Date("02/24/2019");
const projectEndDate = new Date("07/20/2019");

const ganttRef = ref(null);

const databind = () => {
  const ganttObj = ganttRef.value.ej2Instances;

  const ajax = new Ajax(
    "https://ej2services.syncfusion.com/production/web-services/api/GanttData",
    "GET",
  );

  ganttObj.showSpinner();
  ajax.send();

  ajax.onSuccess = (result) => {
    ganttObj.hideSpinner();
    data.value = JSON.parse(result).Items; // Reactive update
  };
};
</script>