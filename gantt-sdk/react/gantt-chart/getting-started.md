---
layout: post
title: Getting Started With React Gantt Chart Component | Syncfusion
description: Learn how to install and create your first React Gantt Chart component with task scheduling in a few minutes.
control: Getting started
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting Started with React Gantt Chart

This guide walks you through installing and rendering your first [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component. You'll learn how to bind task data, map fields, and display a basic project schedule in just a few minutes.

## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/en) (v14.0 or later)
- npm or yarn package manager
- Basic knowledge of React (v18 or later recommended)

## Installation

Create a new React app using Vite with TypeScript:

```bash
npm create vite@latest my-gantt-app -- --template react-ts
cd my-gantt-app
```

> Use `--template react` for JavaScript instead of TypeScript.

Install the Gantt Chart package:

```bash
npm install @syncfusion/ej2-react-gantt
```

> To install a specific version (for matching an internal version pin), use `npm install @syncfusion/ej2-react-gantt@<version>`. The `ej2-base` and other dependent `@syncfusion/ej2-*` packages are installed transitively.

If you created the app with the JavaScript Vite template instead of TypeScript, use `src/App.jsx` and keep the same component structure with JSX syntax.

## Add theme styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/gantt/index.css";

{% endhighlight %}
{% endtabs %}

## Create sample data

Define a simple task list with hierarchical relationships. Each task must have a `StartDate` and either a `Duration` or `EndDate` to render properly. If both are provided, `EndDate` takes precedence. The `Duration` value is in working days; `EndDate` is an absolute calendar date.

```typescript
const taskData = [
  { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15') },
  { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 70, ParentID: 1 },
  { TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 50, ParentID: 1 },
  { TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, Progress: 40, ParentID: 1 },
  { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, Progress: 30, ParentID: 5 },
  { TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, Progress: 20, ParentID: 5 }
];
```

## Configure task fields

Map your data fields to Gantt Chart properties using `taskFields`:

```typescript
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  endDate: 'EndDate',
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
| `duration` | Task duration in working days (numeric, optional decimal) | No (use `endDate` instead) |
| `endDate` | Task end date | No (use `duration` instead) |
| `progress` | Task completion percentage (0–100) | No |
| `parentID` | Parent task ID for hierarchy | No |
| `dependency` | Predecessor relationships (e.g., `2FS+1d`) | No |
| `hasChildMapping` | Indicates whether a row has child rows (load-on-demand) | No |
| `resourceInfo` | Field name that holds resource data | No |

## Render the Gantt Chart component

Put it all together in `src/App.tsx`. The `taskData` and `taskFields` variables defined earlier are reused here.

```typescript
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import './App.css';

const taskData = [
  { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15') },
  { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 70, ParentID: 1 },
  { TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 50, ParentID: 1 },
  { TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, Progress: 40, ParentID: 1 },
  { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, Progress: 30, ParentID: 5 },
  { TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, Progress: 20, ParentID: 5 }
];

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  endDate: 'EndDate',
  duration: 'Duration',
  progress: 'Progress',
  parentID: 'ParentID'
};

export default function App() {
  return (
    <GanttComponent
      dataSource={taskData}
      taskFields={taskFields}
      height="450px"
    />
  );
}
```

## Run the application

```bash
npm run dev
```

Access the running application through your configured development URL (Vite default: `http://localhost:5173`).

## Output

You will see a Gantt Chart with:

- Task hierarchy with parent-child relationships
- Timeline view showing task bars
- Progress indicators on each task
- Automatically calculated dates based on duration

The chart displays two parent tasks ("Project initiation" and "Project estimation") with their subtasks shown in a tree structure. Task bars are rendered on the timeline, sized according to their duration and start dates.

You can preview the following sample by clicking the **Preview Sample** button.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/run-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/run-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/run-cs1" %}

## Troubleshooting

- **License warning in console:** Register a valid Syncfusion license key using `registerLicense` from `@syncfusion/ej2-base`. You can obtain a key from your [Syncfusion account](https://www.syncfusion.com/account).
- **Styles not applied:** Verify the CSS `@import` paths resolve from `src/`. With Vite, prefer importing CSS in `src/main.tsx` if `@import` inside CSS fails.
- **Peer dependency errors:** Ensure React 18+ is installed (`npm install react@18 react-dom@18`).
- **TypeScript errors on task data:** Define an interface for your task records, e.g. `interface ITask { TaskID: number; TaskName: string; StartDate: Date; Duration?: number; EndDate?: Date; Progress?: number; ParentID?: number; }`.

## Next Steps

- **[Key Elements](./key-elements)** - Learn about UI components and interactions
- **[Feature Modules](./module)** - Enable advanced features with module injection
- **[Overview](./overview)** - Explore all available features
