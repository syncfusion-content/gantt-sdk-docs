var primaryGantt;
var secondaryGantt;

var taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
};

function syncScroll(args) {
    if (args.requestType === 'scroll' && args.scrollDirection === 'Horizontal') {
        var chart = secondaryGantt.element.querySelector('.e-chart-root-container > div');
        if (chart) {
            chart.scrollLeft = args.scrollLeft;
        }
    }
}

primaryGantt = new ej.gantt.Gantt({
    id: 'primaryGanttContainer',
    dataSource: ganttData,
    height: '50%',
    width: '100%',
    taskFields: taskFields,
    treeColumnIndex: 1,
    allowSelection: true,
    dateFormat: 'MMM dd, y',
    highlightWeekends: true,
    actionComplete: syncScroll
});
primaryGantt.appendTo('#primaryGantt');

secondaryGantt = new ej.gantt.Gantt({
    id: 'secondaryGanttContainer',
    dataSource: ganttData,
    height: '50%',
    width: '100%',
    taskFields: taskFields,
    treeColumnIndex: 1,
    allowSelection: true,
    dateFormat: 'MMM dd, y',
    highlightWeekends: true
});
secondaryGantt.appendTo('#secondaryGantt');
