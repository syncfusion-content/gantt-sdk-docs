
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { extend } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';
Vue.use(KanbanPlugin);

let BUG_TASKS = [
  'UI component not displaying images in IE browser',
  'Button not responding on hover action',
  'Text overlapping in mobile view',
  'Dropdown menu not functioning properly',
  'Form validation error',
  'Alignment issue in tables',
  'Column not loading completely',
  'Broken UI Designs',
  'Font size inconsistency',
  'UI element misaligned on scroll'
];
let FEATURE_TASKS = [
  'Implement new user registration flow',
  'Add pagination to search results',
  'Improve accessibility for visually impaired users',
  'Create custom dashboard for users',
  'Develop user profile editing functionality',
  'Integrate with third-party API for weather data',
  'Implement social media sharing for articles',
  'Add support for multiple languages',
  'Create onboarding tutorial for new users',
  'Implement push notifications for mobile app'
];
let EPIC_TASKS = [
  'Revamp UI design for entire application',
  'Develop mobile application for iOS and Android',
  'Create API for integration with external systems',
  'Implement machine learning algorithms for personalized recommendations',
  'Upgrade database infrastructure for scalability',
  'Integrate with payment gateway for subscription model',
  'Develop chatbot for customer support',
  'Implement real-time collaboration features for team projects',
  'Create analytics dashboard for administrators',
  'Introduce gamification elements to increase user engagement',
];
let assignee = ['Andrew Fuller', 'Janet Leverling', 'Steven walker', 'Robert King', 'Margaret hamilt', 'Nancy Davloio', 'Margaret Buchanan', 'Laura Bergs', 'Anton Fleet', 'Jack Kathryn', 'Martin Davolio', 'Fleet Jack'];
let status = ['Open', 'InProgress', 'Review', 'Testing', 'Close'];
let priority = ['Ultra-Critical', 'Critical', 'High', 'Normal', 'Low'];
let types = ['Epic', 'Bug', 'Story'];
let tagsField = ['Feature', 'Bug', 'Enhancement', 'Documentation', 'Automation', 'Mobile', 'Web', 'iOS', 'Safari', 'Chrome', 'Firefox', 'Manual Testing'];
let storyPoints = ['1', '2', '3', '3.5', '4', '4.5', '5', '6', '7.5', '8'];
let count = 60000;
let generateKanbanDataVirtualScrollData = () => {
  let kanbanVirtualData = [];
  for (let a = 50000, id = 50000; a < count; a++) {
      let typeValue = types[Math.floor(Math.random() * types.length)];
      let summary = typeValue === 'Bug' ? BUG_TASKS[Math.floor(Math.random() * BUG_TASKS.length)] :
          typeValue === 'Story' ? FEATURE_TASKS[Math.floor(Math.random() * FEATURE_TASKS.length)] :
              EPIC_TASKS[Math.floor(Math.random() * EPIC_TASKS.length)];
      kanbanVirtualData.push({
          Id: id,
          Type: typeValue,
          Priority: priority[Math.floor(Math.random() * priority.length)],
          Status: status[Math.floor(Math.random() * status.length)],
          Assignee: assignee[Math.floor(Math.random() * assignee.length)],
          StoryPoints: storyPoints[Math.floor(Math.random() * storyPoints.length)],
          Tags: [tagsField[Math.floor(Math.random() * tagsField.length)], tagsField[Math.floor(Math.random() * tagsField.length)]],
          Title: 'Task ' + id,
          Summary: summary,
      });
      id++;
  }
  return kanbanVirtualData;
}

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-kanban id="KanbanVirtualScrolling" :enableVirtualization="true" keyField="Status"
      :dataSource="kanbanData" :enableTooltip="enableTooltip" :cardSettings="cardSettings" :dialogSettings="dialogSettings">
        <e-columns>
            <e-column headerText="To Do" keyField="Open" ></e-column>
            <e-column headerText="In Progress" keyField="InProgress" ></e-column>
            <e-column headerText="In Review" keyField="Review" ></e-column>
            <e-column headerText="Done" keyField="Close" ></e-column>
        </e-columns>
      </ejs-kanban>
    </div>`,

  data: function () {
    return {
      kanbanData: extend([], generateKanbanDataVirtualScrollData(), null, true),
      enableTooltip: true,
      cardSettings: {
          headerField: "Id",
          contentField: "Summary",
          selectionType: "Multiple"
      },
      dialogSettings: {
          fields: [
              {key: 'Id', text: 'ID', type: 'TextBox'},
              {key: 'Status', text: 'Status', type: 'DropDown'},
              {key: 'StoryPoints', text: 'Story Points', type: 'Numeric' },
              {key: 'Summary', text: 'Summary', type: 'TextArea'}
          ]
      }
    };
  }

});