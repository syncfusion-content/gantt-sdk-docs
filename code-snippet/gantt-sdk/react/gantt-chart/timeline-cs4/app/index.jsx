import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, SplitterSettingsModel, TimelineSettingsModel, LabelSettingsModel } from '@syncfusion/ej2-react-gantt';
import { infiniteTimelineScrollData } from './datasource';

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    columnIndex: 3
  };

  const timelineSettings = {
    viewStartDate: new Date('12/29/2025'),
    viewEndDate: new Date('04/27/2026')
  };

  const labelSettings = {
    leftLabel: 'TaskID',
    rightLabel: 'TaskName'
  };

  let ganttRef;

  return (
    <GanttComponent
      ref={g => ganttRef = g}
      height='430px'
      dataSource={infiniteTimelineScrollData}
      enableInfiniteTimelineScroll={true}
      taskFields={taskFields}
      treeColumnIndex={1}
      splitterSettings={splitterSettings}
      gridLines='Both'
      timelineSettings={timelineSettings}
      labelSettings={labelSettings}
    >
      <ColumnsDirective>
        <ColumnDirective field='TaskID' width='80' />
        <ColumnDirective field='TaskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip' />
        <ColumnDirective field='StartDate' />
        <ColumnDirective field='Duration' />
        <ColumnDirective field='Progress' />
        <ColumnDirective field='Predecessor' />
      </ColumnsDirective>
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));