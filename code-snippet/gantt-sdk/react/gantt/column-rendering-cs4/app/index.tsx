import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  TaskFieldsModel,
  SplitterSettingsModel
} from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
  let gantt: GanttComponent | null;

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: SplitterSettingsModel = {
    position: '75%'
  };

  const getConcatenatedNames = (field: string, rowData: GanttTask): string => {
    return rowData.Name.map(
      (person: PersonName) => person.lastName || person.firstName
    ).join(' ');
  };

  return (
    <GanttComponent
      ref={(g: GanttComponent) => (gantt = g)}
      height="430px"
      dataSource={GanttData}
      taskFields={taskFields}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
        <ColumnDirective
          field="Name"
          headerText="Full Name"
          textAlign="Right"
          valueAccessor={getConcatenatedNames}
          width="250"
        />
        <ColumnDirective field="Duration" headerText="Duration" width="90" />
        <ColumnDirective field="Progress" headerText="Progress" width="120" />
      </ColumnsDirective>
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export interface PersonName {
  firstName: string;
  lastName: string;
}

export interface GanttTask {
  TaskID: number;
  ParentID?: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress: number;
  Name: PersonName[];
}