
import Vue from "vue";
import { GanttPlugin, Toolbar, ExcelExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ganttData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
     <p><b>First Gantt:</b></p>
        <ejs-gantt ref='gantt1' id="GanttContainer1" :dataSource="fData" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowExcelExport='true' :height="height1" :treeColumnIndex="1" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"></ejs-gantt>
    <p><b>Second Gantt:</b></p>
        <ejs-gantt ref='gantt2' id="GanttContainer2" :dataSource="sData" :taskFields="taskFields" :allowExcelExport='true' :height="height2" :treeColumnIndex="1"></ejs-gantt>  
    </div>
`,

  data: function() {
      return{
        fData: [ganttData[0]],
        sData: [ganttData[1]],
        height1:'280px',
        height2:'250px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        toolbar: ['ExcelExport'],
        projectStartDate: new Date('03/31/2019'),
        projectEndDate: new Date('04/14/2019'),
        toolbarClick: (args: ClickEventArgs) => {
                if (args.item.id === 'GanttContainer1_excelexport') {
                    var appendExcelExportProperties: ExcelExportProperties = {
                        multipleExport: {type: 'AppendToSheet',blankRows: 2}
                    };
                    var FirstGantt = document.getElementById('GanttContainer1').ej2_instances[0];
                    var FirstGanttExport =  FirstGantt.excelExport(appendExcelExportProperties,true);
                    FirstGanttExport.then((fData) => {
                        var SecondGantt = document.getElementById('GanttContainer2').ej2_instances[0];
                        SecondGantt.excelExport(appendExcelExportProperties,false,fData);
                    });
                }
        },
        };
  },
  provide: {
    gantt: [Toolbar, ExcelExport]
  }

});