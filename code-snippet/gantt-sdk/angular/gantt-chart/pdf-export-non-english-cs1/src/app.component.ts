import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, ToolbarService, PdfExportService, SelectionService, GanttComponent, ToolbarItem, PdfExportProperties } from '@syncfusion/ej2-angular-gantt'
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { data, adventProFont } from './data';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

@Component({
    imports: [GanttModule],
    providers: [ToolbarService, PdfExportService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
       [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttChart?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    public columns?: object[];

    public ngOnInit(): void {
        this.data = data;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
        };
        this.columns = [
            { field: 'TaskID', headerText: 'معرف', width: 80 },
            { field: 'TaskName', headerText: 'اسم المهمة', width: 250 },
        ];
        this.toolbar = ['PdfExport'];
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_pdfexport') {
            // Create PdfExportProperties with custom font for non-English characters (Arabic)
            let exportProperties: PdfExportProperties = {
                fileName: "project-arabic.pdf",
                ganttStyle: {
                    font: new PdfTrueTypeFont(adventProFont, 12),
                }
            };
            this.ganttChart!.pdfExport(exportProperties);
        }
    };
}
