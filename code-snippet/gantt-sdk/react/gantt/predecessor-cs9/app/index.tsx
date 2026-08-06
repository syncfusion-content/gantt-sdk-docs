
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            enablePredecessorValidation={false}
        >
            <Inject services={[]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));