import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
        const taskFields = {
            id: "TaskID",
            name: "TaskName",
            startDate: "StartDate",
            duration: "Duration",
            progress: "Progress",
            parentID: "ParentID",
        };
   let ganttInstance;
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} height="450px" ref={gantt => ganttInstance = gantt}>
         <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID"  width="100" ></ColumnDirective>
            <ColumnDirective field="TaskName" headerText="Task Name"></ColumnDirective>
            <ColumnDirective field="StartDate" headerText="Start Date" ></ColumnDirective>
            <ColumnDirective field="Duration" headerText="Duration"></ColumnDirective>
            <ColumnDirective field="Progress" headerText="Progress"></ColumnDirective>
        </ColumnsDirective>
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));