import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';
function App() {
    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const splitterSettings: object = {
        position: '75%'
    }
    return <GanttComponent id='root' dataSource={ganttData} taskFields={taskFields} height='400px' splitterSettings={splitterSettings}>
         <Inject services={[Selection]}/>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));