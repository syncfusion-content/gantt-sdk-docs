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
            treeColumnIndex={1}
            splitterSettings={splitterSettings}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" format="N" type="number" />
                <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
                <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" format="yMd" />
                <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
                <ColumnDirective field="Progress" headerText="Progress (%)" textAlign="Right" width="120" format="P2" />
                <ColumnDirective field="Progress" headerText="Progress ($)" textAlign="Right" width="120" format="C" type="number" />
            </ColumnsDirective>
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));