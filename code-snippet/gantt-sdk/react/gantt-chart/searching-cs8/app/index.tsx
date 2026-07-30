import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { Column } from '@syncfusion/ej2-grids';

function App() {

  let ganttInstance: GanttComponent | null = null;
  let key: string = '';

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
  };

  const toolbar: any = ['Search'];

  function actionBegin(args: any): void {
    if (args.requestType === 'searching') {
      key = args.searchString ? args.searchString.toLowerCase() : '';
    }
  }

  function queryCellInfo(args: any): void {
    if (key) {
      const field = (args.column as Column).field;
      const value = args.data[field];

      if (typeof value === 'string' || typeof value === 'number') {
        const str = value.toString();
        const regex = new RegExp(key, 'gi');
        const highlighted = str.replace(regex, (m: string) => `<span class='customcss'>${m}</span>`);
        (args.cell as HTMLElement).innerHTML = highlighted;
      }
    }
  }

  return (
    <div>
      <style>
        {`.customcss { background-color: yellow; font-weight: bold; color: black; }`}
      </style>

      <GanttComponent
        ref={(g) => ganttInstance = g}
        dataSource={data}
        taskFields={taskFields}
        toolbar={toolbar}
        splitterSettings={splitterSettings}
        height="370px"
        actionBegin={actionBegin}
        queryCellInfo={queryCellInfo}
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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));