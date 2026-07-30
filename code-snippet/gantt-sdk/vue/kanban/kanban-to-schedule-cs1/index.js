
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { extend, closest } from '@syncfusion/ej2-base';
import { kanbanData, scheduleData } from './datasource.js';
Vue.use(KanbanPlugin);
import { SchedulePlugin, TimelineViews, TimelineMonth, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
Vue.use(SchedulePlugin);

var resourceHeaderVue = Vue.component("resource-headerTemplate", {
      template: '<div className="template-wrap"><div class="specialist-category"><div v-if=getConsultantImageName(data)></div><div class="specialist-name">' +
                '{{getConsultantName(data)}}</div><div class="specialist-designation">{{getConsultantDesignation(data)}}</div></div></div>',
      data() {
          return {
              data: {}
          };
      },
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


new Vue({
	el: '#app',
	template: `
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
`,

  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Name",
        headerField: "Id"
      },
      externalKanbanDropId: ['#schedule'],
      eventSettings: {
          dataSource: extend([], scheduleData, null, true),
          fields: {
              subject: { title: 'Patient Name', name: 'Name' },
              startTime: { title: "From", name: "StartTime" },
              endTime: { title: "To", name: "EndTime" },
              description: { title: 'Reason', name: 'Description' }
          },
      },
      selectedDate: new Date(2018, 7, 1),
      currentView: 'TimelineDay',
      cssClass: 'schedule-drag-drop',
      group: {
          enableCompactView: false,
          resources: ['Departments', 'Consultants']
      },
      departmentDataSource: [
          { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
          { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
      ],
      consultantDataSource: [
          { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
          { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
          { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
          { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
          { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
          { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
      ],
      resourceHeaderTemplate: function (e) {
          return { template: resourceHeaderVue }
      }
    };
  },
  methods: {
     kanbanDragStop: function (args) {
        let scheduleElement: Element = closest(args.event.target as Element, '#schedule');
        let kanbanObj = this.$refs.kanbanObj.ej2Instances;
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        if (scheduleElement) {
            kanbanObj.deleteCard(args.data);
            scheduleObj.openEditor(args.data[0], 'Add', true);
            args.cancel = true;
        }
      },
      onItemDragStop: function (args) {
        let kanbanElement: Element = closest(args.event.target as Element, '#kanban');
        let kanbanObj = this.$refs.kanbanObj.ej2Instances;
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        if (kanbanElement) {
            scheduleObj.deleteEvent(args.data.Id);
             removeClass([scheduleObj.element.querySelector('.e-selected-cell')], 'e-selected-cell');
             kanbanObj.openDialog('Add', args.data);
             args.cancel = true;
        }
      }
   },
   provide: {
      schedule: [TimelineViews, TimelineMonth, Resize, DragAndDrop]
   }

});