import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

class App extends React.Component<{}, {}>{
    constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
    }
    private dialogTemplate(props: KanbanDataModel): JSX.Element {
        return (<KanbanDialogFormTemplate {...props} />);
    }
   render() {
    return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} dialogSettings={{ template: this.dialogTemplate }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" />
                  <ColumnDirective headerText="In Progress" keyField="InProgress" />
                  <ColumnDirective headerText="Testing" keyField="Testing" />
                  <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
            </KanbanComponent>
  }
};
ReactDOM.render(<App />, document.getElementById('kanban'));

export class KanbanDialogFormTemplate extends React.Component<{}, {}> {
    public assigneeData: string[] = [
        'Nancy Davloio', 'Andrew Fuller', 'Janet Leverling',
        'Steven walker', 'Robert King', 'Margaret hamilt', 'Michael Suyama'
    ];
    public statusData: string[] = ['Open', 'InProgress', 'Testing', 'Close'];
    public priorityData: string[] = ['Low', 'Normal', 'Critical', 'Release Breaker', 'High'];
    public tagsHtmlAttributes = { name: "Tags" };
    constructor(props) {
        super(props);
        this.state = extend({}, {}, props, true);
    }

    onChange(args: any): void {
        let key: string = args.target.name;
        let value: string = args.target.value;
        this.setState({ [key]: value });
    }
    render(): any {
        let data: KanbanDataModel = this.state;
        return (<div>
            <table>
                <tbody>
                    <tr>
                        <td className="e-label">ID</td>
                        <td>
                            <div className="e-float-input e-control-wrapper">
                                <input id="Id" name="Id" type="text" className="e-field" value={data.Id} disabled />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="e-label">Status</td>
                        <td>
                            <DropDownListComponent id='Status' name="Status" dataSource={this.statusData} className="e-field" placeholder='Status' value={data.Status}></DropDownListComponent>
                        </td>
                    </tr>
                    <tr>
                        <td className="e-label">Assignee</td>
                        <td>
                            <DropDownListComponent id='Assignee' name="Assignee" className="e-field" dataSource={this.assigneeData} placeholder='Assignee' value={data.Assignee}></DropDownListComponent>
                        </td>
                    </tr>
                    <tr>
                        <td className="e-label">Priority</td>
                        <td>
                            <DropDownListComponent type="text" name="Priority" id="Priority" popupHeight='300px' className="e-field" value={data.Priority} dataSource={this.priorityData} placeholder='Priority'></DropDownListComponent>
                        </td>
                    </tr>
                    <tr>
                        <td className="e-label">Summary</td>
                        <td>
                            <div className="e-float-input e-control-wrapper">
                                <textarea name="Summary" className="e-field" value={data.Summary} onChange={this.onChange.bind(this)}></textarea>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>);
    }
}

export interface KanbanDataModel {
    Id?: string;
    Title?: string;
    Status?: string;
    Summary?: string;
    Type?: string;
    Priority?: string;
    Tags?: string;
    Estimate?: number;
    Assignee?: string;
    RankId?: number;
    Color?: string;
}
