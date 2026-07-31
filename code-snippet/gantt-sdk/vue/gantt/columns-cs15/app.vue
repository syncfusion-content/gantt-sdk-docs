<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :splitterSettings="splitterSettings">
      <e-columns>
        <e-column field='TaskName' :headerTemplate='projectName' width=150></e-column>
        <e-column field='StartDate' :headerTemplate='dateTemplate' width=150></e-column>
        <e-column field='Duration' :headerTemplate='durationTemplate' width=150></e-column>
        <e-column field='Progress' :headerTemplate='progressTemplate' width=150></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
</template>
<script>

import { GanttComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
import { createApp } from "vue";
const app = createApp();
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: function() {
      return{
         data: editingData,
         projectName: function () {
          return { template : app.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Task Name
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        return "Taskname.png";
                    }
                }
          })}
      },
     dateTemplate: function () {
          return { template : app.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Start Date
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        return "Startdate.png";
                    }
                }
          })}
      },
      durationTemplate: function () {
          return { template : app.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Duration
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        return "Duration.png";
                    }
                }
          })}
      },
      progressTemplate: function () {
          return { template : app.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Progress
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        return "progress.png" ;
                    }
                }
          })}
      },
      taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        },
        height:'450px',
        splitterSettings:{
            columnIndex:4
            },
            columns: [
            { field: 'TaskName', headerTemplate:  '#projectName', width: '150' },
            { field: 'StartDate', headerTemplate: '#dateTemplate', width: '150' },
            { field: 'Duration',headerTemplate: '#durationTemplate', headerText: 'Duration', width: '150'},
            { field: 'Progress',headerTemplate: '#progressTemplate',  headerText: 'Progress', width: '150' },
        ],
      };
  },
};
</script>