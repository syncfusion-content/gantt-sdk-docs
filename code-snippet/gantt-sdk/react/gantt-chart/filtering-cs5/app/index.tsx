import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Filter, Inject, TaskFieldsModel, SplitterSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { data } from './datasource';

function App() {
  let gantt: GanttComponent | null;
  let dropInstance: DropDownList;

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 2
  };

  const filterSettings: FilterSettingsModel = {};

  const filter = {
    ui: {
      create: (args: any) => {
        const input: HTMLElement = createElement('input', { className: 'flm-input' });
        args.target.appendChild(input);
        dropInstance = new DropDownList({
          dataSource: new DataManager(data),
          fields: { text: 'TaskName', value: 'TaskName' },
          placeholder: 'Select a value',
          popupHeight: '200px'
        });
        dropInstance.appendTo(input);
      },
      write: (args: any) => {
        dropInstance.value = args.filteredValue;
      },
      read: (args: any) => {
        args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
      }
    }
  };

  return (
    <GanttComponent
      ref={(g: GanttComponent) => gantt = g}
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      filterSettings={filterSettings}
      allowFiltering={true}
      height="370px"
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="120" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" filter={filter} />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));