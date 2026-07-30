import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttData } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = { position: '75%' };

  const orderStatusTemplate = (props) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px' }}>
      <RadioButtonComponent label="Pending" name={`radio-${props.TaskID}`} cssClass="e-success" checked={props.OrderStatus === 'Pending'} />
      <RadioButtonComponent label="Confirmed" name={`radio-${props.TaskID}`} cssClass="e-success" checked={props.OrderStatus === 'Confirmed'} />
      <RadioButtonComponent label="Shipped" name={`radio-${props.TaskID}`} cssClass="e-success" checked={props.OrderStatus === 'Shipped'} />
    </div>
  );

  return (
    <GanttComponent height="430px" dataSource={GanttData} taskFields={taskFields} treeColumnIndex={1} splitterSettings={splitterSettings}>
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
        <ColumnDirective field="Duration" headerText="Duration" width="90" />
        <ColumnDirective field="Progress" headerText="Progress" width="120" />
        <ColumnDirective field="OrderStatus" headerText="Order Status" width="180" template={orderStatusTemplate} />
      </ColumnsDirective>
      <Inject />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));