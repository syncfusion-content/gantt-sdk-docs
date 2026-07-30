import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings: any = { columnIndex: 2 };

  function headerTemplate() {
    return (<div style={{ width: "20px", height: "20px" }}>Tasks Name</div>);
  }

  function clickHandler() {
    const ganttObj: any = (document.querySelector('#ganttDefault') as any).ej2_instances[0];
    const saved = JSON.parse(ganttObj.getPersistData());
    const cols = [...ganttObj.ganttColumns];

    saved.columns.forEach((col: any) => {
      const match = cols.find((c: any) => c.field === col.field);
      if (match) {
        col.headerText = 'Text Changed';
        col.template = match.template;
        col.headerTemplate = match.headerTemplate;
      }
    });

    ganttObj.treeGrid.setProperties(saved);
  }

  return (
    <div>
      <ButtonComponent id="restore" style={{ marginBottom: "20px" }} onClick={clickHandler}>
        Restore
      </ButtonComponent>
      <GanttComponent
        id="ganttDefault"
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        enablePersistence={true}
        splitterSettings={splitterSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="90" textAlign="Right" />
          <ColumnDirective field="TaskName" width="290" headerTemplate={headerTemplate} />
          <ColumnDirective field="StartDate" width="390" textAlign="Right" format="yMd" />
          <ColumnDirective field="Duration" width="120" textAlign="Right" />
          <ColumnDirective field="Progress" width="120" textAlign="Right" />
        </ColumnsDirective>
      </GanttComponent>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));