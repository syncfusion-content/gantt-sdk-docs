import { Gantt } from '@syncfusion/ej2-gantt';
import { data, ProjectResources } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    rowHeight: 60,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        resourceInfo: 'resources'
    },
    resourceFields: {
        id: 'resourceID',
        name: 'resourceName'
    },
    resources: ProjectResources,
    splitterSettings: {
        columnIndex: 7
    },
    columns: [
        { field: 'TaskID' },
        {
            field: 'resources',
            headerText: 'Resources',
            width: 250,
            textAlign: 'Center',
            template: (props: any): string => {
                return `<div class="image">
                            <img src="${props.TaskID}.png" style="height:42px" />
                        </div>`;
            }
        },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');