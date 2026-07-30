---
layout: post
title: Getting started with JavaScript Kanban control | Syncfusion
description:  Checkout and learn about Getting started with JavaScript Kanban control of Syncfusion Essential JS 2 and more details.
platform: gantt-sdk
control: Getting started 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting started in JavaScript Kanban control

This section briefly explains how to create the **Kanban** component and configure its available functionalities in a JavaScript application.

## Prerequisites

Before you begin, make sure your environment meets the following requirements:

* A modern browser with ES6+ support (latest Chrome, Edge, Firefox, or Safari).
* A text editor (for example, Visual Studio Code).
* (Optional) A local web server such as `npx http-server`, the VS Code Live Server extension, or any static file server. A local server is required when loading scripts from a CDN or when the page needs `fetch`/module behavior.
* If you choose the **local scripts** path, the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/gantt-sdk/confirm) build must be installed on your machine.

## Supported themes and versions

The examples in this document use the **Tailwind 3** theme (`tailwind3.css`). Other built-in themes that ship with the Kanban package are listed below; substitute the `tailwind3` segment in any CSS or tab snippet with one of these names to switch themes.

| Theme | CSS file |
|---|---|
| Tailwind 3 (default) | `tailwind3.css` |
| Material 3 | `material3.css` |
| Bootstrap 5 | `bootstrap5.css` |
| Fluent 2 | `fluent2.css` |
| High Contrast | `highcontrast.css` |

> **Version note:** Replace `{RELEASE_VERSION}` (e.g., `17.4.39` in the local-scripts example) with the version of Essential<sup style="font-size:70%">&reg;</sup> JS 2 installed locally, and match the CDN URLs to the same major release to avoid mixed-version issues.

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

## Setup for local environment

Refer to the following steps to set up your local environment:

**Step 1:** Create a root folder `my-app` for your application.

**Step 2:** Create `my-app/resources` folder to store local scripts and styles files.

**Step 3:** Create `my-app/index.js` and `my-app/index.html` files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Kanban control.

**Step 4:** Open `my-app/index.html` in a modern browser, or serve the `my-app` folder with a local web server (for example, `npx http-server` or the VS Code Live Server extension) to verify the page loads without errors.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Kanban control can be initialized in one of the following ways.

* Using local scripts and styles.
* Using CDN links for scripts and styles.

### Using local scripts and styles

You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, you can copy the Kanban and its dependency scripts and style files into the `resources/scripts` and `resources/styles` folder respectively.

> **Note:** Each dependency package must be unzipped into its own subfolder under `resources`. For example, copy `ej2-base` to `resources/base`, `ej2-buttons` to `resources/buttons`, and the Kanban package to `resources/kanban`. The HTML example below references this layout.

Refer to the following location from where the Kanban's script and styles can be referenced.

**Syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/17.4.39/Essential JS 2/ej2-kanban/dist/global/ej2-kanban.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/17.4.39/Essential JS 2/ej2-kanban/styles/tailwind3.css`

After copying the files, you can reference the Kanban's scripts and styles in the `index.html` file. The following HTML code example shows the dependency of Kanban.

```html

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Kanban</title>
            <!-- Essential JS 2 Kanban's dependent tailwind3 theme -->
            <link href="resources/base/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/dropdowns/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/layouts/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/navigations/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Kanban's tailwind3 theme -->
            <link href="resources/kanban/styles/tailwind3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Kanban's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-icons.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-layouts.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Kanban's global script -->
            <script src="resources/scripts/ej2-kanban.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for kanban  -->
             <div id="Kanban" style="height: 600px;"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

### Using CDN links for scripts and styles

Using CDN links, you can directly reference the Kanban's scripts and styles in the `index.html` file.

