import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
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
    splitterSettings: {
        columnIndex: 7
    },
    columns: [
        { field: 'TaskID' },
        {
            field: 'TaskName',
            template: (props: any): string => {
                let baseUrl: string = 'https://www.meaningofthename.com/';
                let url: string = baseUrl + encodeURIComponent(props.TaskName);
                return `<a href="${url}" target="_blank">${props.TaskName}</a>`;
            }
        },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');