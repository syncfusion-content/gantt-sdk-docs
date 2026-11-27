<template>
    <div>
        <ejs-gantt :dataSource="data" :height="height" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :taskFields="taskFields" :calendarSettings="calendarSettings" :columns="columns"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from './data-source.js';
export default {
    name: "App",
    components: { "ejs-gantt": GanttComponent },
    data: function() {
        return {
            data: GanttData,
            height: '450px',
            projectStartDate: new Date('04/06/2026'),
            projectEndDate: new Date('04/24/2026'),
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                calendarId: 'CalendarId'
            },
            calendarSettings: {
                projectCalendar: {
                    workingTime: [{ from: 9, to: 17 }]
                },
                taskCalendars: [{
                    calendarId: 'day-shift',
                    workWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    workingTime: [{ from: 9, to: 17 }],
                    weekWorkingTime: [
                        { dayOfWeek: 'Monday', timeRange: [{ from: 9, to: 12 }, { from: 13, to: 17 }] },
                        { dayOfWeek: 'Friday', timeRange: [{ from: 9, to: 13 }] }
                    ]
                }]
            },
            columns: [
                { field: 'TaskId', headerText: 'ID', width: '80' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date' },
                { field: 'Duration', headerText: 'Duration' }
            ]
        };
    }
};
</script>
