ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['Search'],
    searchSettings: { fields: ['TaskName'], operator: 'contains', key: 'Perform', ignoreCase: true },
});
ganttChart.appendTo('#Gantt');

var clearBtn= new ej.buttons.Button();
clearBtn.appendTo('#changeByPosition');

document.getElementById('clear').addEventListener('click', function() {
   ganttChart.searchSettings.key='';
});