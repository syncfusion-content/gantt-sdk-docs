import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection,TaskFieldsModel, SplitterSettingsModel, } from '@syncfusion/ej2-react-gantt';
import { ColorPickerComponent, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import { data } from './datasource';

function App() {
  let ganttInstance: GanttComponent;

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

  const modeSettings = 'Palette';

  const changeColor = (args: ColorPickerEventArgs) => {
    const selectedRows = ganttInstance.treeGrid.getSelectedRows() as HTMLElement[];
    for (const row of selectedRows) {
      row.style.backgroundColor = args.value as string;
    }
    ganttInstance.clearSelection();
  };

  const colorPickerTemplate = () => {
    return (
      <div className="colorpicker">
        <ColorPickerComponent
          id="color-picker"
          mode={modeSettings}
          change={changeColor}
        />
      </div>
    );
  };

  return (
    <GanttComponent
      ref={(gantt) => (ganttInstance = gantt!)}
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      treeColumnIndex={1}
      height="430px"
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="90" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="290" />
        <ColumnDirective field="Change" headerText="Change Color" width="120" textAlign="Center" template={colorPickerTemplate} />
        <ColumnDirective field="Duration" headerText="Duration" width="90" />
        <ColumnDirective field="Progress" headerText="Progress" width="120" />
      </ColumnsDirective>
      <Inject services={[Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
