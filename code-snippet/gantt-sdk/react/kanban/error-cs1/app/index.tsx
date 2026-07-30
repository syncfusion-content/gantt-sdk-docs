import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective, DialogEventArgs, ActionEventArgs } from "@syncfusion/ej2-react-kanban";

class App extends React.Component<{}, {}>{
    private kanban: KanbanComponent;
    public data = new DataManager({
        url: 'http://some.com/invalidUrl'
    });
    render() {
       this.onActionFailure = this.onActionFailure.bind(this);
       return <KanbanComponent ref={kanban => this.kanban = kanban} id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} actionFailure={this.onActionFailure}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" />
                  <ColumnDirective headerText="In Progress" keyField="InProgress" />
                  <ColumnDirective headerText="Testing" keyField="Testing" />
                  <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
            </KanbanComponent>
    }
    public onActionFailure = (e: ActionEventArgs) => {
        const span: HTMLElement = document.createElement('span');
        if (this.kanban) {
            (this.kanban.element.parentNode as HTMLElement).insertBefore(span, this.kanban.element);
            span.style.color = "#FF0000";
            span.innerHTML = "Server exception: 404 Not found";
        }
    }
};
ReactDOM.render(<App />, document.getElementById('kanban'));
