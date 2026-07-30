<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :editDialogFields="editDialogFields" :addDialogFields= "addDialogFields" :dataSource="data"  :resources= "resourceCollection" :resourceFields= "resourceFields" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings" ></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Edit, Toolbar } from "@syncfusion/ej2-vue-gantt";
import {projectNewData,editingResources} from "./data-source"
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
        data: projectNewData,
            addDialogFields: [
                { type: 'General'},
                { type: 'Dependency'},
                { type: 'Resources'} , 
                {type: 'Notes', additionalParams: {inlineMode: { enable: true,onSelection: true }}},
                {type:"Segments"}
            ],
            editDialogFields: [
                { type: 'General' },
                {type: 'Dependency'},
                { type: 'Resources'},
                {type: 'Notes', additionalParams: {inlineMode: { enable: true,onSelection: true }}},
                {type: "Segments"}
            ],
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                resourceInfo: 'resources',
                work: 'work',
                child: 'subtasks',
                segments: 'Segments',
                notes:"note",
        },
        resourceCollection:editingResources,
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'resourceUnit',
            group: 'resourceGroup'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },

            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],

      };
  },
  provide: {
      gantt: [ Edit, Toolbar ]
  },

};
</script>