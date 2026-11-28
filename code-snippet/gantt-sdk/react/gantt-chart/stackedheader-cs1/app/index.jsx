import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';

const data = [
    { TaskID: 1, TaskName: 'Project planning', StartDate: new Date(2024, 0, 1), Duration: 5, Progress: 40 },
    { TaskID: 2, TaskName: 'Requirements gathering', StartDate: new Date(2024, 0, 8), Duration: 4, Progress: 60 },
    { TaskID: 3, TaskName: 'Design', StartDate: new Date(2024, 0, 12), Duration: 6, Progress: 25 },
    { TaskID: 4, TaskName: 'Implementation', StartDate: new Date(2024, 0, 22), Duration: 8, Progress: 10 },
    { TaskID: 5, TaskName: 'Testing', StartDate: new Date(2024, 1, 1), Duration: 5, Progress: 0 }
];

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    };

    return (
        <GanttComponent id="Gantt" dataSource={data} taskFields={taskFields} height="450px">
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
                <ColumnDirective headerText="Task Information" textAlign="Center">
                    <ColumnsDirective>
                        <ColumnDirective field="TaskName" headerText="Task Name" width="200" />
                        <ColumnDirective field="Progress" headerText="Progress" width="120" />
                    </ColumnsDirective>
                </ColumnDirective>
                <ColumnDirective headerText="Schedule" textAlign="Center">
                    <ColumnsDirective>
                        <ColumnDirective field="StartDate" headerText="Start Date" width="130" />
                        <ColumnDirective field="Duration" headerText="Duration" width="110" />
                    </ColumnsDirective>
                </ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
