<template>
     <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :splitterSettings = "splitterSettings" :filterSettings="filterSettings" :allowFiltering= true>
        <e-columns>
          <e-column field='TaskID' headerText='Task ID' textAlign='Left' width='100'></e-column>
          <e-column field='TaskName' :filter= 'filter' headerText='Task Name' width='150'></e-column>
          <e-column field='StartDate' headerText='Start Date' width='150'></e-column>
          <e-column field='Duration' headerText='Duration' width='150'></e-column>
          <e-column field='Progress' headerText='Progress' width='150'></e-column>
        </e-columns>
    </ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, ColumnsDirective, ColumnDirective, Filter, } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';

import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { DataManager } from "@syncfusion/ej2-data";
import {createElement} from "@syncfusion/ej2-base";

export default {
name: "App",
components: {
"ejs-gantt":GanttComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: function() {
      return{
            data: [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,Progress: 50, resources: [1]},
            {TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',Progress: 50, resources: [2, 3, 5]},
            {TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '4', Progress: 50, resources: [4]},
            {TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '6', resources: [4, 8],Progress: 50},
            {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 0, Predecessor: '7', resources: [12, 5]}
        ]
    }],
            height: '450px',
            columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },

    filter: {
        ui: {
            create: function (args) {
                let db = new DataManager(data);
                let flValInput = createElement('input', { className: 'flm-input' });
                args.target.appendChild(flValInput);
                dropInstance = new DropDownList({
                dataSource: new DataManager(data),
                fields: { text: 'TaskName', value: 'TaskName' },
                placeholder: 'Select a value',
                popupHeight: '200px'
            });
            dropInstance.appendTo(flValInput);
            },
            write: function (args) {
                dropInstance.value = args.filteredValue;
            },
            read: function (args) {
                args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
            }
        }
    },
        splitterSettings:{
            columnIndex:3
            },
        filterSettings: {
            type:'Menu'
        },
        };
  },
  provide: {
      gantt: [ Filter]
  }
};
</script>