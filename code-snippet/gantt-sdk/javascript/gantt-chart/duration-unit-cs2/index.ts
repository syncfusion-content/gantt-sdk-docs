import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
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

gantt.appendTo('#Gantt');

// Update button functionality
document.getElementById('updateButton').addEventListener('click', function() {
    let daysPerWeek = parseInt((document.getElementById('daysPerWeek') as HTMLInputElement).value);
    let daysPerMonth = parseInt((document.getElementById('daysPerMonth') as HTMLInputElement).value);
    
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
    gantt.daysPerWeek = daysPerWeek;
    gantt.daysPerMonth = daysPerMonth;
});