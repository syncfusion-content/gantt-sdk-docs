import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { Fetch } from '@syncfusion/ej2-base';

function App() {

    let ganttRef: GanttComponent | null = null;

    const data: object[] = [];

    const taskFields: TaskFieldsModel = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'SubTasks'
    };

    const projectStartDate: Date = new Date('02/24/2021');
    const projectEndDate: Date = new Date('07/20/2021');

    function bind(): void {
        const temp = ganttRef;
        const fetchInst = new Fetch("https://services.syncfusion.com/angular/production/api/GanttData", "GET");

        temp!.showSpinner();
        fetchInst.send();

        fetchInst.onSuccess = function (data: any) {
            temp!.hideSpinner();
            temp!.dataSource = data.Items;
            temp!.refresh();
        };
    }

    return (
        <div>
            <button onClick={bind}>Bind Data</button>
            <br /><br />

            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={data}
                taskFields={taskFields}
                projectStartDate={projectStartDate}
                projectEndDate={projectEndDate}
                ref={(g: GanttComponent | null) => { ganttRef = g; }}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskId" headerText="Task ID" width="100" />
                    <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                    <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                    <ColumnDirective field="Duration" headerText="Duration" width="150" />
                    <ColumnDirective field="Progress" headerText="Progress" width="150" />
                </ColumnsDirective>

                <Inject services={[Toolbar, ExcelExport, Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));