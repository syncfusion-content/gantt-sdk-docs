ej.gantt.Gantt.Inject(ej.gantt.DayMarkers, ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: baselineTemplateData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        baselineStartDate: 'BaselineStartDate',
        baselineEndDate: 'BaselineEndDate',
        parentID: 'ParentID',
    },
    baselineTemplate: baselineTemplate,
    splitterSettings: {
        columnIndex: 3,
    },
    tooltipSettings: {
        showTooltip: false,
    },
    allowSelection: true,
    renderBaseline: true,
    rowHeight: 60,
    taskbarHeight: 20,
    gridLines: "Both",
    highlightWeekends: true,
    columns: [
        { field: 'TaskID', headerText: 'ID', textAlign: 'Left' },
        { field: 'TaskName', width: '270px', headerText: 'Name' },
        { field: 'BaselineStartDate', headerText: 'Baseline Start Date', width: '180px' },
        { field: 'BaselineDuration', headerText: 'Baseline Duration', width: '180px' },
        { field: 'BaselineStartDate1', format: { skeleton: 'yMd', type: 'date' }, headerText: 'Baseline1 Start Date', width: '180px' },
        { field: 'BaselineDuration1', headerText: 'Baseline1 Duration', width: '180px' },
        { field: 'BaselineStartDate2', format: { skeleton: 'yMd', type: 'date' }, headerText: 'Baseline2 Start Date', width: '180px' },
        { field: 'BaselineDuration2', headerText: 'Baseline2 Duration', width: '180px' }
    ],
    labelSettings: {
        taskLabel: 'TaskName'
    },
    height: '450px',
    baselineColor: 'red'
});
ganttChart.appendTo('#Gantt');

function baselineTemplate(props) {
    if (props.hasChildRecords || (props.data && props.data.hasChildRecords)) {
        return '';
    }
    var taskRecord = props.taskData;
    var ganttProperties = taskRecord.ganttProperties;
    var chartRowsModule = gantt.chartRowsModule;
    var baselineTop = chartRowsModule.baselineTop;
    var baselineHeight = chartRowsModule.baselineHeight;
    var taskBarHeight = chartRowsModule.taskBarHeight;
    var milestoneHeight = chartRowsModule.milestoneHeight;
    var milestoneMarginTop = chartRowsModule.milestoneMarginTop;
    var rowHeight = gantt.rowHeight;
    var renderBaseline = gantt.renderBaseline;
    var enableRtl = gantt.enableRtl;
    var taskSpacing = 9;
    var baselineSpacing = 4;
    function getLeft(date) {
        return gantt.dataOperation.getTaskLeft(new Date(date), false, ganttProperties.calendarContext);
    }
    function getWidth(start, duration) {
        if (!start || duration == null || duration === 0)
            return 0;
        // Calculate end date based on start date and duration
        var end = new Date(start);
        end.setDate(end.getDate() + duration);
        var leftStart = gantt.dataOperation.getTaskLeft(new Date(start), false, ganttProperties.calendarContext);
        var leftEnd = gantt.dataOperation.getTaskLeft(end, false, ganttProperties.calendarContext);
        return leftEnd - leftStart;
    }
    function render(start, duration, index) {
        if (!start)
            return '';
        var leftPosition = getLeft(start);
        var width = getWidth(start, duration);
        // Milestone baseline (duration = 0)
        if (duration === 0) {
            var milestoneSize = renderBaseline ? taskBarHeight : (taskBarHeight - 10);
            var baselineMilestoneHeight = renderBaseline ? 5 : 2;
            var leftPosition_ms = enableRtl
                ? (leftPosition - (milestoneHeight / 2) + 3)
                : (leftPosition - (milestoneHeight / 2) + 1);
            var marginTop = (-Math.floor(rowHeight - milestoneMarginTop) + baselineMilestoneHeight) +
                2 +
                (index * baselineSpacing);
            // shift per baseline
            return '<div class="e-baseline-gantt-milestone-container" style="position:absolute;' +
                'width:' + milestoneSize + 'px;' +
                'height:' + milestoneSize + 'px;' +
                'transform:rotate(45deg);' +
                (enableRtl ? 'right:' : 'left:') + leftPosition_ms + 'px;' +
                'margin-top:' + marginTop + 'px;">' +
                '</div>';
        }
        // Normal baseline bar
        return '<div class="e-baseline-bar" role="term" style="position:absolute;' +
            (enableRtl ? 'right:' : 'left:') + leftPosition + 'px;' +
            'margin-top:' + (baselineTop + (index * taskSpacing)) + 'px;' +
            'width:' + width + 'px;' +
            'height:' + baselineHeight + 'px;"></div>';
    }
    return ('<div class="custom-multi-baseline">' +
        render(taskRecord.taskData.BaselineStartDate, taskRecord.taskData.BaselineDuration, 0) +
        render(taskRecord.taskData.BaselineStartDate1, taskRecord.taskData.BaselineDuration1, 1) +
        render(taskRecord.taskData.BaselineStartDate2, taskRecord.taskData.BaselineDuration2, 2) +
        '</div>');
}