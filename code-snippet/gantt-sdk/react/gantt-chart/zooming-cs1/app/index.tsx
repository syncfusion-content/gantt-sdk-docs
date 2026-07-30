
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { Edit, Toolbar, Selection } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource';

function App() {
   const taskSettings: TaskFieldsModel = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
   };

   const toolbar: string[] = ['ZoomIn', 'ZoomOut', 'ZoomToFit'];

   return (
      <GanttComponent
         height="430px"
         dataSource={data}
         taskFields={taskSettings}
         toolbar={toolbar}
      >
         <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
            <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
            <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
            <ColumnDirective field="Duration" headerText="Duration" width="150" />
            <ColumnDirective field="Progress" headerText="Progress" width="150" />
         </ColumnsDirective>
         <Inject services={[Edit, Toolbar, Selection]} />
      </GanttComponent>
   );
}

ReactDOM.render(<App />, document.getElementById('root'));
