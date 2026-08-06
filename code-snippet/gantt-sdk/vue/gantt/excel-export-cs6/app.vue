<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :columns="columns"
        :toolbar="toolbar" :toolbarClick="toolbarClick" :excelExportComplete="excelExportComplete" :allowExcelExport='true'
        :height="height" :treeColumnIndex="1"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar, ExcelExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ganttData } from './data-source.js';

export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
        data: ganttData,
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
            { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
            { field: 'Duration',headerText: 'Duration', width: '150'},
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
        toolbar: ['ExcelExport', 'CsvExport'],
        toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_excelexport') {
                    var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttObj.treeGrid.grid.columns[0].visible = true;
                    ganttObj.treeGrid.grid.columns[3].visible = false;
                    ganttObj.excelExport();
                } else if(args.item.id === 'GanttContainer_csvexport') {
                    var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttObj.treeGrid.grid.columns[0].visible = true;
                    ganttObj.treeGrid.grid.columns[3].visible = false;
                    ganttObj.csvExport();
                }
            },
        excelExportComplete: () => {
            var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
            ganttObj.treeGrid.grid.columns[0].visible = false;
            ganttObj.treeGrid.grid.columns[3].visible = true;
        },
      };
  },
  provide: {
      gantt: [Toolbar, ExcelExport]
  }
};
</script>