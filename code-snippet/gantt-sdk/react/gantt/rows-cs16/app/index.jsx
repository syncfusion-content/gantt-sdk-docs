import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
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
    let gantt;
    const onCheckBoxChange = (args) => {
        gantt.autoFocusTasks = args.checked;
    };
    return <div><CheckBoxComponent label='Enable or Disable AutoFocus' change={onCheckBoxChange}></CheckBoxComponent>
        <GanttComponent id='root' ref={g => gantt = g} dataSource={ganttData} taskFields={taskFields} height='400px' splitterSettings={splitterSettings} autoFocusTasks="true" >
        </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById('root'));