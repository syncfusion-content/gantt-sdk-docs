ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '420px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['Add',  'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    },
    toolbarClick: toolbarClick,
});
ganttChart.appendTo('#Gantt');

function toolbarClick (args) {
    if (args.item.id === 'Gantt_add') {
        args.cancel = true;
        const newRecord = {
            TaskID: Math.floor(Math.random() * 100000),
            TaskName: 'New Task',
            StartDate: new Date(),
            EndDate: new Date(),
            Duration: 1,
            Progress: 0
        };
        ganttChart.addRecord(newRecord);
        const messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.textContent = 'The default add action was cancelled. A new task was added using `addRecord()`.';
        }
    }
}