


import { Gantt, Selection, RowSelectEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

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
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    dataBound: () => {
        var rowIndexes = [];
        gantt.treeGrid.grid.dataSource.forEach((data,index) => {
            if (data.TaskID === 3 || data.TaskID === 4) {
               rowIndexes.push(index);
            }
            });
        gantt.selectRows(rowIndexes);
    },
});
gantt.appendTo('#Gantt');