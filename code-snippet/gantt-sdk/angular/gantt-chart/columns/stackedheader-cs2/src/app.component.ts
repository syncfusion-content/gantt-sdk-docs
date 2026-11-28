import { Component, ViewEncapsulation } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { stackedHeaderData } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    encapsulation: ViewEncapsulation.None,
    template: `
        <ejs-gantt id="Gantt" height="450px" [dataSource]="data" [taskFields]="taskFields"
            [allowSorting]="true" [allowFiltering]="true" [allowResizing]="true" [allowReordering]="true"
            [toolbar]="toolbar" [editSettings]="editSettings">
            <e-columns>
                <e-column headerText="Task Information">
                    <e-columns>
                        <e-column field="TaskName" headerText="Task Name" width="220" allowEditing="true"></e-column>
                        <e-column headerText="Progress Details">
                            <e-columns>
                                <e-column field="Progress" headerText="Progress" width="120" type="number" format="N0" allowEditing="true"></e-column>
                                <e-column field="Effort" headerText="Effort (hours)" width="130" type="number" format="N0" allowSorting="false" allowFiltering="false" allowEditing="false" visible="false"></e-column>
                            </e-columns>
                        </e-column>
                    </e-columns>
                </e-column>
                <e-column headerText="Schedule">
                    <e-columns>
                        <e-column headerText="Timeline">
                            <e-columns>
                                <e-column field="StartDate" headerText="Start Date" width="140" format="yMd" allowEditing="true"></e-column>
                                <e-column field="Duration" headerText="Duration" width="110" type="number" format="N0" allowFiltering="false" allowEditing="false"></e-column>
                            </e-columns>
                        </e-column>
                    </e-columns>
                </e-column>
                <e-column field="Budget" headerText="Budget" width="130" type="number" format="C2" allowEditing="true"></e-column>
            </e-columns>
        </ejs-gantt>`
})
export class AppComponent {
    public data = stackedHeaderData;
    public taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    };
    public toolbar: string[] = ['Edit', 'Update', 'Cancel'];
    public editSettings: object = { allowEditing: true, mode: 'Auto' };
}
