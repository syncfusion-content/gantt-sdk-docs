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
    toolbar: [
        { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
        { text: 'Collapse All', tooltipText: 'Collapse All', prefixIcon: 'e-collapse-2', id: 'collapseall', align: 'Right' }
    ],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    },
    toolbarClick: toolbarClick,
});
ganttChart.appendTo('#Gantt');

function toolbarClick (args) {
    if (args.item.id === 'expandall') {
        ganttChart.expandAll();
    }
    if (args.item.id === 'collapseall') {
        ganttChart.collapseAll();
    }
}