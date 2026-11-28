import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, SCurveService, ToolbarService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { ToolbarItem, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [GanttModule],
    providers: [SCurveService, ToolbarService, EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="450px" [dataSource]="data" [taskFields]="taskSettings"
            [treeColumnIndex]="1" [columns]="columns" [allowSelection]="true"
            [splitterSettings]="splitterSettings"
            [editSettings]="editSettings" [toolbar]="toolbar" [timelineSettings]="timelineSettings"
            [sCurveSettings]="sCurveSettings" [projectStartDate]="projectStartDate"
            [projectEndDate]="projectEndDate"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];
    public sCurveSettings?: object;
    public timelineSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public columns?: object[];
    public splitterSettings?: object;

    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.timelineSettings = {
            topTier: { unit: 'Week' },
            bottomTier: { unit: 'Day' }
        };
        this.sCurveSettings = {
            visible: true,
            dataSet: [
                { field: 'Progress', color: '#4CAF50' },
                { field: 'Duration', color: '#2196F3' }
            ]
        };
        this.columns = [
            { field: 'TaskID', headerText: 'ID', width: 70 },
            { field: 'TaskName', headerText: 'Task Name', width: 220 },
            { field: 'StartDate', headerText: 'Start Date', width: 130, format: 'yMd' },
            { field: 'Duration', headerText: 'Duration', width: 100 },
            { field: 'Progress', headerText: 'Progress (%)', width: 120 }
        ];
        this.splitterSettings = { columnIndex: 2 };
        this.projectStartDate = new Date(2025, 11, 28);
        this.projectEndDate = new Date(2026, 1, 15);
    }
}
