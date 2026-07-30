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
  let message: string = '';

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
    'ExpandAll',
    'CollapseAll',
    { text: 'Test', tooltipText: 'Click', id: 'Click' }
  ];

  const toolbarClick = (args: ClickEventArgs): void => {
    if (!ganttInstance) return;

    if (args.item.id === 'ExpandAll') {
      ganttInstance.expandAll();
    }
    if (args.item.id === 'CollapseAll') {
      ganttInstance.collapseAll();
    }
    if (args.item.id === 'Click') {
      message = 'Custom Toolbar Clicked';
      const msg = document.getElementById('message');
      if (msg) msg.textContent = message;
    }
  };

  return (
    <div>
      <div style={{ marginLeft: '180px', padding: '20px' }}>
        <p id="message" style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          {message}
        </p>
      </div>

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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));