Use the following CDN links.

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-kanban/dist/global/ej2-kanban.min.js`](http://cdn.syncfusion.com/ej2/ej2-kanban/dist/global/ej2-kanban.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-kanban/styles/tailwind3.css`](http://cdn.syncfusion.com/ej2/ej2-kanban/styles/tailwind3.css)

The following HTML code example shows the CDN dependencies of the Kanban control with `ej2-kanban.min.js`.

> **Tip:** All `http://` CDN URLs also work over `https://`. Use `https://` to avoid mixed-content warnings when the page is served over HTTPS.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Kanban</title>
            <!-- Essential JS 2 Kanban's dependent tailwind3 theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-layouts/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Kanban's tailwind3 theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-kanban/styles/tailwind3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Kanban's dependent script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-icons/dist/global/ej2-icons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-layouts/dist/global/ej2-layouts.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Kanban's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-kanban/dist/global/ej2-kanban.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for kanban  -->
             <div id="Kanban" style="height: 600px;"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following Kanban code in the `index.js` file.

```javascript
var kanbanObj = new ej.kanban.Kanban({
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ]
});
kanbanObj.appendTo('#Kanban');
```

## Initialize the Kanban

If you prefer a single `<script>` tag instead of loading each dependency individually, use the all-in-one `ej2.min.js` bundle. It includes every Essential<sup style="font-size:70%">&reg;</sup> JS 2 component and its dependent scripts, so you do not need to maintain the per-package dependency list shown above.

To get started, add a `div` element for the Kanban control in `index.html` and then reference the `index.js` file.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Kanban</title>
            <!-- Essential JS 2 Kanban's dependent tailwind3 theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-buttons/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-layouts/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-navigations/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Kanban's tailwind3 theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-kanban/styles/tailwind3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for kanban  -->
             <div id="Kanban"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following Kanban code in the `index.js` file.

```javascript
var kanbanObj = new ej.kanban.Kanban({
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ]
});
kanbanObj.appendTo('#Kanban');
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/kanban/getting-started-empty-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/kanban/getting-started-empty-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/kanban/getting-started-empty-cs1" %}

## Populating cards

Each card is rendered into a column based on the value of its `Status` field, which must match the `keyField` of the target column. To populate the empty Kanban with cards, define the local JSON data or remote data using the `dataSource` property. The mandatory fields in the JSON object must map to the values of `keyField`. The following example defines cards using the default fields `Id`, `Summary`, and `Status`.

The expected `dataSource` JSON shape is:

```javascript
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
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/kanban/getting-started-key-field-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/kanban/getting-started-key-field-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/kanban/getting-started-key-field-cs2" %}

## Enable swimlane

Swimlanes are enabled by mapping the `swimlaneSettings.keyField` property to a column name that exists in the `dataSource` (for example, `Assignee`). Cards are then grouped by the values in the mapped column. The mapped field must be present in every record of the `dataSource`; otherwise, those records fall into an empty swimlane.

The expected `dataSource` JSON shape when swimlanes are enabled is:

```javascript
[
    { Id: 'Task 1', Summary: 'Analyze requirements', Status: 'Open',      Assignee: 'Andrew Fuller' },
    { Id: 'Task 2', Summary: 'Improve performance', Status: 'InProgress', Assignee: 'Janet Leverling' },
    { Id: 'Task 3', Summary: 'Web meeting',         Status: 'Testing',    Assignee: 'Andrew Fuller' }
]
```

The commonly used `swimlaneSettings` options are:

| Option | Purpose |
|---|---|
| `keyField` | Data field used to group cards into swimlanes |
| `textField` | Optional field used to render the swimlane header text |
| `allowDragAndDrop` | Enables dragging cards across swimlanes (default `true`) |
| `showItemCount` | Shows the count of cards in each swimlane |
| `sortDirection` | Orders swimlanes (`Ascending` or `Descending`) |

Refer to the [swimlane configuration](./swimlane) for the complete list of options.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/kanban/getting-started-swimlane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/kanban/getting-started-swimlane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/kanban/getting-started-swimlane-cs1" %}

## Troubleshooting

| Issue | Cause | Fix |
|---|---|---|
| Page loads but the Kanban is invisible | The `<div id="Kanban">` has no defined height | Add CSS such as `#Kanban { height: 600px; }` |
| `ej is not defined` in the browser console | Scripts loaded in the wrong order or `ej2-kanban.min.js` is missing | Ensure `ej2-base.min.js` loads before `ej2-kanban.min.js`, or switch to the all-in-one `ej2.min.js` |
| Styles are not being applied  | Theme CSS is missing | Include the `tailwind3.css` from each dependency plus `ej2-kanban` |
| `CORS` or mixed-content errors on `file://` | Opening `index.html` directly from the file system | Serve the folder with a local web server (e.g., `npx http-server`, VS Code Live Server) |

## See also

* [Columns configuration](./columns)
* [Swimlane configuration](./swimlane)
* [Cards and card fields](./cards)
* [Data binding](./data-binding)
* [Remote data binding with ODataV4](./odataV4)
* [Sorting and filtering cards](./sort)
* [Responsive mode](./responsive-mode)
* [Accessibility](./accessibility)
