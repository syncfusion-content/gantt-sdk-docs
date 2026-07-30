


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
    rowSelected: rowSelected
});
gantt.appendTo('#Gantt');

function rowSelected(args: RowSelectEventArgs) {
    let selectedrowindex: number[] = gantt.selectionModule.getSelectedRowIndexes();  // get the selected row indexes.
    alert(`Selected row index: ${selectedrowindex}`); // to alert the selected row indexes.
    let selectedrecords: Object[] = gantt.selectionModule.getSelectedRecords();  // get the selected records.
    console.log("Selected records:", selectedrecords); // to print the selected records in console window.
}