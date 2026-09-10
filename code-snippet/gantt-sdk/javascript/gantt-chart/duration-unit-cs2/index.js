
var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '380px',
    daysPerWeek: 5,
    daysPerMonth: 20,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        durationUnit: 'DurationUnit',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 4
    }		
});
ganttChart.appendTo('#Gantt');

// Update button functionality
document.getElementById('updateButton').addEventListener('click', function() {
    var daysPerWeek = parseInt(document.getElementById('daysPerWeek').value);
    var daysPerMonth = parseInt(document.getElementById('daysPerMonth').value);
    
    // Validate input ranges
    if (daysPerWeek < 1 || daysPerWeek > 7) {
        alert('Days per Week must be between 1 and 7');
        return;
    }
    if (daysPerMonth < 1 || daysPerMonth > 31) {
        alert('Days per Month must be between 1 and 31');
        return;
    }
    
    // Update Gantt chart properties
    ganttChart.daysPerWeek = daysPerWeek;
    ganttChart.daysPerMonth = daysPerMonth;
});
