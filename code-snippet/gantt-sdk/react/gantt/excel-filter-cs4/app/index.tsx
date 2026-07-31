import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, SplitterSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function App() {
  const localData: object[] = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
  ];

  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
    dependency: 'Predecessor'
  };

  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
  };

  const filterSettings: FilterSettingsModel = {
    type: 'Excel'
  };

  function actionBegin(args: any): void {
    if (args.requestType === 'filterBeforeOpen') {
      const hostUrl = 'https://ej2services.syncfusion.com/angular/development/api/GanttWebApiRemoteData';
      args.filterModel.options.dataSource.json = new DataManager({
        url: hostUrl,
        adaptor: new WebApiAdaptor(),
        crossDomain: true
      });
    }
  }

  return (
    <GanttComponent
      height="370px"
      allowFiltering={true}
      dataSource={localData}
      taskFields={taskSettings}
      splitterSettings={splitterSettings}
      filterSettings={filterSettings}
      actionBegin={actionBegin}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="120" />
        <ColumnDirective field="TaskName" headerText="Project Activity" width="250" clipMode="EllipsisWithTooltip" />
        <ColumnDirective field="StartDate" headerText="Planned Start Date" width={200} />
        <ColumnDirective field="Duration" headerText="Duration" width={160} />
        <ColumnDirective field="Progress" headerText="Completion (%)" width={200} />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));