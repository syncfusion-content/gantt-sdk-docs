---
layout: post
title: React Gantt getting started with Preact | Syncfusion
description: Learn how to integrate and use the React Gantt Chart component in Preact applications with minimal setup and configuration.
control: Preact
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting Started with Preact

This guide shows how to integrate the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component into a Preact application. For detailed component concepts and features, see the [main Getting Started guide](./getting-started).

## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/en) (v14.0 or later)
- npm or yarn package manager
- Basic knowledge of Preact and React

## Create a Preact application

Create a new Preact application using the following commands:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm init preact@latest my-gantt-app
cd my-gantt-app

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create preact my-gantt-app
cd my-gantt-app

{% endhighlight %}
{% endtabs %}

During project creation, the CLI prompts for several configuration options. Choose the options based on project requirements:

- **Project language**: JavaScript or TypeScript (based on your preference)
- **Use router?**: Select "Yes" for multi-page applications, otherwise select "No"
- **Prerender app (SSG)?**: Select "Yes" for static site generation, otherwise select "No" for a standard setup
- **Use ESLint?**: Select "Yes" for code quality checks or "No" for a minimal setup

> Note: A minimal configuration (without router, pre-rendering, and ESLint) is used in this documentation for simplicity.

After completing the prompts, the CLI automatically sets up the project and installs the required dependencies.

## Install the Gantt Chart package

Install the React Gantt Chart component:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-gantt

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-gantt

{% endhighlight %}
{% endtabs %}

## Add theme styles

Import the basic Gantt Chart styles in `src/style.css`:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

> **Note:** When using features like editing, toolbar, filtering, or dialogs, you need to import additional component styles:
> ```css
> /* For editing, toolbar, and dialog features */
> @import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
> 
> /* For rich text editor in dialog notes tab */
> @import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
> ```

## Create sample task data

Define a simple task list with hierarchical relationships. Each task must have a `StartDate` and either a `Duration` or `EndDate` to render properly.

```javascript
const taskData = [
  {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
  {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 70, ParentID: 1},
  {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 50, ParentID: 1},
  {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, Progress: 40, ParentID: 1},
  {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-08'), EndDate: new Date('2024-04-18')},
  {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-08'), Duration: 5, Progress: 30, ParentID: 5},
  {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-08'), Duration: 5, Progress: 20, ParentID: 5}
];
```

## Configure task fields mapping

Map your data fields to Gantt Chart properties using `taskFields`:

```javascript
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  parentID: 'ParentID'
};
```

### Field mapping reference

| Property | Description | Required |
|----------|-------------|----------|
| `id` | Unique task identifier | Yes |
| `name` | Task display name | Yes |
| `startDate` | Task start date | Yes |
| `duration` | Task duration in days | Yes |
| `progress` | Task completion percentage (0-100) | No |
| `parentID` | Parent task ID for hierarchy | No |

## Render the Gantt component

Put it all together in `src/index.jsx`:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}

import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { render } from 'preact';
import './style.css';

function App() {
  const taskData = [
    {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
    {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 70, ParentID: 1},
    {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 50, ParentID: 1},
    {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, Progress: 40, ParentID: 1},
    {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-08'), EndDate: new Date('2024-04-18')},
    {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-08'), Duration: 5, Progress: 30, ParentID: 5},
    {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-08'), Duration: 5, Progress: 20, ParentID: 5}
  ];

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  return (
    <GanttComponent dataSource={taskData} taskFields={taskFields} height="450px" />
  );
}

render(<App />, document.getElementById('app'));

{% endhighlight %}
{% endtabs %}

## Run the application

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

Access the running application through your configured development URL.

## Output

You will see a Gantt Chart with:

- Task hierarchy with parent-child relationships
- Timeline view showing task bars
- Progress indicators on each task
- Automatically calculated dates based on duration

The chart displays one parent task ("Project initiation") with three subtasks shown in a tree structure. Task bars are rendered on the timeline, sized according to their duration and start dates.

## Next Steps

- **[Key Elements](./key-elements)** - Learn about UI components and interactions
- **[Feature Modules](./module)** - Enable advanced features with module injection
- **[Overview](./overview)** - Explore all available features
