import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, TimelineSettingsModel, SplitterSettingsModel } from '@syncfusion/ej2-gantt';
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

  const timelineSettings: TimelineSettingsModel = {
    topTier: {
      unit: 'Month',
      count: 3,
      formatter: (date: Date, format: string, tier: string, mode: string) => {
        // Determine quarter based on month.
        const quarter = "Q" + (Math.floor(date.getMonth() / 3) + 1);

        // Use `tier` to differentiate top/bottom tiers.
        const prefix = tier === "topTier" ? "T-" : "B-";

        // Use `mode` to adjust style depending on timeline zoom level.
        const suffix = mode === "Month" ? "-M" : "";

        console.log(format);
        return `${prefix}${quarter}${suffix}`;
      }

    },
    bottomTier: {
      unit: 'Month',
      format: 'MMM',
    }
  };

  const splitterSettings: SplitterSettingsModel = { position: "50%" }
  const projectStartDate = new Date('01/04/2019');
  const projectEndDate = new Date('12/30/2019');

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      timelineSettings={timelineSettings}
      splitterSettings={splitterSettings}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
        <ColumnDirective field="Duration" headerText="Duration" width="150" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
      </ColumnsDirective>
      <Inject services={[]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));