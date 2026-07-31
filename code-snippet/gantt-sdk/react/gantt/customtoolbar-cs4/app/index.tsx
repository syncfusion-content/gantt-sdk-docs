
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  Inject,
  Toolbar,
  Selection,
  TaskFieldsModel,
  ToolbarItem
} from '@syncfusion/ej2-react-gantt';

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';

function App() {
  let ganttInstance: GanttComponent | null = null;

  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const toolbar: ToolbarItem[] = [
    { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
    { text: 'Collapse All', tooltipText: 'Collapse All', prefixIcon: 'e-collapse-2', id: 'collapseall', align: 'Right' }
  ];

  const toolbarClick = (args: ClickEventArgs): void => {
    if (args.item.id === 'expandall' && ganttInstance) {
      ganttInstance.expandAll();
    }
    if (args.item.id === 'collapseall' && ganttInstance) {
      ganttInstance.collapseAll();
    }
  };

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      toolbar={toolbar}
      toolbarClick={toolbarClick}
      ref={(gantt) => (ganttInstance = gantt)}
    >
      <Inject services={[Toolbar, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));