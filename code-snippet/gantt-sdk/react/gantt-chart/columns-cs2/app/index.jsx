import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings = { position: '90%' };

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={GanttData}
            taskFields={taskFields}
            height="430px"
            treeColumnIndex={1}
            splitterSettings={splitterSettings}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
                <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
                <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
                <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="auto" />
                <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="30%" />
            </ColumnsDirective>
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
