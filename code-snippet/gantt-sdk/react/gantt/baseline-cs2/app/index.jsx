import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection, DayMarkers, TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { baselineTemplateData } from './datasource';

function App() {
  let ganttInstance = null;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    columnIndex: 3
  };

  const tooltipSettings = {
    showTooltip: false
  };

  const labelSettings = {
    taskLabel: 'TaskName'
  };

  function baselineTemplate(props) {
    if (props.hasChildRecords || (props.data && props.data.hasChildRecords)) {
      return '';
    }

    const gantt = ganttInstance;
    const taskRecord = props.taskData;
    const ganttProperties = taskRecord.ganttProperties;
    const chartRowsModule = gantt.chartRowsModule;

    const baselineTop = chartRowsModule.baselineTop;
    const baselineHeight = chartRowsModule.baselineHeight;
    const taskBarHeight = chartRowsModule.taskBarHeight;
    const milestoneHeight = chartRowsModule.milestoneHeight;
    const milestoneMarginTop = chartRowsModule.milestoneMarginTop;

    const rowHeight = gantt.rowHeight;
    const renderBaseline = gantt.renderBaseline;
    const enableRtl = gantt.enableRtl;

    const taskSpacing = 9;
    const baselineSpacing = 4;

    function getLeft(date) {
      return gantt.dataOperation.getTaskLeft(new Date(date), false, ganttProperties.calendarContext);
    }

    function getWidth(start, duration) {
      if (!start || duration == null || duration === 0) return 0;
      const end = new Date(start);
      end.setDate(end.getDate() + duration);
      const leftStart = getLeft(start);
      const leftEnd = getLeft(end);
      return leftEnd - leftStart;
    }

    function render(start, duration, index) {
      if (!start) return '';

      const leftPosition = getLeft(start);
      const width = getWidth(start, duration);

      if (duration === 0) {
        const milestoneSize = renderBaseline ? taskBarHeight : (taskBarHeight - 10);
        const baselineMilestoneHeight = renderBaseline ? 5 : 2;

        const leftPosition_ms = enableRtl
          ? (leftPosition - (milestoneHeight / 2) + 3)
          : (leftPosition - (milestoneHeight / 2) + 1);

        const marginTop =
          (-Math.floor(rowHeight - milestoneMarginTop) + baselineMilestoneHeight) +
          2 +
          (index * baselineSpacing);

        return '<div style="position:absolute;width:' + milestoneSize + 'px;height:' + milestoneSize + 'px;transform:rotate(45deg);' +
          (enableRtl ? 'right:' : 'left:') + leftPosition_ms + 'px;margin-top:' + marginTop + 'px;"></div>';
      }

      return '<div style="position:absolute;' +
        (enableRtl ? 'right:' : 'left:') + leftPosition + 'px;margin-top:' + (baselineTop + (index * taskSpacing)) +
        'px;width:' + width + 'px;height:' + baselineHeight + 'px;"></div>';
    }

    return '<div>' +
      render(taskRecord.taskData.BaselineStartDate, taskRecord.taskData.BaselineDuration, 0) +
      render(taskRecord.taskData.BaselineStartDate1, taskRecord.taskData.BaselineDuration1, 1) +
      render(taskRecord.taskData.BaselineStartDate2, taskRecord.taskData.BaselineDuration2, 2) +
      '</div>';
  }

  return (
    <GanttComponent
      ref={(g) => ganttInstance = g}
      dataSource={baselineTemplateData}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      tooltipSettings={tooltipSettings}
      allowSelection={true}
      renderBaseline={true}
      rowHeight={60}
      taskbarHeight={20}
      gridLines="Both"
      highlightWeekends={true}
      labelSettings={labelSettings}
      baselineColor="red"
      baselineTemplate={baselineTemplate}
      height="450px"
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="ID" textAlign="Left" />
        <ColumnDirective field="TaskName" headerText="Name" width="270" />
        <ColumnDirective field="BaselineStartDate" headerText="Baseline Start Date" width="180" />
        <ColumnDirective field="BaselineDuration" headerText="Baseline Duration" width="180" />
        <ColumnDirective field="BaselineStartDate1" headerText="Baseline1 Start Date" width="180" type="date" format="yMd" />
        <ColumnDirective field="BaselineDuration1" headerText="Baseline1 Duration" width="180" />
        <ColumnDirective field="BaselineStartDate2" headerText="Baseline2 Start Date" width="180" type="date" format="yMd" />
        <ColumnDirective field="BaselineDuration2" headerText="Baseline2 Duration" width="180" />
      </ColumnsDirective>
      <Inject services={[Selection, DayMarkers]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));