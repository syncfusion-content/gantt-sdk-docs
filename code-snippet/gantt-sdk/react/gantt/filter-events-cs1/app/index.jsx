import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {

  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    columnIndex: 2
  };

  const filterSettings = {
    type: 'Menu'
  };

  const columns = [
    { field: 'TaskID', headerText: 'Task ID', width: '120' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
    { field: 'Approved', headerText: 'Approved', width: '100', type: 'boolean' }
  ];

  const updateMessage = (text) => {
    const msgElement = document.getElementById('message');
    if (msgElement) msgElement.textContent = text;
  };

  function actionBegin(args) {
    let msg = '';

    if (args.requestType === "filterBeforeOpen") {
      if (args.columnType === 'number') {
        args.filterModel.customFilterOperators.numberOperator = [
          { value: 'equal', text: 'Equal' },
          { value: 'notequal', text: 'Not Equal' }
        ];
        msg = 'Custom number filter operators applied.';
      }
      else if (args.columnType === 'string') {
        args.filterModel.customFilterOperators.stringOperator = [
          { value: 'contains', text: 'Contains' },
          { value: 'startswith', text: 'Starts With' }
        ];
        msg = 'Custom string filter operators applied.';
      }
    }

    if (args.requestType === 'filtering' &&
      args.currentFilteringColumn === 'StartDate') {

      args.cancel = true;
      msg = 'Filtering is not allowed for StartDate column';

    } else {
      msg = args.requestType + ' action is triggered in actionBegin';
    }

    updateMessage(msg);
  }

  function actionComplete(args) {
    let msg = '';

    if (args.requestType === "filterAfterOpen") {
      msg = 'Applied custom CSS for filter dialog';

      const content = args.filterModel.dlgDiv.querySelector('.e-dlg-content');
      const footer = args.filterModel.dlgDiv.querySelector('.e-footer-content');

      if (content) content.style.background = '#eeeaea';
      if (footer) footer.style.background = '#30b0ce';
    }

    if (args.requestType === 'filtering') {
      msg = args.requestType + ' action is triggered in actionComplete';
    }

    updateMessage(msg);
  }

  return (
    <div>
      <p style={{ color: 'red', textAlign: 'center' }} id="message"></p>
      <GanttComponent
        height="370px"
        allowFiltering={true}
        dataSource={data}
        taskFields={taskSettings}
        columns={columns}
        splitterSettings={splitterSettings}
        filterSettings={filterSettings}
        actionBegin={actionBegin}
        actionComplete={actionComplete}
      >
        <Inject services={[Filter]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));