---
layout: post
title: Getting started with React Kanban Component | Syncfusion
description: Check out and learn about getting started with the React Kanban component from Syncfusion Essential JS 2.
control: Getting started 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting Started with React Kanban Component

This article provides a step-by-step  guide to getting started with the Syncfusion<sup style="font-size:70%">&reg;</sup> React Kanban component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

## Prerequisites

Before you begin, ensure the following tools are installed:

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/en) | 18.x or later (LTS recommended) | Required by Vite and npm |
| [npm](https://www.npmjs.com/) | 9.x or later (bundled with Node.js) | Package manager |

Verify your setup:

```bash
node --version
npm --version
```

## Overview

The Kanban component is composed of:
- **Cards**: tasks displayed on the board; mapped from a `dataSource` via `cardSettings`.
- **Columns**: workflow stages; defined using `keyField` on each `ColumnDirective`.
- **Swimlanes**: optional grouping of cards; configured with `swimlaneSettings`.

> **Note on `keyField`:** The Kanban component's `keyField` property is the name of the field in the data source that categorizes cards (for example, `"Status"`). Each `ColumnDirective` also has its own `keyField` property, which is the *value* the column matches against. A card is rendered in a column when the card's `Status` value equals that column's `keyField`.
>
> The `cardSettings` property defines how each card is displayed. The two main sub-properties are:
> - `headerField` — the data field used for the card header.
> - `contentField` — the data field used for the card body.

## Create the React application

Create a new React application using Vite with TypeScript:

```bash
npm create vite@latest my-kanban-app -- --template react-ts
cd my-kanban-app
```

> Use `--template react` for JavaScript instead of TypeScript.

Install the project's base dependencies before adding Syncfusion packages:

```bash
npm install
```

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

Once you have created the React application, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component package in the application. All Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on the [npmjs](https://www.npmjs.com/~syncfusionorg) public registry.To install the Kanban component package, use the following command.

```bash
npm install @syncfusion/ej2-react-kanban
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Kanban component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/kanban/index.css";

{% endhighlight %}
{% endtabs %}

## Adding the Kanban component

Create a new file named `src/datasource.ts` and define the following data source:

```typescript
export let kanbanData: Object[] = [
  {
    Id: 1, Status: 'Open', Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5,
    Assignee: 'Nancy Davloio', RankId: 1
  },
  {
    Id: 2, Status: 'InProgress', Summary: 'Improve application performance',
    Type: 'Improvement', Priority: 'Normal', Tags: 'Improvement',
    Estimate: 6, Assignee: 'Andrew Fuller', RankId: 1
  },
  {
    Id: 3, Status: 'Open', Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others', Priority: 'Critical', Tags: 'Meeting',
    Estimate: 5.5, Assignee: 'Janet Leverling', RankId: 2
  },
  {
    Id: 4, Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE',
    Estimate: 2.5, Assignee: 'Janet Leverling', RankId: 2
  },
  {
    Id: 5, Status: 'Testing', Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug', Priority: 'Low', Tags: 'Customer',
    Estimate: 3.5, Assignee: 'Steven walker', RankId: 1
  },
  {
    Id: 6, Status: 'Close', Summary: 'Arrange a web meeting with the customer to get the login page requirements.',
    Type: 'Others', Priority: 'Low', Tags: 'Meeting',
    Estimate: 2, Assignee: 'Michael Suyama', RankId: 1
  },
  {
    Id: 7, Status: 'Validate', Summary: 'Validate new requirements',
    Type: 'Improvement', Priority: 'Low', Tags: 'Validation',
    Estimate: 1.5, Assignee: 'Robert King', RankId: 1
  },
  {
    Id: 8, Status: 'Close', Summary: 'Login page validation',
    Type: 'Story', Priority: 'Release Breaker', Tags: 'Validation,Fix',
    Estimate: 2.5, Assignee: 'Laura Callahan', RankId: 2
  },
  {
    Id: 9, Status: 'Testing', Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug', Priority: 'Release Breaker', Tags: 'Fix,Safari',
    Estimate: 1.5, Assignee: 'Nancy Davloio', RankId: 2
  },
  {
    Id: 10, Status: 'Close', Summary: 'Test the application in the IE browser.',
    Type: 'Story', Priority: 'Low', Tags: 'Testing,IE',
    Estimate: 5.5, Assignee: 'Margaret hamilt', RankId: 3
  },
  {
    Id: 11, Status: 'Validate', Summary: 'Validate the issues reported by the customer.',
    Type: 'Story', Priority: 'High', Tags: 'Validation,Fix',
    Estimate: 1, Assignee: 'Andrew Fuller', RankId: 1
  }
];
```

> **Note:** The `extend` helper from `@syncfusion/ej2-base` is used to deep-clone the data so that the Kanban component's internal state (for example, drag-and-drop rank changes) does not mutate the imported `kanbanData` array.

Update `src/App.tsx` to import the data and render the Kanban component:

{% raw %}
```typescript
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';
import './App.css';

function App() {
  // Deep-clone the data to avoid mutating the imported data source
  const data = extend([], kanbanData, null, true);
  return (
    <KanbanComponent id="kanban" keyField="Status" dataSource={data}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}>
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open" />
          <ColumnDirective headerText="In Progress" keyField="InProgress" />
          <ColumnDirective headerText="Testing" keyField="Testing" />
          <ColumnDirective headerText="Validate" keyField="Validate" />
          <ColumnDirective headerText="Done" keyField="Close" />
        </ColumnsDirective>
    </KanbanComponent>
  );
}
export default App;
```
{% endraw %}

## Run the application

Run the following command to start the development server:

```bash
npm run dev
```

By default, Vite serves the application at `http://localhost:5173`. Open this URL in a browser to view the Kanban board.

## Output

The Kanban board displays cards based on the `kanbanData` array. In this example, the board renders:

- Five workflow columns: `To Do` (Open), `In Progress`, `Testing`, `Validate`, and `Done` (Close).
- Cards mapped to each column by the `Status` field.
- Card headers and content using the `Id` and `Summary` fields configured in `cardSettings`.

You can preview the following sample by clicking the **Preview Sample** button.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/getting-started-key-field-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/getting-started-key-field-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/getting-started-key-field-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/getting-started-key-field-cs3/app/datasource.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/getting-started-key-field-cs3/app/datasource.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/getting-started-key-field-cs3" %}

## Troubleshooting

| Issue | Possible cause | Fix |
|-------|----------------|-----|
| Dev server fails to start | Node.js version is too old | Upgrade to Node.js 18.x or later |
| Port `5173` is already in use | Another process is using the port | Stop the other process, or run `npm run dev -- --port 3000` |
| Styles are not being applied. | Theme CSS not imported | Verify all `@syncfusion/ej2-*/styles/*.css` imports are present in `src/App.css` and that `App.css` is imported in `App.tsx` |
| "Module not found" errors | Dependencies not installed | Run `npm install` in the project root |
| Cards missing from a column | Card `Status` value has no matching column `keyField` | Add a `ColumnDirective` whose `keyField` matches the missing `Status`, or update the data |

## Version compatibility

| Package | Tested version |
|---------|----------------|
| `@syncfusion/ej2-react-kanban` | Latest (as of July 2026) |
| React | 18.x and 19.x |
| TypeScript | 5.x (when using the `react-ts` template) |
| Vite | 5.x and 6.x |

To verify the installed version of the Kanban package, run:

```bash
npm list @syncfusion/ej2-react-kanban
```

## See also

- [Kanban columns](./columns.md)
- [Kanban data binding](./data-binding.md)
- [Kanban dialog](./dialog.md)
- [Kanban swimlane](./swimlane.md)
- [Kanban priority](./priority.md)
