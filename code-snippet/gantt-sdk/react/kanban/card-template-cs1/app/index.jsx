import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
    }
    cardTemplate(props) {
        return (<div className="card-template">
                    <div className='e-card-content'>
                        <table className="card-template-wrap">
                            <tbody>
                                <tr>
                                    <td className="CardHeader">Id:</td>
                                    <td>{props.Id}</td>
                                </tr>
                                <tr>
                                    <td className="CardHeader">Type:</td>
                                    <td>{props.Type}</td>
                                </tr>
                                <tr>
                                    <td className="CardHeader">Priority:</td>
                                    <td>{props.Priority}</td>
                                </tr>
                                <tr>
                                    <td className="CardHeader">Summary:</td>
                                    <td>{props.Summary}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>);
    }
    render() {
        return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ headerField: "Id", template: this.cardTemplate.bind(this) }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open"/>
                  <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                  <ColumnDirective headerText="Done" keyField="Close"/>
                </ColumnsDirective>
            </KanbanComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));