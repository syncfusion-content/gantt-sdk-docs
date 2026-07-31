import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, SplitterSettingsModel, FilterSettingsModel, ActionBeginArgs } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
    dependency: 'Predecessor'
  };
  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
  };
  const filterSettings: FilterSettingsModel = {
    type: 'Excel'
  };
  function actionBegin(args: ActionBeginArgs): void {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
      (args as any).filterChoiceCount = 1000;
    }
  }
  return (
    <GanttComponent
      height="370px"
      allowFiltering={true}
      dataSource={data}
      taskFields={taskSettings}
      splitterSettings={splitterSettings}
      filterSettings={filterSettings}
      actionBegin={actionBegin}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="120" />
        <ColumnDirective field="TaskName" headerText="Project Activity" width="250" clipMode="EllipsisWithTooltip" />
        <ColumnDirective field="StartDate" headerText="Planned Start Date" width={200} />
        <ColumnDirective field="Duration" headerText="Duration" width={160} />
        <ColumnDirective field="Progress" headerText="Completion (%)" width={200} />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));