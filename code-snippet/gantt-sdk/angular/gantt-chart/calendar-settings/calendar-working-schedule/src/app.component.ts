import { Component } from '@angular/core';
import {
  GanttModule,
  TaskFieldsModel
} from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
    <ejs-gantt
      [dataSource]="data"
      height="450px"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [taskFields]="taskFields"
      [calendarSettings]="calendarSettings">
      <e-columns>
        <e-column field="TaskId" headerText="ID" width="80"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="250"></e-column>
        <e-column field="StartDate" headerText="Start Date"></e-column>
        <e-column field="Duration" headerText="Duration"></e-column>
      </e-columns>
    </ejs-gantt>
  `
})
export class AppComponent {
  public data: object[] = GanttData;
  public projectStartDate: Date = new Date('04/06/2026');
  public projectEndDate: Date = new Date('04/24/2026');

  public taskFields: TaskFieldsModel = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    calendarId: 'CalendarId'
  };

  public calendarSettings = {
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
  };
}
