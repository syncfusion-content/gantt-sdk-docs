<template>
    <div>
        <ejs-button id="changebypostion" cssClass="e-info" v-on:click.native="changep">Change By Postion</ejs-button>
        <br><br><br>
        <ejs-button id="changebyindex" cssClass="e-info" v-on:click.native="changei">Change By Index</ejs-button>
        <br><br><br>
        <table>
            <tr>
                <td style="width: 70%">
                    <ejs-dropdownlist id="splitter-type" value='Default' :dataSource="dataSource" :fields="fields"
                        :change="change"> Splitter View </ejs-dropdownlist>
                </td>
            </tr>
        </table>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"></ejs-gantt>
    </div>
</template>
<script setup>

import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { editingData } from './data-source.js';
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const dataSource = [
    { id: 'Default', mode: 'Default' },
    { id: 'Grid', mode: 'Grid' },
    { id: 'Chart', mode: 'Chart' },
];
const fields = { text: 'mode', value: 'id' };
const changep = function (e) {
    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
    ganttChart.setSplitterPosition('50%', 'position');
}

const changei = function (e) {
    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
    ganttChart.setSplitterPosition(1, 'columnIndex');
}

const change = function (e) {
    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
    var viewType = e.value;
    ganttChart.setSplitterPosition(viewType, 'view');
}
</script>