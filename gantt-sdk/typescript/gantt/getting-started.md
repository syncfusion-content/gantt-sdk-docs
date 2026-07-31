---
layout: post
title: Getting Started with TypeScript Gantt Chart Control | Syncfusion
description: Checkout and learn about Getting started with TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more details.
platform: gantt-sdk
control: Getting started 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting Started in TypeScript Gantt Chart Control

This section explains the steps to create a simple Gantt Chart and demonstrates the basic usage of the gantt component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the **webpack.config.js** configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires node **v14.15.0** or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Prerequisites

Ensure you have the following installed on your system before proceeding:
- **Node.js** v14.15.0 or higher
- **npm** (included with Node.js)
- **Git** for cloning the repository

You can verify your installations by running:
```bash
node --version
npm --version
git --version
```

## Setup development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart-webpack

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control, such as [@syncfusion/ej2-gantt](https://www.npmjs.com/package/@syncfusion/ej2-gantt) for just the Gantt Chart.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package (version 21.x or higher) in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the **Fluent 2** theme. To use the Tailwind 3 theme instead, install the **Tailwind 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

After installing the Tailwind 3 theme, update the `~/src/styles/styles.css` file as shown below:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/gantt/index.css";

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes (material, bootstrap, fabric, etc.) and CSS reference for individual controls. To use a different theme, replace the theme name in the import statement with the desired theme name (e.g., `material.css`, `bootstrap5.css`).

The imported CSS is added to the global stylesheet and styles are automatically applied to all Syncfusion components during application runtime. No additional configuration is required in the TypeScript (`.ts`) file.

## Create sample task data

Define a simple task list with hierarchical relationships. The data includes two parent tasks (TaskID 1 and 5) with child tasks linked via `ParentID`. Each task must have a `StartDate` and either a `Duration` (in days) or `EndDate` to render properly.

```typescript
let data: Object[] = [
    {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
    {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
    {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
    {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, ParentID: 1},
    {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25')},
    {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5},
    {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5}
];
```

## Configure task fields mapping

Map the data fields to Gantt Chart properties using [taskFields](https://ej2.syncfusion.com/documentation/api/gantt#taskfields):

```typescript
let taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    parentID: 'ParentID'
};
```

### Field mapping reference

| Property | Description | Required |
|----------|-------------|----------|
| `id` | Unique task identifier | Yes |
| `name` | Task display name | Yes |
| `startDate` | Task start date | Yes |
| `duration` | Task duration in days | Either Duration or EndDate |
| `endDate` | Task end date | Either Duration or EndDate |
| `parentID` | Parent task ID for hierarchy | No |

## Render the Gantt Chart control

Put everything together by adding the following code in the **app.ts** and **index.html** file

Place the following code in the `app.ts` file to create and configure the Gantt Chart control.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Gantt } from '@syncfusion/ej2-gantt';

let gantt: Gantt = new Gantt({
    dataSource: [
        {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
        {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
        {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
        {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, ParentID: 1},
        {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25')},
        {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5},
        {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5}
    ],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        parentID: 'ParentID'
    }
});

gantt.appendTo('#Gantt');

{% endhighlight %}
{% endtabs %}

Add the following HTML element to the `index.html` file. This element acts as the container for rendering the Gantt Chart control. Ensure the `<div id="Gantt"></div>` element exists before calling `appendTo()` in your TypeScript code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!--Element which will render as Gantt-->
    <div id="Gantt"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Run the application

The quickstart project is configured to build and run the application in the browser. Use the following command to start the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The application will typically run on `http://localhost:8080` or `http://localhost:3000` depending on your webpack configuration. If you encounter errors:
- **Port already in use**: Change the port in `webpack.config.js` or kill the process using that port
- **Build errors**: Run `npm install` again to ensure all dependencies are installed correctly
- **Module not found**: Verify that all imports reference the correct package names (e.g., `@syncfusion/ej2-gantt`)

## Output

The Gantt Chart displays:

- Task hierarchy with parent-child relationships
- Timeline view showing task bars
- Automatically calculated dates based on duration

The chart displays two parent tasks (Project initiation, Project estimation) with subtasks shown in a tree structure. Task bars are rendered on the timeline, sized according to their duration and start dates.

You can preview the following sample by clicking the **Preview Sample** button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs23/index.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs23" %}

## Error handling

Proper error handling helps identify and resolve issues during development. The Gantt Chart control provides the [actionFailure](https://ej2.syncfusion.com/documentation/api/gantt#actionfailure) event to capture validation and runtime errors.

### Common error scenarios

The `actionFailure` event is triggered when validation errors or configuration issues occur:

* **Invalid duration** — The [duration](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#duration) field accepts only numerical values with an optional decimal point. Non-numerical values trigger the `actionFailure` event.
* **Invalid dependency** — The [dependency](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#dependency) field accepts a number followed by a predecessor type (FS, FF, SS, SF). Invalid values, special characters, or incorrect predecessor types trigger the `actionFailure` event.
* **Invalid offset** — The [offset](https://ej2.syncfusion.com/documentation/api/gantt/iPredecessor#offset) accepts only numerical values or their word equivalents followed by a unit. Invalid values trigger the `actionFailure` event.
* **Failure to map task fields** — The data source fields must be mapped to the Gantt Chart control using the [taskFields](https://ej2.syncfusion.com/documentation/api/gantt/taskFields) property. Missing mappings trigger the `actionFailure` event.
* **Failure to map resource fields** — To assign resources to a task, resource fields must be mapped using [resourceFields](https://ej2.syncfusion.com/documentation/api/gantt/resourceFields). Missing mappings trigger the `actionFailure` event.
* **Missing isPrimaryKey** — The [isPrimaryKey](https://ej2.syncfusion.com/documentation/api/gantt/column#isprimarykey) field is crucial for CRUD operations. Failure to map the [id](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#id) column or set `isPrimaryKey` triggers the `actionFailure` event.
* **Invalid date format** — The [format](https://ej2.syncfusion.com/documentation/api/gantt/iTimelineFormatter) property in `topTier` and `bottomTier` must use valid [date format strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Invalid formats trigger the `actionFailure` event.
* **Missing hasChildMapping** — The [hasChildMapping](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#haschildmapping) property must be configured for [load-on-demand](https://ej2.syncfusion.com/documentation/gantt/data-binding#load-child-on-demand) functionality. Missing mappings trigger the `actionFailure` event.
* **Invalid event marker day** — The [day](https://ej2.syncfusion.com/documentation/api/gantt/eventMarker#day) property in [eventMarkers](https://ej2.syncfusion.com/documentation/api/gantt/eventMarker) must be a valid date. Invalid dates trigger the `actionFailure` event.

>**Note**: The `actionFailure` event also captures error information from the underlying TreeGrid component. For more details, refer to [TreeGrid error handling](https://ej2.syncfusion.com/documentation/treegrid/getting-started#handling-errors).

### Handling errors with actionFailure event

The following code example shows how to attach the [actionFailure](https://ej2.syncfusion.com/documentation/api/gantt#actionfailure) event handler to display exceptions when configuration issues occur (e.g., `isPrimaryKey` is not configured properly).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let gantt: Gantt = new Gantt({
    dataSource: data,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        parentID: 'ParentID'
    },
    actionFailure: (args: any) => {
        // Display error to user or log it
        console.error('Gantt Error:', args.error);
        alert(`Error: ${args.error}`);
    }
});

gantt.appendTo('#Gantt');

{% endhighlight %}
{% endtabs %}

For a complete working example with detailed error scenarios, refer to:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/exception-handling-cs1/index.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/exception-handling-cs1" %}

The following screenshot represents the Gantt Exception handling in `actionFailure` event.

![Error Handling](./images/error-handling.png)
