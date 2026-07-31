ej.gantt.Gantt.Inject(ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
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
ganttChart.appendTo('#Gantt');

function rowSelected(args) {
    var selectedrowindex = ganttChart.selectionModule.getSelectedRowIndexes();  // get the selected row indexes.
    alert(`Selected row index: ${selectedrowindex}`); // to alert the selected row indexes.
    let selectedrecords = ganttChart.selectionModule.getSelectedRecords();  // get the selected records.
    console.log("Selected records:", selectedrecords); // to print the selected records in console window.
}