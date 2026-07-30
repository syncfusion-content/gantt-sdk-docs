---
layout: post
title: React getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: Next.js
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---


# Getting Started with Next.js

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Kanban component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 18.17](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

## Overview

The Kanban component is composed of:
- **Cards**: tasks displayed on the board; mapped from a `dataSource` via `cardSettings`.
- **Columns**: workflow stages; defined using `keyField`.
- **Swimlanes**: optional grouping of cards; configured with `swimlaneSettings`.

> The `keyField` property maps each column to a specific field in the data source. Each column displays cards whose field value matches its `keyField`.
> The `cardSettings` property defines how each card is displayed, including which fields are used for the header and content.

## Create a Next.js application

Create a new `Next.js` application with the recommended defaults (TypeScript, ESLint, Tailwind CSS, App Router):

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest my-kanban-app
cd my-kanban-app

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app my-kanban-app
cd my-kanban-app

{% endhighlight %}
{% endtabs %}

When prompted, select **Yes** to use the recommended Next.js defaults. This will set up your project with all necessary configurations.

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

Here, the [React Kanban component](https://www.syncfusion.com/react-components/react-kanban-board) is used as an example. To install the React kanban component in the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-kanban

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-kanban

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme), which are available in the installed packages. It’s easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

Import the Tailwind theme (tailwind3) into the **app/globals.css** file and remove the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-kanban/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) section.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Kanban component to the Next.js project:

1.Create the data source file in **app/datasource.ts** with the `kanbanData` object shown below:

{% tabs %}
{% highlight ts tabtitle="datasource.ts" %}

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

{% endhighlight %}
{% endtabs %}

2.Define the kanban component in the **app/page.tsx** file, as shown below:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

function App() {
    // Clone the data to avoid mutating the original datasource
    const data = extend([], kanbanData, null, true);
    return (<KanbanComponent id="kanban" keyField="Status" dataSource={data} 
        cardSettings={% raw %}{{ contentField: "Summary", headerField: "Id" }}{% endraw %}>
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open"/>
          <ColumnDirective headerText="In Progress" keyField="InProgress"/>
          <ColumnDirective headerText="Testing" keyField="Testing"/>
          <ColumnDirective headerText="Done" keyField="Close"/>
        </ColumnsDirective>
    </KanbanComponent>);
}
export default App;

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

## Output

The Kanban board now displays cards from the `kanbanData` array. In this example, the board renders:

- A set of workflow columns for `Open`, `InProgress`, `Testing`, and `Close`.
- Cards mapped to each column by the `Status` field.
- Card headers and content using `Id` and `Summary` via `cardSettings`.

## See also

- [Kanban columns](./columns.md)
- [Kanban data binding](./data-binding.md)
- [Kanban dialog](./dialog.md)
