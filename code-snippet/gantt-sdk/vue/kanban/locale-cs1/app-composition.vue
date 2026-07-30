<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :swimlaneSettings="swimlaneSettings" locale='de'>
          <e-columns>
            <e-column headerText="To Do" keyField="Open" minCount= "6"></e-column>
            <e-column headerText="In Progress" keyField="InProgress" maxCount= "3"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
</template>

<script setup>

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
import { extend, L10n } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';

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

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Summary",
  headerField: "Id",
};
const swimlaneSettings = {
  keyField: "Assignee"
};

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/tailwind3.css';
</style>