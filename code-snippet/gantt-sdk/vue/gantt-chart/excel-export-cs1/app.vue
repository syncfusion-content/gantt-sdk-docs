<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowExcelExport='true' :height="height" :treeColumnIndex="1"></ejs-gantt>
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
        toolbar: ['ExcelExport', 'CsvExport'],
        toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_excelexport') {
                    var excelExportProperties = {
                        dataSource: ganttData[1]
                    };
                    var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttObj.excelExport(excelExportProperties);
                }
            },
      };
  },
  provide: {
      gantt: [Toolbar, ExcelExport]
  }
};
</script>