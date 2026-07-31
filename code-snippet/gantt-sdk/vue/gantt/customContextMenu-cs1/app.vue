<template>
     <div>
        <ejs-gantt ref='gantt' id="customContextMenu" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings="editSettings" :enableContextMenu="true" :allowSorting="true" :allowResizing= "true" :contextMenuItems="contextMenuItems" :contextMenuClick = "contextMenuClick" :contextMenuOpen="contextMenuOpen"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, ContextMenu, Edit, Sort, Resize, Selection } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
export default {
name: "App",
components: {
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
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
        },
        contextMenuItems: ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel', 'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
        ],
    };
  },
  provide: {
      gantt: [ ContextMenu, Edit, Sort, Resize, Selection]
  },
  methods: {
        contextMenuClick: function (args) {
        var record = args.rowData;
        var ganttObj = document.getElementById('customContextMenu').ej2_instances[0];
        if (args.item.id === 'collapserow') {
            ganttObj.collapseByID(Number(record.ganttProperties.taskId));
            }
        if (args.item.id === 'expandrow') {
            ganttObj.expandByID(Number(record.ganttProperties.taskId));
            }
        if (args.item.id === 'hidecols') {
            ganttObj.hideColumn(args.column.headerText);
        }
        },
        contextMenuOpen: function (args) {
        var record = args.rowData;
            if (args.type !== 'Header') {
                if (!record.hasChildRecords) {
                    args.hideItems.push('Collapse the Row');
                    args.hideItems.push('Expand the Row');
                } else {
                    if(record.expanded){
                    args.hideItems.push("Expand the Row");
                    } else {
                    args.hideItems.push("Collapse the Row");
                    }
                }
            }
        }
    }
};
</script>