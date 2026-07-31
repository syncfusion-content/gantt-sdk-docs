<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields"
:columns="columns" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryTimelineCellInfo="pdfQueryTimelineCellInfo" :height="height"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar, PdfExport, Selection, PdfQueryTimelineCellInfoEventArgs } from "@syncfusion/ej2-vue-gantt";
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import {editingData  } from './data-source.js';

export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
        data:editingData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskID', headerText:  'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText:  'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150'},
            { field: 'Duration',headerText: 'Duration', width: '150', visible: false },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
        toolbar: ['PdfExport'],
        toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_pdfexport') {
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                     ganttChart.treeGrid.grid.columns[2].visible = false;
                     ganttChart.pdfExport();
                }
            },
        pdfQueryTimelineCellInfo: (args) => {
          args.timelineCell.backgroundColor = new PdfColor(240, 248, 255);
        }
      }
  },
  provide: {
      gantt: [Toolbar, PdfExport]
  }
};
</script>