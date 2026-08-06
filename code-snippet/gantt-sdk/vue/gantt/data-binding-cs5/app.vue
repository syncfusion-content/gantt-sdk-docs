<template>
  <div>
    <ejs-button id="databind" cssClass="e-info" v-on:click.native="databind"
      >Bind Data</ejs-button
    >
    <br />
    <br />
    <ejs-gantt
      ref="gantt"
      :dataSource="data"
      id="GanttContainer"
      :taskFields="taskFields"
      :height="height"
      :projectStartDate="projectStartDate"
      :projectEndDate="projectEndDate"
    ></ejs-gantt>
  </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { Ajax } from "@syncfusion/ej2-base";
export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-gantt": GanttComponent,
  },
  data: function () {
    return {
      height: "450px",
      taskFields: {
        id: "TaskId",
        name: "TaskName",
        startDate: "StartDate",
        progress: "Progress",
        duration: "Duration",
        dependency: "Predecessor",
        child: "SubTasks",
      },
      projectStartDate: new Date("02/24/2019"),
      projectEndDate: new Date("07/20/2019"),
    };
  },
  methods: {
    databind: function (e) {
      let ajax = new Ajax(
        "https://services.syncfusion.com/vue/production/api/GanttData",
        "GET",
      );
      var ganttObj = document.getElementById("GanttContainer").ej2_instances[0];
      ganttObj.showSpinner();
      ajax.send();
      ajax.onSuccess = function (data) {
        ganttObj.hideSpinner();
        ganttObj.dataSource = JSON.parse(data).Items;
      };
    },
  },
};
</script>