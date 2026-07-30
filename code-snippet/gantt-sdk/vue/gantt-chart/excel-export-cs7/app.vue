<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :excelQueryCellInfo="excelQueryCellInfo" :queryCellInfo="queryCellInfo" :queryTaskbarInfo = "queryTaskbarInfo" :allowExcelExport='true' :height="height" :treeColumnIndex="1" :columns = "columns" :labelSettings="labelSettings" :splitterSettings= "splitterSettings"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar, ExcelExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ganttData  } from './data-source.js';

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
        toolbar: ['ExcelExport'],
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100',visible:false  },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' }
        ],
        labelSettings: {
            taskLabel: '${Progress}%'
        },
        splitterSettings: {
            columnIndex: 3
        },
        toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_excelexport') {
                    var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttObj.excelExport();
                }
            },
        excelQueryCellInfo: (args) => {
            if(args.column.field == 'Progress'){
                if(args.value > 80) {
                    args.style = { backColor: '#A569BD' };
                }
                else if(args.value < 20) {
                    args.style = { backColor: '#F08080' };
                }
            }
        },
        queryTaskbarInfo: function(args) {
            if (args.data.Progress > 80) {
                args.progressBarBgColor = "#6C3483";
                args.taskbarBgColor = args.taskbarBorderColor = "#A569BD";
            } else if (args.data.Progress < 20) {
                args.progressBarBgColor = "#CD5C5C";
                args.taskbarBgColor = args.taskbarBorderColor = "#F08080";
            }
        },
        queryCellInfo: (args) => {
            if(args.column.field == 'Progress'){
                if(args.data.Progress > 80) {
                    args.cell.style.backgroundColor  = '#A569BD';
                }
                else if(args.data.Progress < 20) {
                    args.cell.style.backgroundColor  = '#F08080';
                }
            }  
        },
      };
  },
  provide: {
      gantt: [Toolbar, ExcelExport]
  }
};
</script>