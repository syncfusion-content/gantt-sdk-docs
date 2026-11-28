import { Component } from '@angular/core';
import { GanttModule, EditService, ProgressLineService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    providers: [EditService, ProgressLineService],
    template: `
        <ejs-gantt
            [dataSource]="data"
            [taskFields]="taskFields"
            [editSettings]="editSettings"
            [progressLine]="progressLine"
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
        parentID: 'ParentID'
    };

    public editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowTaskbarEditing: true
    };

    public progressLine = {
        statusDate: new Date('04/07/2026'),
        lineColor: '#e3165b',
        lineWidth: 2
    };

    public projectStartDate = new Date('04/05/2026');
    public projectEndDate = new Date('04/30/2026');
}
