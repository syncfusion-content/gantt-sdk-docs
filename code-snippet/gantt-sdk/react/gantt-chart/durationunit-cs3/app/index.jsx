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
        durationUnit: 'DurationUnit',
        parentID: 'ParentID'
    };

    const splitterSettings = {
        columnIndex: 4
    };

    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            splitterSettings={splitterSettings}
        >
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));