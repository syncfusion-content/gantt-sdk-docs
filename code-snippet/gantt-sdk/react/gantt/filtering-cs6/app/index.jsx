import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
  let gantt = null;
  let fieldDropDown = null;
  let typeDropDown = null;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const columns = [
    { field: 'TaskID', headerText: 'Task ID', width: 120 },
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
  ];

  const fieldData = columns.map(col => col.field);
  const typeData = ['Menu', 'Excel'];

  function onFieldChange() {
    if (!fieldDropDown || !typeDropDown) return;
    typeDropDown.enabled = true;
    const selectedField = fieldDropDown.value;
    const column = columns.find(col => col.field === selectedField);
    const nextType = column && column.filter && column.filter.type ? column.filter.type : null;
    typeDropDown.value = nextType;
    typeDropDown.dataBind();
  }

  function onTypeChange(args) {
    if (!gantt || !fieldDropDown) return;

    const selectedField = fieldDropDown.value;
    const selectedType = args.value;

    const column = columns.find(col => col.field === selectedField);
    if (column) {
      column.filter = { ...(column.filter || {}), type: selectedType };
      if (typeDropDown) {
        typeDropDown.value = selectedType;
        typeDropDown.dataBind();
      }
      gantt.refresh();
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold' }}>Select Column:</label>
          <DropDownListComponent
            ref={(ddl) => fieldDropDown = ddl}
            dataSource={fieldData}
            change={onFieldChange}
            placeholder="Select column"
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold' }}>Select Filter Type:</label>
          <DropDownListComponent
            ref={(ddl) => typeDropDown = ddl}
            enabled={false}
            dataSource={typeData}
            change={onTypeChange}
            placeholder="Select filter type"
          />
        </div>
      </div>

      <GanttComponent
        ref={(g) => gantt = g}
        height="430px"
        dataSource={data}
        allowFiltering={true}
        taskFields={taskFields}
        splitterSettings={{ columnIndex: 2 }}
        columns={columns}
      >
        <Inject services={[Filter]} />
      </GanttComponent>
    </div>
  );

}
ReactDOM.render(<App />, document.getElementById('root'));