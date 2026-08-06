import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

   let ganttInstance = null;

   const taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
   };

   const splitterSettings = {
      columnIndex: 3
   };

   const toolbar = ['Search'];

   const searchSettings = {
      fields: ['TaskName', 'Duration']
   };

   return (
      <GanttComponent
         ref={(g) => ganttInstance = g}
         dataSource={data}
         taskFields={taskFields}
         searchSettings={searchSettings}
         toolbar={toolbar}
         splitterSettings={splitterSettings}
         height="370px"
      >
         <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
            <ColumnDirective field="TaskName" headerText="Task Name" width="400" />
            <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
            <ColumnDirective field="Duration" headerText="Duration" width="150" />
            <ColumnDirective field="Progress" headerText="Progress" width="150" />
         </ColumnsDirective>
         <Inject services={[Filter, Toolbar]} />
      </GanttComponent>
   );
}

ReactDOM.render(<App />, document.getElementById('root'));