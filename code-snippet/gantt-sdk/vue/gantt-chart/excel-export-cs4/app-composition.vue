<template>
     <div>
     <p><b>First Gantt:</b></p>
        <ejs-gantt ref='gantt1' id="GanttContainer1" :dataSource="fData" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowExcelExport='true' :height="height1" :treeColumnIndex="1" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"></ejs-gantt>
    <p><b>Second Gantt:</b></p>
        <ejs-gantt ref='gantt2' id="GanttContainer2" :dataSource="sData" :taskFields="taskFields" :allowExcelExport='true' :height="height2" :treeColumnIndex="1"></ejs-gantt>  
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, ExcelExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ganttData  } from './data-source.js';
const gantt1 = ref(null);
const gantt2 = ref(null);
const fData = [ganttData[0]];
const sData = [ganttData[1]];
const height1 = '280px';
const height2 = '250px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const toolbar = ['ExcelExport'];
const projectStartDate = new Date('03/31/2019');
const projectEndDate = new Date('04/14/2019');
const toolbarClick = (args) => {
        if (args.item.id === 'GanttContainer1_excelexport') {
            var appendExcelExportProperties = {
                multipleExport: {type: 'AppendToSheet',blankRows: 2}
            };
            var FirstGantt = gantt1.value.ej2Instances;
            var FirstGanttExport =  FirstGantt.excelExport(appendExcelExportProperties,true);
            FirstGanttExport.then((fData) => {
                var SecondGantt = gantt2.value.ej2Instances;
                SecondGantt.excelExport(appendExcelExportProperties,false,fData);
            });
        }
    };
provide('gantt',  [Toolbar, ExcelExport]);
</script>