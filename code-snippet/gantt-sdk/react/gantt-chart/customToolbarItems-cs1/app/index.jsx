import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, Filter, Selection } from '@syncfusion/ej2-react-gantt';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { data } from './datasource';

function App() {
  let ganttInstance = null;
  let autoInstance = null;

  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const dropDownData = [
    'ClearFilter',
    'Project Kickoff', 'Site Selection', 'Soil Analysis',
    'Approval of Soil Report', 'Cost Estimation',
    'Create Floor Plan', 'Material Listing', 'Approval of Estimate'
  ];

  const onChange = (args) => {
    const selected = args.value;
    if (!ganttInstance) return;

    if (args.itemData) {
      ganttInstance.filterByColumn('TaskName', 'equal', selected);
    } else {
      ganttInstance.clearFiltering();
    }
  };

  return (
    <div>
      <ToolbarComponent>
        <ItemsDirective>
          <ItemDirective
            align="Left"
            template={() => (
              <AutoCompleteComponent
                placeholder="Search TaskName"
                dataSource={dropDownData}
                change={onChange}
                ref={(ac) => (autoInstance = ac)}
              />
            )}
          />
        </ItemsDirective>
      </ToolbarComponent>

      <GanttComponent
        height="430px"
        dataSource={data}
        taskFields={taskSettings}
        allowFiltering={true}
        ref={(g) => (ganttInstance = g)}
      >
        <Inject services={[Toolbar, Filter, Selection]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));