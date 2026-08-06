import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, SelectionSettingsModel, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

let ganttInstance = null;
let selectedRecords= [];

function renderApp() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const selectionSettings = {
    mode: 'Row',
    type: 'Multiple'
  };

  function getSelectedRowInfo() {
    if (!ganttInstance) return;
    selectedRecords = ganttInstance.selectionModule.getSelectedRecords();
    const selectedRows = ganttInstance.selectionModule.getSelectedRows();
    selectedRows.forEach(row => row.classList.add('custom-selected-row'));
    renderApp();
  }

  const App = () => (
    <div>
      <div className="button-container">
        <ButtonComponent cssClass="action-button" onClick={getSelectedRowInfo}>
          Show Selected Tasks
        </ButtonComponent>
      </div>

      <div className="table-container">
        {selectedRecords.length > 0 && (
          <table className="task-table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Task Details</th>
              </tr>
            </thead>
            <tbody>
              {selectedRecords.map((record, i) => (
                <tr key={record.TaskID} className={i % 2 !== 0 ? 'alternate-row' : 'selected-row'}>
                  <td>{i + 1}</td>
                  <td>
                    <div><strong>Task ID:</strong> {record.TaskID}</div>
                    <div><strong>Task Name:</strong> {record.TaskName}</div>
                    <div><strong>Start Date:</strong> {record.StartDate && record.StartDate.toDateString()}</div>
                    <div><strong>Duration:</strong> {record.Duration}</div>
                    <div><strong>Progress:</strong> {record.Progress}%</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <GanttComponent
        ref={(g) => (ganttInstance = g)}
        dataSource={data}
        taskFields={taskFields}
        selectionSettings={selectionSettings}
        height="430px"
      >
        <Inject services={[Selection]} />
      </GanttComponent>
    </div>
  );

  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();