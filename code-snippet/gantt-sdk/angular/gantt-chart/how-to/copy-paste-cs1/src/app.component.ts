import { Component, ViewEncapsulation } from '@angular/core';
import { GanttModule, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [GanttModule],
    providers: [EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-gantt
            height="450px"
            [dataSource]="dataSource"
            [allowTaskCopyPaste]="true"
            [allowSelection]="true"
            [taskFields]="taskFields"
            [columns]="columns"
            [selectionSettings]="selectionSettings"
            [editSettings]="editSettings">
        </ejs-gantt>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public dataSource: object[] = GanttData;
    public taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    };
    public columns: object[] = [
        { field: 'TaskID', headerText: 'Task ID', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 200 },
        { field: 'StartDate', headerText: 'Start Date', width: 130 },
        { field: 'Duration', headerText: 'Duration', width: 110 },
        { field: 'Progress', headerText: 'Progress', width: 120 }
    ];
    public selectionSettings: object = {
        mode: 'Row',
        type: 'Multiple'
    };
    public editSettings: object = {
        allowAdding: true
    };
}
