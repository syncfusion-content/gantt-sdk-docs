import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        durationUnit: 'DurationUnit',
        parentID: 'ParentID'
    };

    const splitterSettings: SplitterSettingsModel = {
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