import { Component } from '@angular/core';
import {
  GanttAllModule,
  TaskFieldsModel,
  LabelSettingsModel,
  CalendarSettingsModel,
  DayMarkersService
} from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule],
  template: `
    <ejs-gantt
      [dataSource]="data"
      height="450px"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [workWeek]="workWeek"
      [includeWeekend]="includeWeekend"
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
  `,
  providers: [DayMarkersService]
})
export class AppComponent {
  public data: object[] = GanttData;

  public projectStartDate: Date = new Date('04/01/2026');
  public projectEndDate: Date = new Date('04/30/2026');
  public workWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public includeWeekend: boolean = false;

  public taskFields: TaskFieldsModel = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    parentID: 'ParentId'
  };

  public labelSettings: LabelSettingsModel = {
    leftLabel: 'TaskName'
  };

  public calendarSettings: CalendarSettingsModel = {
    projectCalendar: {
      workingTime: [
        { from: 9, to: 12 },
        { from: 13, to: 17 }
      ],
      exceptions: [
        {
          from: new Date('04/06/2026'),
          to: new Date('04/06/2026'),
          label: 'Extended Working Day',
          exceptionWorkingTime: [{ from: 8, to: 18 }]
        }
      ]
    }
  };
}