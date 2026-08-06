<template>
     <div>
     <p><b>First Gantt:</b></p>
        <ejs-gantt ref='gantt1' id="GanttContainer1" :dataSource="fData" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :height="height1" :treeColumnIndex="1" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"></ejs-gantt>
    <p><b>Second Gantt:</b></p>
        <ejs-gantt ref='gantt2' id="GanttContainer2" :dataSource="sData" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick"  :allowPdfExport='true' :height="height2" :treeColumnIndex="1"></ejs-gantt>  
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, PdfExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {editingData  } from './data-source.js';

const gantt1 = ref(null);
const gantt2 = ref(null);
const fData = [editingData[0]];
const sData = [editingData[1]];
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
const toolbar = ['PdfExport'];
const projectStartDate = new Date('03/31/2019');
const projectEndDate = new Date('04/14/2019');
const toolbarClick = (args) => {
        if (args.item.id === 'GanttContainer1_pdfexport') {
            var firstGantt = gantt1.value.ej2Instances;
            var firstGanttExport =  firstGantt.pdfExport({},true);
            firstGanttExport.then((fData) => {
                var secondGantt = gantt2.value.ej2Instances;
                secondGantt.pdfExport({},false,fData);
            });
        }
    };
provide('gantt',  [Toolbar, PdfExport]);
</script>