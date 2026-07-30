import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from './datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: projectNewData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'parentID'
    },
    rowDragStartHelper: function(args) {
        let record = args.data[0] ? args.data[0] : args.data;
        let taskId = record.ganttProperties.taskId;
        if (taskId <= 4) {
            args.cancel = true;
        }
    },
    allowRowDragAndDrop: true
});
gantt.appendTo('#Gantt');