import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective, StackedHeadersDirective,StackedHeaderDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

class App extends React.Component<{}, {}>{
   constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
    }
  render() {
    return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
                <ColumnsDirective>
                    <ColumnDirective headerText="Open" keyField="Open" />
                    <ColumnDirective headerText="In Progress" keyField="InProgress" />
                    <ColumnDirective headerText="In Review" keyField="Review" />
                    <ColumnDirective headerText="Completed" keyField="Close" />
                </ColumnsDirective>
                <StackedHeadersDirective>
                    <StackedHeaderDirective text='To Do' keyFields='Open'></StackedHeaderDirective>
                    <StackedHeaderDirective text='Development Phase' keyFields='InProgress, Review'></StackedHeaderDirective>
                    <StackedHeaderDirective text='Done' keyFields='Close'></StackedHeaderDirective>
                </StackedHeadersDirective>
            </KanbanComponent>
  }
};
ReactDOM.render(<App />, document.getElementById('kanban'));
