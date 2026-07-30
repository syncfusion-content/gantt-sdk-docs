<template>
    <div id="app">
       <button id="add"  @click="clickAdd">Add Columns</button>
       <button id="remove"  @click="clickRemove">Remove Columns</button>
      <br /><br />
        <ejs-gantt ref="gantt" :dataSource='data' :enablePersistence='true' height='230px' id="Gantt" :taskFields = "taskFields" :dataBound='dataBound'>
           <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120></e-column>
                <e-column field='TaskName' headerText='Task Name' width=150></e-column>
                <e-column field='StartDate' headerText='Start Date' width=150 ></e-column>
                <e-column field='Duration' headerText='Duration' width=150 ></e-column>
            </e-columns>
        </ejs-gantt>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { GanttComponent as EjsGantt, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';
const gantt = ref(null);
      const data = projectNewData;
      const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
    const dataBound = function () {
        let cloned =  gantt.value.ej2Instances.addOnPersist;
        gantt.value.ej2Instances.addOnPersist = function (key) {
            key = key.filter((item)  => item !== "columns");
            return cloned.call(this, key);
        };
    }
     const clickAdd = function () {
        let obj = { field: "Progress", headerText: 'Progress', width: 100 };
        gantt.value.ej2Instances.columns.push(obj); //you can add the columns by using the Gantt columns method
        gantt.value.ej2Instances.treeGrid.refreshColumns();
    }
     const clickRemove = function () {
        gantt.value.ej2Instances.columns.pop();
        gantt.value.ej2Instances.treeGrid.refreshColumns();
    }
</script>
<style>
</style>