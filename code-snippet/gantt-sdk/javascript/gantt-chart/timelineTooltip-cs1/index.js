var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			parentID: 'ParentID'
        },
		tooltipSettings: {
            showTooltip: true,
            timeline: '#timelinetemplateTooltip'
        }
});
ganttChart.appendTo('#Gantt');
function getTooltipData(startDate, endDate, tier) {
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var activeTasks;
    if (tier === 'topTier') {
        activeTasks = gantt.currentViewData.filter(function(task) {
            var taskStart = new Date(task.StartDate);
            var taskEnd = new Date(task.EndDate);
            taskStart.setHours(0, 0, 0, 0);
            taskEnd.setHours(0, 0, 0, 0);
            return taskStart >= startDate && taskEnd <= endDate;
        });    
    }
    else {
        activeTasks = gantt.currentViewData.filter(function(task) {
            var taskStart = new Date(task.StartDate);
            var taskEnd = new Date(task.EndDate);
            taskStart.setHours(0, 0, 0, 0);
            taskEnd.setHours(0, 0, 0, 0);
            return taskStart.getTime() === startDate.getTime() && taskEnd.getTime() === endDate.getTime();
        });
    }
    var milestones = activeTasks.filter(function(task) {
        return task.Duration === 0;
    });
    var totalProgress = activeTasks.reduce(function(acc, task) {
        return acc + (task.Progress ? task.Progress : 0);
    }, 0);    
    var overallProgress = (activeTasks.length > 0) ? (totalProgress / activeTasks.length).toFixed(2) : 0;
    return {
        activeTasks: activeTasks.length,
        milestones: milestones.length,
        overallProgress: overallProgress
    };
}
function topTierTooltip(value, date, tier) {
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var endDate;
    var startdate = new Date(date);
    if (gantt.timelineSettings.topTier.unit) {
        endDate = new Date(startdate.getTime());
        endDate.setDate(startdate.getDate() + 6);
    }
    var data = getTooltipData(startdate, endDate,tier);
    return generateTooltipMarkup(value, data);  
}
function generateTooltipMarkup(label, tooltipData) {
    var themeIsDark = document.body.classList.contains('tailwind3-dark') ||
    document.body.classList.contains('fluent2-dark') ||
    document.body.classList.contains('material3-dark') ||
    document.body.classList.contains('bootstrap5.3-dark') ||
    document.body.classList.contains('fluent2-highcontrast') ||
    document.body.classList.contains('highcontrast') ||
    document.body.classList.contains('fluent2-dark');

    var borderColor = themeIsDark ?  'black' : 'white';
    return (
        '<div style="padding: 5px;">' +
            '<div style="padding-bottom: 5px; text-align: center; border-bottom: 2px solid ' + borderColor + ';">' +
                '<span style="font-weight: bold; font-size: 14px;">' + label + '</span>' +
            '</div>' +
            '<div style="display: flex; padding-bottom: 5px; padding-top: 9px">' +
                '<span style="font-weight: bold;">Active Tasks:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.activeTasks + '</span>' +
            '</div>' +
            '<div style="display: flex; padding-bottom: 5px;">' +
                '<span style="font-weight: bold;">Milestones:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.milestones + '</span>' +
            '</div>' +
            '<div style="display: flex; padding-bottom: 5px;">' +
                '<span style="font-weight: bold;">Overall Progress:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.overallProgress + '</span>' +
            '</div>' +
        '</div>'
    );
}
function bottomTierTooltip(date, tier) {
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var startdate = new Date(date);
    if (gantt.timelineSettings.bottomTier.unit) {
        endDate = new Date(startdate.getTime());
    }
    var data = getTooltipData(startdate, endDate,tier);
    return generateTooltipMarkup(date, data);
}