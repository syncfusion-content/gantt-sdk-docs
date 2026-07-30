import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings = {
        columnIndex: 4
    };

    return (
        <GanttComponent
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            splitterSettings={splitterSettings}
            treeColumnIndex={1}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));