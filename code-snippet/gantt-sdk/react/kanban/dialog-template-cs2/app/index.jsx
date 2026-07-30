import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
function App() {
    let data = extend([], kanbanData, null, true);
    let kanbanObj;
    function dialogTemplate(props) {
        return (<KanbanDialogFormTemplate {...props}/>);
    }
    return (<KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} dialogSettings={{ template: dialogTemplate.bind(this) }}>
        <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="Open"/>
            <ColumnDirective headerText="In Progress" keyField="InProgress"/>
            <ColumnDirective headerText="Testing" keyField="Testing"/>
            <ColumnDirective headerText="Done" keyField="Close"/>
        </ColumnsDirective>
    </KanbanComponent>);
}
function KanbanDialogFormTemplate(props) {
    let assigneeData = [
        'Nancy Davloio', 'Andrew Fuller', 'Janet Leverling',
        'Steven walker', 'Robert King', 'Margaret hamilt', 'Michael Suyama'
    ];
    let statusData = ['Open', 'InProgress', 'Testing', 'Close'];
    let priorityData = ['Low', 'Normal', 'Critical', 'Release Breaker', 'High'];
    let tagsHtmlAttributes = { name: "Tags" };
    const [state, setState] = React.useState(extend({}, {}, props, true));
    function onChange(args) {
        let key = args.target.name;
        let value = args.target.value;
        setState({ [key]: value });
    }
    let data = state;
    return (<div>
          <table>
              <tbody>
                  <tr>
                      <td className="e-label">ID</td>
                      <td>
                          <div className="e-float-input e-control-wrapper">
                              <input id="Id" name="Id" type="text" className="e-field" value={data.Id} disabled/>
                          </div>
                      </td>
                  </tr>
                  <tr>
                      <td className="e-label">Status</td>
                      <td>
                          <DropDownListComponent id='Status' name="Status" dataSource={statusData} className="e-field" placeholder='Status' value={data.Status}></DropDownListComponent>
                      </td>
                  </tr>
                  <tr>
                      <td className="e-label">Assignee</td>
                      <td>
                          <DropDownListComponent id='Assignee' name="Assignee" className="e-field" dataSource={assigneeData} placeholder='Assignee' value={data.Assignee}></DropDownListComponent>
                      </td>
                  </tr>
                  <tr>
                      <td className="e-label">Priority</td>
                      <td>
                          <DropDownListComponent type="text" name="Priority" id="Priority" popupHeight='300px' className="e-field" value={data.Priority} dataSource={priorityData} placeholder='Priority'></DropDownListComponent>
                      </td>
                  </tr>
                  <tr>
                      <td className="e-label">Summary</td>
                      <td>
                          <div className="e-float-input e-control-wrapper">
                              <textarea name="Summary" className="e-field" value={data.Summary} onChange={onChange.bind(this)}></textarea>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('kanban'));