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
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        {
            field: 'StartDate',
            headerText: 'Start Date',
            textAlign: 'Left',
            width: 120,
            template: (props: any) => {
                let date: Date = new Date(props.StartDate);
                return date.getFullYear() + '/' +
                    date.toLocaleString('default', { month: 'short' }) + '/' +
                    date.getDate();
            }
        },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Left', width: 150 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Left', width: 120 }
    ]
});

gantt.appendTo('#Gantt');