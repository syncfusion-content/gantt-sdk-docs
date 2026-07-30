import { Gantt, RowDD, Edit, Selection, RowDragEventArgs } from '@syncfusion/ej2-gantt';
import { ganttData } from './datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: ganttData,
    height:'380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowRowDragAndDrop: true,
    treeColumnIndex:1,
    splitterSettings: {
      position: '75%'
    },
    rowDrop : (args: RowDragEventArgs) => {
        if (args.dropPosition === 'middleSegment') {
            args.cancel = true;
            gantt.reorderRows([args.fromIndex], args.dropIndex, 'above');
        }
    }
});
gantt.appendTo('#Gantt');