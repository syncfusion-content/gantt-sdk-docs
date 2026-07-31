import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields: Object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings: Object = { position: '75%' };

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={data}
            taskFields={taskFields}
            height="430px"
            splitterSettings={splitterSettings}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
                <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
                <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" format="yyyy/MM/dd" />
                <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
                <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" format="C2" type="number" />
            </ColumnsDirective>
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));