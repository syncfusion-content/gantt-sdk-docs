


import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    collapsing: function (args: any) {
        if (args.data.TaskID == 1)
            args.cancel = true;
    },
    expanding: function (args: any) {
        if (args.data.TaskID == 5)
            args.cancel = true;
    }
});
gantt.appendTo('#Gantt');