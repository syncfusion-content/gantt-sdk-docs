
import Vue from "vue";
import { GanttPlugin, Edit, Toolbar } from "@syncfusion/ej2-vue-gantt";
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data"  :resources= "resourceCollection" :resourceFields= "resourceFields":taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"  :editDialogFields="editDialogFields" :addDialogFields= "addDialogFields"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: [
                {
                    TaskID: 1,
                    TaskName: 'Project initiation',
                    StartDate: new Date('03/29/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {
                            TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3,
                            Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }]
                        },
                        {
                            TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
                            resources: [{ resourceId: 2, resourceUnit: 70 }], Progress: 30, work: 20
                        },
                        {
                            TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 4,
                            resources: [{ resourceId: 1, resourceUnit: 75 }], Predecessor: 2, Progress: 30, work: 10,
                        },
                    ]
                },
                {
                    TaskID: 5,
                    TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {
                            TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
                            Duration: 3, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 70 }], Predecessor: '3FS+2', work: 30
                        },
                        {
                            TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Duration: 12,
                            resources: [{ resourceId: 6, resourceUnit: 40 }], Progress: 30, work: 40
                        },
                        {
                            TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/03/2019'),
                            Duration: 10, resources: [{ resourceId: 5, resourceUnit: 75 }], Progress: 30, work: 60,
                        },
                        {
                            TaskID: 9, TaskName: 'Excavate for foundations', StartDate: new Date('04/01/2019'),
                            Duration: 4, Progress: 30, resources: [4]
                        },
                        {
                            TaskID: 10, TaskName: 'Install plumbing grounds', StartDate: new Date('04/08/2019'), Duration: 4,
                            Progress: 30, Predecessor: '9SS', resources: [3]
                        },
                        {
                            TaskID: 11, TaskName: 'Dig footer', StartDate: new Date('04/08/2019'),
                            Duration: 3, resources: [2]
                        },
                        {
                            TaskID: 12, TaskName: 'Electrical utilities', StartDate: new Date('04/03/2019'),
                            Duration: 4, Progress: 30, resources: [3]
                        }
                    ]
                },
                {
                    TaskID: 13, TaskName: 'Sign contract', StartDate: new Date('04/04/2019'), Duration: 2,
                    Progress: 30,
                }, {
                    TaskID: 3, TaskName: 'Plan timeline', StartDate: new Date('02/04/2019'), EndDate: new Date('02/10/2019'),
                    Duration: 10, Progress: '60',
                    Segments: [
                        { StartDate: new Date('02/04/2019'), Duration: 2, segmenttask: "segment 1" },
                        { StartDate: new Date('02/05/2019'), Duration: 5, segmenttask: "segment 2" },
                        { StartDate: new Date('02/08/2019'), Duration: 3, segmenttask: "segment 3" }
                    ]
                },
        ],
        addDialogFields: [
            { type: 'General', headerText: 'General add',fields:["newinput"]},
            { type: 'Dependency', params: {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}},
            { type: 'Resources'} , 
            { type: 'Notes' },
            {type:"Segments", params:{columns:[{field:"segmenttask",width:"170px" ,headerText:"Segment Task"}],}}
        ],
        editDialogFields: [
            { type: 'General', headerText: 'General edit', fields: ["TaskID", "TaskName", "newinput"] },
            {type: 'Dependency', params: {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}},
            { type: 'Resources', params: { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newdata" }]}},
            {type: 'Notes', params: {inlineMode: { enable: true,onSelection: true }}},
            {type: "Segments", params: {columns: [{ field: "segmenttask", width: "170px", headerText: "Segment Task" }],}}
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
        resourceCollection: [
            { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', newdata: "nothing Martin Tamer" },
            { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', newdata: "nothing Rose Fuller" },
            { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team', newdata: "nothing Margaret Buchanan" },
            { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team', newdata: "nothing Fuller King" },
            { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team', newdata: "nothing Davolio Fuller" },
            { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team', newdata: "nothing Van Jack" }
        ],
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


});