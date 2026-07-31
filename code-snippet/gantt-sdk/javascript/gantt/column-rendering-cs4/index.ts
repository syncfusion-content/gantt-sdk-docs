import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        {
            field: 'TaskID',
            headerText: 'Task ID',
            width: 100
        },
        {
            field: 'TaskName',
            headerText: 'Task Name',
            width: 290
        },
        {
            field: 'Name',
            headerText: 'Full Name',
            width: 250,
            textAlign: 'Right',
            valueAccessor: (field: string, data: any): string => {
                return data.Name.map((person: any) =>
                    person.lastName || person.firstName
                ).join(' ');
            }
        },
        {
            field: 'Duration',
            headerText: 'Duration',
            width: 90
        },
        {
            field: 'Progress',
            headerText: 'Progress',
            width: 120
        }
    ]
});

gantt.appendTo('#Gantt');