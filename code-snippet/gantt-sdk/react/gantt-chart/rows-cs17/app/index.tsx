import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, RowDataBoundEventArgs } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';
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
        position: '75%'
    }
    const rowDataBound = (args: RowDataBoundEventArgs) => {
        const task = args.data;
        if (task.TaskID === 2) {
            args.rowHeight = 90;
        }
    }

    return <GanttComponent id='root' dataSource={ganttData} taskFields={taskFields} height='400px' splitterSettings={splitterSettings} rowDataBound={rowDataBound}>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));