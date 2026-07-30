import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { DayMarkers } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource';

function App() {
    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const holidays: object[] = [
        {
            from: '04/04/2019',
            to: '04/05/2019',
            label: 'Public holidays',
            cssClass: 'e-custom-holiday'
        },
        {
            from: '04/12/2019',
            to: '04/12/2019',
            label: 'Local holidays',
            cssClass: 'e-custom-holiday'
        }
    ];

    return (
        <GanttComponent
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskSettings}
            holidays={holidays}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>
            <Inject services={[DayMarkers]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));