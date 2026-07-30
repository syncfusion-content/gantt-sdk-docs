<template>
  <div id="app">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6" style="width: 30%">
        <h4>Kanban</h4>
       <ejs-kanban id="kanban" ref="kanbanObj" keyField="DepartmentName" :dataSource="kanbanData"
        :cardSettings="cardSettings" :externalDropId='externalKanbanDropId' :dragStop="kanbanDragStop">
          <e-columns>
            <e-column headerText="GENERAL" keyField="GENERAL"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      <div class="col-sm-6"  style="width: 70%">
        <h4>TreeView</h4>
          <ejs-schedule id='schedule' ref="scheduleObj" height="650px" :cssClass='cssClass' :selectedDate='selectedDate' :eventSettings='eventSettings'
                  :group='group' :currentView='currentView' :resourceHeaderTemplate='resourceHeaderTemplate' :dragStop="onItemDragStop">
                  <e-views>
                      <e-view option="TimelineDay"></e-view>
                      <e-view option="TimelineMonth"></e-view>
                  </e-views>
                  <e-resources>
                      <e-resource field='DepartmentID' title='Department' name='Departments' :dataSource='departmentDataSource'
                          textField='Text' idField='Id' colorField='Color'>
                      </e-resource>
                      <e-resource field='ConsultantID' title='Consultant' name='Consultants' :dataSource='consultantDataSource'
                          textField='Text' idField='Id' groupIDField='GroupId' colorField='Color'>
                      </e-resource>
                  </e-resources>
              </ejs-schedule>
        </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { provide, createApp } from "vue";
import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
import { extend, closest } from '@syncfusion/ej2-base';
import { kanbanData, scheduleData } from './datasource.js';

import { ScheduleComponent as EjsSchedule, TimelineViews, TimelineMonth, Resize, DragAndDrop, ViewDirective as EView, ViewsDirective as EViews, ResourceDirective as EResource, ResourcesDirective as EResources } from "@syncfusion/ej2-vue-schedule";

const kanbanObj = ref(null);
const scheduleObj = ref(null);
const app = createApp({});
var resourceHeaderVue = app.component("resource-headerTemplate", {
  data: () => ({}),
  template: '<div className="template-wrap"><div class="specialist-category"><div v-if=getConsultantImageName(data)></div><div class="specialist-name">' +
                '{{getConsultantName(data)}}</div><div class="specialist-designation">{{getConsultantDesignation(data)}}</div></div></div>',
      methods: {
          getConsultantName: function (data) {
              let value = JSON.parse(JSON.stringify(data));
              return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
          },
          getConsultantImageName: function (data) {
              let value = JSON.parse(JSON.stringify(data));
              let resourceName = (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
              if (resourceName === 'GENERAL' || resourceName === 'DENTAL') {
                  return false;
              } else {
                  return true;
              }
          },
          getConsultantDesignation: function (data) {
              let value = JSON.parse(JSON.stringify(data));
              var resourceName = value.resourceData[value.resource.textField];
              if (resourceName === "GENERAL" || resourceName === "DENTAL") {
                  return '';
              } else {
                  return value.resourceData.Designation;
              }
          }
      }
});

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Name",
  headerField: "Id"
};
const externalKanbanDropId = ['#schedule'];
const eventSettings = {
    dataSource: extend([], scheduleData, null, true),
    fields: {
        subject: { title: 'Patient Name', name: 'Name' },
        startTime: { title: "From", name: "StartTime" },
        endTime: { title: "To", name: "EndTime" },
        description: { title: 'Reason', name: 'Description' }
    },
};
const selectedDate = new Date(2018, 7, 1);
const currentView = 'TimelineDay';
const cssClass = 'schedule-drag-drop';
const group = {
    enableCompactView: false,
    resources: ['Departments', 'Consultants']
};
const departmentDataSource = [
    { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
    { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
];
const consultantDataSource = [
    { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
    { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
    { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
    { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
    { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
    { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
];
const resourceHeaderTemplate = function () {
    return { template: resourceHeaderVue }
};
const kanbanDragStop = function (args) {
    let scheduleElement = closest(args.event.target, '#schedule');
    let kanbanObj = kanbanObj.value.ej2Instances;
    let scheduleObj = scheduleObj.value.ej2Instances;
    if (scheduleElement) {
        kanbanObj.deleteCard(args.data);
        scheduleObj.openEditor(args.data[0], 'Add', true);
        args.cancel = true;
    }
};
const onItemDragStop = function (args) {
    let kanbanElement = closest(args.event.target, '#kanban');
    let kanbanObj = kanbanObj.value.ej2Instances;
    let scheduleObj = scheduleObj.value.ej2Instances;
    if (kanbanElement) {
        scheduleObj.deleteEvent(args.data.Id);
         removeClass([scheduleObj.element.querySelector('.e-selected-cell')], 'e-selected-cell');
         kanbanObj.openDialog('Add', args.data);
         args.cancel = true;
    }
};

provide('schedule',  [TimelineViews, TimelineMonth, Resize, DragAndDrop]);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-excel-export/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-file-utils/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-schedule/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-compression/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/tailwind3.css';
.row {
  display: flex;
}
</style>