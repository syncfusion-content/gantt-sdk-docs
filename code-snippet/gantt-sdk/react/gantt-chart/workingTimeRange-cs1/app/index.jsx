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
    const timelineSettings = {
        timelineViewMode: 'Day'
    };
    const dayWorkingTime = [{ from: 9, to: 18 }];

    return <GanttComponent dataSource={data} taskFields={taskFields} dayWorkingTime={dayWorkingTime} timelineSettings={timelineSettings} height='450px'>
    </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));