import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttData } from './datasource';

function App() {
  let dialog = null;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = { position: '75%' };

  const showDetails = (data) => {
    if (dialog) {
      dialog.content = `
        <p><b>TaskID:</b> ${data.TaskID}</p>
        <p><b>TaskName:</b> ${data.TaskName}</p>
        <p><b>Duration:</b> ${data.Duration}</p>
      `;
      dialog.show();
    }
  };

  const employeeTemplate = (props) => (
    <ButtonComponent cssClass='e-outline' onClick={() => showDetails(props)}>View</ButtonComponent>
  );

  return (
    <div>
      <GanttComponent height="430px" dataSource={GanttData} taskFields={taskFields} treeColumnIndex={1} splitterSettings={splitterSettings}>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" width="80" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
          <ColumnDirective field="TaskData" headerText="Employee Data" width="150" template={employeeTemplate} />
          <ColumnDirective field="Duration" headerText="Duration" width="90" />
          <ColumnDirective field="Progress" headerText="Progress" width="120" />
        </ColumnsDirective>
        <Inject />
      </GanttComponent>

      <DialogComponent
        ref={(dlg) => (dialog = dlg)}
        visible={false}
        width="50%"
        showCloseIcon={true}
        header="Selected Row Details"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));