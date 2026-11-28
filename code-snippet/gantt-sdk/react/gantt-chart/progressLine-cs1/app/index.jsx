import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, ProgressLine } from '@syncfusion/ej2-react-gantt';
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
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowTaskbarEditing: true
    };
    const progressLine = {
        statusDate: new Date('04/07/2026'),
        lineColor: '#e3165b',
        lineWidth: 2
    };
    return (
        <GanttComponent
            dataSource={data}
            taskFields={taskFields}
            editSettings={editSettings}
            progressLine={progressLine}
            projectStartDate={new Date('04/05/2026')}
            projectEndDate={new Date('04/30/2026')}
            height="450px">
            <Inject services={[Edit, ProgressLine]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
