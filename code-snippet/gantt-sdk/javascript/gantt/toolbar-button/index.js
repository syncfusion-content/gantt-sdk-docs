ej.gantt.Gantt.Inject(ej.gantt.Filter,ej.gantt.Toolbar);

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
    toolbar: ['Add',  'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    }
});
ganttChart.appendTo('#Gantt');