<template>
     <div>
        <ejs-gantt ref='gantt' id="customContextMenu" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings="editSettings" :enableContextMenu="true" :contextMenuItems="contextMenuItems" :contextMenuClick = "contextMenuClick" :contextMenuOpen= "contextMenuOpen" :addChildRecords= "addChildRecords"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, ContextMenu, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
var copiedRecord;
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
        contextMenuItems: [{ text: 'Copy', target: '.e-content', id: 'copy' },
        { text: 'Paste', target: '.e-content', id: 'paste' }
        ],
    };
  },
  provide: {
      gantt: [ ContextMenu, Edit, Selection]
  },
  methods: {
        contextMenuClick: function (args) {
        var gantt = document.getElementById('customContextMenu').ej2_instances[0];
        if (args.item.id === 'copy') {
            copiedRecord = args.rowData;
            copiedRecord.taskData.TaskID = gantt.currentViewData.length + 1;
        }
        if (args.item.id === 'paste') {
            gantt.addRecord(copiedRecord.taskData,'Below',args.rowData.index);
            if(copiedRecord.hasChildRecords) {
                addChildRecords(copiedRecord, args.rowData.index + 1);
            }
            copiedRecord = undefined;
        }
        },
        contextMenuOpen: function (args) {
        if (args.type !== 'Header') {
            if (copiedRecord) {
                args.hideItems.push('Copy');
            } else {
                args.hideItems.push('Paste');
             }
        }
        },
        addChildRecords(record, index) {
          for(var i=0; i<record.childRecords.length; i++) {
          var childRecord = record.childRecords[i];
          childRecord.taskData.TaskID = gantt.currentViewData.length + 1;
          gantt.addRecord(childRecord.taskData,'Child',index);
          if(childRecord.hasChildRecords) {
              addChildRecords(childRecord, index + (i+1));
          }
    }
  }
    }
};
</script>