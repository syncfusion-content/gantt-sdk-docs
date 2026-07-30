var clickHandler = function(args){
    if (args.item.text === 'Test') {
        const messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.textContent = 'Custom toolbar click';
        }
    }
};

ej.gantt.Gantt.Inject(ej.gantt.Filter,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbarClick: clickHandler,
    toolbar: ['ExpandAll', 'CollapseAll', { text: 'Test', tooltipText: 'Test',id: 'Test' }]
});
ganttChart.appendTo('#Gantt');