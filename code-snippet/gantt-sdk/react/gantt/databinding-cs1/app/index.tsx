import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { hierarchyData } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    return <GanttComponent dataSource={hierarchyData} taskFields={taskFields} height='400px'>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));