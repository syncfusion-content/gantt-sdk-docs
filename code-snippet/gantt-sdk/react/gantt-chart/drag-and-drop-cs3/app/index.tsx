
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Toolbar,
  Edit,
  RowDD
} from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';
import { RowDragEventArgs } from '@syncfusion/ej2-react-grids';

function App () {
  let ganttRef: GanttComponent | null = null;

  // DataManager for remote data
  const data = new DataManager({
    url: 'https://localhost:7283/Home/UrlDatasource',
    adaptor: new UrlAdaptor(),
    offline: true
  });

  // Task field mapping
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    child: 'subtasks',
    parentID: 'ParentId'
  };

  // Toolbar and edit settings
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const splitterSettings = { position: '75%' };

  // Row drop event
  const rowDrop = (args: RowDragEventArgs): void => {
    const dragId = args.data[0][(ganttRef as GanttComponent).taskFields.id];
    const dropId = args.dropRecord[(ganttRef as GanttComponent).taskFields.id];
    const dataItem = args.data[0];
    const positions = { dragidMapping: dragId, dropidMapping: dropId, position: args.dropPosition };

    const ajax = new Ajax({
      url: 'https://localhost:7283/Home/DragandDrop',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({ value: dataItem, pos: positions })
    });

    ganttRef.showSpinner();
    ajax.send();
    ajax.onSuccess = () => {
      ganttRef.hideSpinner();
    };
  };

  return (
    <div>
      <GanttComponent
        ref={(gantt) => (ganttRef = gantt)}
        dataSource={data}
        treeColumnIndex={1}
        rowDrop={rowDrop}
        taskFields={taskSettings}
        splitterSettings={splitterSettings}
        allowRowDragAndDrop={true}
        editSettings={editSettings}
        toolbar={toolbar}
        height="450px"
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" isPrimaryKey={true} width="150" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
          <ColumnDirective field="Duration" headerText="Duration" width="150" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit, RowDD]} />
      </GanttComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));