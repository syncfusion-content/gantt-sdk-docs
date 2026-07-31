<template>
     <div>
        <ejs-button id="changebypostion" cssClass="e-info" v-on:click.native="changep">Change By Postion</ejs-button>
        <br><br><br>
        <ejs-button id="changebyindex" cssClass="e-info" v-on:click.native="changei">Change By Index</ejs-button>
        <br><br><br>
        <table>
            <tr>
                <td style="width: 70%">
                    <ejs-dropdownlist id="splitter-type" value='Default' :dataSource="dataSource" :fields = "fields" :change ="change"> Splitter View </ejs-dropdownlist>
                </td>
            </tr>
        </table>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { editingData  } from './data-source.js';
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-dropdownlist":DropDownListComponent,
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: editingData,
            height: '450px',
                taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
            dataSource: [
            { id: 'Default', mode: 'Default' },
            { id: 'Grid', mode: 'Grid' },
            { id: 'Chart', mode: 'Chart' },
          ],
        fields: { text: 'mode', value: 'id' },
        };
    },
    methods: {
        changep: function(e){
            var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
            ganttChart.setSplitterPosition('50%', 'position');
        },

        changei: function(e){
            var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
            ganttChart.setSplitterPosition(1, 'columnIndex');
        },

        change: function (e) {
            var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
            var viewType = e.value;
            ganttChart.setSplitterPosition(viewType, 'view');
        }

    },
};
</script>