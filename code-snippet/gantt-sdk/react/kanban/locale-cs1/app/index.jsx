import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, L10n } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';
L10n.load({
    'de': {
        'kanban': {
            'items': 'Artikel',
            'min': 'Min',
            'max': 'Max',
            'cardsSelected': 'Karten ausgewählt',
            'addTitle': 'Neue Karte hinzufügen',
            'editTitle': 'Kartendetails bearbeiten',
            'deleteTitle': 'Karte löschen',
            'deleteContent': 'Möchten Sie diese Karte wirklich löschen?',
            'save': 'speichern',
            'delete': 'Löschen',
            'cancel': 'Stornieren',
            'yes': 'Ja',
            'no': 'Nein',
            'close': 'Schließen',
            'noCard': 'Keine Karten zum Anzeigen',
            'unassigned': 'nicht zugewiesen'
        }
    }
});
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
    }
    render() {
        return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} locale='de' cardSettings={{ contentField: "Summary", headerField: "Id" }} swimlaneSettings={{ keyField: "Assignee" }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" minCount={6}/>
                  <ColumnDirective headerText="In Progress" keyField="InProgress" maxCount={3}/>
                  <ColumnDirective headerText="Done" keyField="Close"/>
                </ColumnsDirective>
            </KanbanComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));