


import { Gantt, Edit, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData, ProjectResources } from './datasource.ts';

Gantt.Inject(Edit, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        resourceInfo: 'resources',
        duration: 'Duration',
        progress: 'Progress',
        notes: 'info',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Cancel'],
    editDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ],
    addDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' }
    ],
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
    },
    resources: ProjectResources,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        mode: 'Dialog',
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');