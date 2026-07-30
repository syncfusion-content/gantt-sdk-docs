import { Gantt } from '@syncfusion/ej2-gantt';
import { getValue } from '@syncfusion/ej2-base';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
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
        { field: 'TaskID' },
        {
            field: 'TaskName',
            headerText: 'Task Name',
            width: 180,
            valueAccessor: (field: string, data: Object) => {
                return (data as any)[field] + '-' + getValue('TaskID', data);
            }
        },
        {
            field: 'StartDate',
            headerText: 'Start Date',
            width: 180
        },
        {
            field: 'Duration',
            headerText: 'Duration',
            width: 100
        },
        {
            field: 'Progress',
            headerText: 'Progress',
            width: 120,
            valueAccessor: (field: string, data: Object) => {
                return (data as any)[field] + '%';
            }
        }
    ]
});

gantt.appendTo('#Gantt');