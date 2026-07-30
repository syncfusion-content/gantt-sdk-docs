{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
class App extends React.Component {
    constructor() {
        super(...arguments);
    }
    generateKanbanDataVirtualScrollData() {
        var kanbanData = [];
        var BUG_TASKS = [
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
        var FEATURE_TASKS = [
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
        var EPIC_TASKS = [
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
        var assignee = ['Andrew Fuller', 'Janet Leverling', 'Steven walker', 'Robert King', 'Margaret hamilt', 'Nancy Davloio', 'Margaret Buchanan', 'Laura Bergs', 'Anton Fleet', 'Jack Kathryn', 'Martin Davolio', 'Fleet Jack'];
        var status = ['Open', 'InProgress', 'Review', 'Testing', 'Close'];
        var priority = ['Ultra-Critical', 'Critical', 'High', 'Normal', 'Low'];
        var types = ['Epic', 'Bug', 'Story'];
        var tagsField = ['Feature', 'Bug', 'Enhancement', 'Documentation', 'Automation', 'Mobile', 'Web', 'iOS', 'Safari', 'Chrome', 'Firefox', 'Manual Testing'];
        var storyPoints = ['1', '2', '3', '3.5', '4', '4.5', '5', '6', '7.5', '8'];
        var count = 600000;
        for (let a = 500000, id = 500000; a < count; a++) {
            var typeValue = types[Math.floor(Math.random() * types.length)];
            var summary = typeValue === 'Bug' ? BUG_TASKS[Math.floor(Math.random() * BUG_TASKS.length)] :
                typeValue === 'Story' ? FEATURE_TASKS[Math.floor(Math.random() * FEATURE_TASKS.length)] :
                    EPIC_TASKS[Math.floor(Math.random() * EPIC_TASKS.length)];
            kanbanData.push({
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
        return kanbanData;
    }
    render() {
        return <KanbanComponent id="KanbanVirtualScrolling" enableVirtualization={true} keyField="Status" dataSource={this.generateKanbanDataVirtualScrollData()} enableTooltip={true}
            cardSettings={{ headerField: "Id", contentField: "Summary", selectionType: 'Multiple' }}
            dialogSettings={{
                fields: [
                    { key: 'Id', text: 'ID', type: 'TextBox' },
                    { key: 'Status', text: 'Status', type: 'DropDown' },
                    { key: 'StoryPoints', text: 'Story Points', type: 'Numeric' },
                    { key: 'Summary', text: 'Summary', type: 'TextArea' }
                ]
            }} >
            <ColumnsDirective>
                <ColumnDirective headerText="To Do" keyField="Open" />
                <ColumnDirective headerText="In Progress" keyField="InProgress" />
                <ColumnDirective headerText="Code Review" keyField="Review" />
                <ColumnDirective headerText="Done" keyField="Close" />
            </ColumnsDirective>
        </KanbanComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));
{% endraw %}