var emptyRecordTemplate = function () {
    return '<div class="emptyRecordTemplate"><span>There is no data available to display at the moment.</span></div>';
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: [],
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        resourceInfo: 'resources'
    },
    created: function () {
        this.treeGrid.grid.emptyRecordTemplate = emptyRecordTemplate;
    }
});

ganttChart.appendTo('#Gantt');