import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
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
    const rowDataBound = (args) => {
        const rowElement = args.row;
        const rowData = args.data;
        if (rowData.hasChildRecords) {
            rowElement.classList.add('parent-row');
        } else {
            rowElement.classList.add('child-row');
        }
    }

    return <GanttComponent id='root' dataSource={ganttData} taskFields={taskFields} height='400px' splitterSettings={splitterSettings} rowDataBound={rowDataBound}>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));