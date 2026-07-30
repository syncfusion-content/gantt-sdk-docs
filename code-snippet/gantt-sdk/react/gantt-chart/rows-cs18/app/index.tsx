import * as React from 'react'; import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection, TaskFieldsModel, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { Tooltip } from '@syncfusion/ej2-popups';
import { ganttData } from './datasource';

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
    position: '50%'
  };
  let message: string = '';
  const dataBound = () => {
    const ganttElement = (gantt as GanttComponent).element as HTMLElement;
    ganttElement.addEventListener('mouseover', (mouseargs: MouseEvent) => {
      let target: any;
      if (
        mouseargs.target &&
        ((mouseargs.target as HTMLElement).classList.contains('e-rowcell') ||
          (mouseargs.target as HTMLElement).classList.contains('e-chart-row-cell'))
      ) {
        target = mouseargs.target as HTMLElement;
      }
      if (target) {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Row details';
        buttonElement.style.color = '#000';
        buttonElement.style.backgroundColor = '#fff';

        new Tooltip({
          content: buttonElement,
          width: '100px',
          height: '40px',
          opensOn: 'Hover'
        }, target);
        buttonElement.addEventListener('click', () => {
          const rowElement = target.closest('.e-row') || target.closest('.e-chart-row');
          if (rowElement) {
            const rowIndex = rowElement.getAttribute('aria-rowindex');
            if (rowIndex !== null && gantt) {
              const rowInfo = gantt.treeGrid.getRowInfo(target);
              const rowData = rowInfo.rowData as any;
              if (rowData) {
                message = `Button clicked for Task ID: ${rowData['TaskID']}`;
                const msgEle = document.getElementById('message');
                if (msgEle) {
                  msgEle.textContent = message;
                }
              }
            }
          }
        });
      }
    });
  };

  return (
    <div>
      <div style={{ padding: '0 0 20px 0' }}></div>
      <p id="message"></p>
      <GanttComponent
        ref={(g: GanttComponent) => (gantt = g)}
        id="ganttDefault"
        height="430px"
        dataSource={ganttData}
        taskFields={taskFields}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        dataBound={dataBound}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
        </ColumnsDirective>
        <Inject services={[Selection]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));