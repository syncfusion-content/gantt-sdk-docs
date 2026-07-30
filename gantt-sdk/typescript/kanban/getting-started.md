---
layout: post
title: Getting started with TypeScript Kanban control | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Kanban control of Syncfusion Essential JS 2 and more details.
platform: gantt-sdk
control: Getting started 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting started with TypeScript Kanban control

This section explains how to create and configure the Kanban component in TypeScript using a Vite project with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Kanban package.

## Prerequisites

Before you begin, make sure your environment meets the following requirements:

* **Node.js** 16+ and **npm** 8+ installed.
* A modern browser with ES6+ support (latest Chrome, Edge, Firefox, or Safari).
* A code editor such as Visual Studio Code.
* Basic familiarity with the command line and TypeScript.

## Supported themes and versions

The examples in this document use the **Tailwind 3** theme. Other built-in themes that ship with the Kanban package are listed below; substitute `tailwind3` in any `@import` path with one of these names to switch themes.

| Theme | CSS file |
|---|---|
| Tailwind 3 (default) | `tailwind3.css` |
| Material 3 | `material3.css` |
| Bootstrap 5 | `bootstrap5.css` |
| Fluent 2 | `fluent2.css` |
| High Contrast | `highcontrast.css` |

Refer to the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme) for the full list and CSS reference paths for individual controls.

## Dependencies

The following list of dependencies is required to use the Kanban component in your application:

```javascript
|-- @syncfusion/ej2-kanban
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-icons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Set up the development environment

Use the following commands to scaffold a new TypeScript Vite application and start the development server:

```bash
npm create vite@latest my-app -- --template vanilla-ts
cd my-app
npm install
npm run dev
```

The Vite dev server prints a local URL (for example, `http://localhost:5173`) — open it in a browser to view the app.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published to the Syncfusion npm registry. To install the Kanban component, use the following command:

```
npm install @syncfusion/ej2-kanban
```

This installs the Kanban package and its required peer dependencies.

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Kanban component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/kanban/index.css";

{% endhighlight %}
{% endtabs %}

## Initialize the Kanban

Add an HTML `div` element with an `id` attribute to `index.html` to serve as the host element for the Kanban control. The host element must have a defined height, otherwise the Kanban will not be visible.

`[index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kanban Typescript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <!--Element where the Kanban will be rendered-->
    <div id="Kanban" style="height: 600px;"></div>
    <script type="module" src="/src/main.ts"></script>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Import the Kanban component into your `src/main.ts` file and initialize it on the element whose `id` is `Kanban` in `index.html`.

`[src/main.ts]`

{% tabs %}
{% highlight ts tabtitle="src/main.ts" %}

import './style.css';
import { Kanban } from '@syncfusion/ej2-kanban';

const kanbanObj: Kanban = new Kanban({
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ]
});
kanbanObj.appendTo('#Kanban');

{% endhighlight %}
{% endtabs %}

Now, run the application in the browser with the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% endtabs %}

Vite prints a local URL (for example, `http://localhost:5173`). Open it in a browser to view the empty Kanban. The complete runnable sample is also available here:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-empty-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-empty-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/getting-started-empty-cs2" %}

## Populating cards

Each card is rendered into a column based on the value of its `Status` field, which must match the `keyField` of the target column. To populate the empty Kanban with cards, define local JSON data or remote data using the `dataSource` property. The data items must include fields relevant to the configured `keyField`. The example below uses the default fields `Id`, `Summary`, and `Status`.

The expected `dataSource` JSON shape is:

```typescript
[
    {
        Id: 'Task 1',
        Summary: 'Analyze the new requirements gathered from the customer.',
        Status: 'Open'
    },
    {
        Id: 'Task 2',
        Summary: 'Improve application performance.',
        Status: 'InProgress'
    },
    {
        Id: 'Task 3',
        Summary: 'Arrange a web meeting with the customer to get new requirements.',
        Status: 'Testing'
    },
    {
        Id: 'Task 4',
        Summary: 'Fix the issues reported in the IE browser.',
        Status: 'Close'
    }
]
```

The full set of default card fields recognized by the Kanban control is:

| Field | Purpose |
|---|---|
| `Id` | Unique identifier for the card |
| `Summary` | Card title shown on the card |
| `Status` | Column key (must match a `columns[].keyField`) |
| `Title` | Optional secondary heading |
| `Description` | Optional body text |
| `Assignee` | Used for swimlane grouping and avatar |
| `Tags` | Comma-separated labels rendered on the card |
| `Priority` | Used by the priority feature |
| `DueDate` | Used by the due-date feature |

To customize which fields appear on a card, use the [`cardSettings`](./cards) property; to add remote data fetching, see the [`dataSource`](./data-binding) configuration.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-key-field-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-key-field-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-key-field-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/getting-started-key-field-cs3" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields `swimlaneSettings.keyField` to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-swimlane-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-swimlane-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-swimlane-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/getting-started-swimlane-cs2" %}

## Troubleshooting

| Issue | Cause | Fix |
|---|---|---|
| Page loads but the Kanban is invisible | The `<div id="Kanban">` has no defined height | Add inline CSS such as `style="height: 600px;"` on the host element |
| `Cannot find module '@syncfusion/ej2-kanban'` | Package was not installed or `node_modules` is stale | Run `npm install @syncfusion/ej2-kanban` and restart the dev server |
| Styles are not being applied | `style.css` is not imported into `main.ts` | Add `import './style.css';` at the top of `src/main.ts` |
| Port `5173` already in use | Another Vite or local server is bound to the port | Stop the other process, or run Vite on a different port: `npm run dev -- --port 3000` |
| `npm create vite@latest` prompts for input | Running in an interactive terminal without flags | Pass `-- --template vanilla-ts` to skip prompts, as shown in **Set up the development environment** |

## See also

* [Columns configuration](./columns)
* [Swimlane configuration](./swimlane)
* [Cards and card fields](./cards)
* [Data binding](./data-binding)
* [Remote data binding with ODataV4](./odataV4)
* [Sorting and filtering cards](./sort)
* [Responsive mode](./responsive-mode)
* [Accessibility](./accessibility)