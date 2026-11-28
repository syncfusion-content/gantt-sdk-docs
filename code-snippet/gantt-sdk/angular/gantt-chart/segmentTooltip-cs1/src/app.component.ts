import { Component } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    template: `
        <ejs-gantt
            [dataSource]="data"
            [taskFields]="taskFields"
            [tooltipSettings]="tooltipSettings"
            [projectStartDate]="projectStartDate"
            [projectEndDate]="projectEndDate"
            height="450px">
        </ejs-gantt>
    `
})
export class AppComponent {
    public data = GanttData;

    public taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    };

    public tooltipSettings = {
        showTooltip: true,
        showSegmentTooltip: true
    };

    public projectStartDate = new Date('04/05/2026');
    public projectEndDate = new Date('04/10/2026');
}
