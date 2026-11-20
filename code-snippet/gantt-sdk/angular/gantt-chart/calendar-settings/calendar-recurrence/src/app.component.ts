import { Component } from '@angular/core';
import {
  GanttModule,
  TaskFieldsModel,
  LabelSettingsModel,
  CalendarSettingsModel
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
      [labelSettings]="labelSettings"
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

  public projectStartDate: Date = new Date('04/01/2026');
  public projectEndDate: Date = new Date('06/30/2026');

  public taskFields: TaskFieldsModel = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    parentID: 'ParentId',
    calendarId: 'CalendarId'
  };

  public labelSettings: LabelSettingsModel = {
    leftLabel: 'TaskName'
  };

  public calendarSettings: CalendarSettingsModel = {
    projectCalendar: { workingTime: [{ from: 8, to: 17 }] },
    taskCalendars: [
      {
        calendarId: 'regional',
        workWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        workingTime: [{ from: 9, to: 12 }, { from: 13, to: 17 }],
        holidays: [{
          from: new Date('04/10/2026'),
          to: new Date('04/10/2026'),
          label: 'Regional closure',
          recurrence: { frequency: 'monthly', interval: 1, dayOfMonth: 10, count: 3 }
        }],
        exceptions: [
          {
            from: new Date('04/17/2026'),
            to: new Date('04/17/2026'),
            label: 'Partial working day',
            exceptionWorkingTime: [{ from: 9, to: 12 }],
            recurrence: { frequency: 'monthly', interval: 1, dayOfMonth: 17, count: 3 }
          }
        ]
      }
    ]
  };
}