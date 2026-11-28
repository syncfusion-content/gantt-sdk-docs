import { Component, ViewEncapsulation } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { stackedHeaderData } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    encapsulation: ViewEncapsulation.None,
    template: `
        <ejs-gantt id="Gantt" height="450px" [dataSource]="data" [taskFields]="taskFields">
            <e-columns>
                <e-column field="TaskID" headerText="Task ID" width="90"></e-column>
                <e-column headerText="Task Information" textAlign="Center">
                    <e-columns>
                        <e-column field="TaskName" headerText="Task Name" width="200"></e-column>
                        <e-column field="Progress" headerText="Progress" width="120"></e-column>
                    </e-columns>
                </e-column>
                <e-column headerText="Schedule" textAlign="Center">
                    <e-columns>
                        <e-column field="StartDate" headerText="Start Date" width="130"></e-column>
                        <e-column field="Duration" headerText="Duration" width="110"></e-column>
                    </e-columns>
                </e-column>
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
}
