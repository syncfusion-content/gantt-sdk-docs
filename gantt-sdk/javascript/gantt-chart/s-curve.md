---
layout: post
title: S-Curve in JavaScript Gantt Chart | Syncfusion
description: Learn how to visualize cumulative project progress and duration using S-Curve analysis in the Syncfusion JavaScript Gantt Chart.
keywords: javascript gantt s-curve, cumulative progress, cumulative duration, project tracking, earned value analysis, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/s-curve
platform: gantt-sdk
control: S-Curve - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# S-Curve in JavaScript Gantt Chart

The S-Curve feature visualizes cumulative project performance over time directly on the Gantt Chart timeline. It provides a graphical representation of how work progresses throughout a project schedule, helping track performance trends and overall completion throughout the project lifecycle.

S-Curve data is calculated from scheduled child tasks that contain valid start dates and durations. The calculated values are rendered as an overlay on the Gantt Chart timeline.

The Gantt Chart supports the following S-Curve types:

- **Progress** - Displays cumulative earned progress over time.
- **Duration** - Displays cumulative scheduled duration over time.

## Configure S-Curve rendering

Configure S-Curve rendering using the [`sCurveSettings`](https://ej2.syncfusion.com/javascript/documentation/api/gantt#scurvesettings) property.

The following properties are available for configuring S-Curve rendering.

| Property | Description |
|-----------|-------------|
| `visible` | Enables or disables S-Curve rendering. |
| `dataSet` | Use the dataSet collection to define one or more S-Curve datasets for rendering. |
| `dataSet.field` | Specifies the dataset type. Supported values are `Progress` and `Duration`. |
| `dataSet.color` | Specifies the line and marker color of the dataset. |

The following example demonstrates how to display both Progress and Duration S-Curves.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scurve-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/scurve-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/scurve-cs1" %}

## Customizing S-Curve tooltip

Hovering over an S-Curve data point displays information associated with the selected dataset and timeline date.

The S-Curve tooltip supports template customization through the [`tooltipSettings.sCurve`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/tooltipSettings#scurve) property. This template provides context-specific information for the selected S-Curve data point, enabling custom display of cumulative progress and duration values.

The tooltip template provides the following fields.

| Field | Description |
|---------|-------------|
| `field` | Dataset type (`Progress` or `Duration`). |
| `name` | Display name of the dataset. |
| `date` | Timeline date associated with the data point. |
| `percentage` | Cumulative percentage calculated for the specified date. |
| `value` | Cumulative duration value. Available only for Duration dataset. |

The following example demonstrates how to customize the S-Curve tooltip.

```javascript
var ganttChart = new ej.gantt.Gantt({
    dataSource: [
        { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('04/01/2026'), Duration: 5, Progress: 40 },
        { TaskID: 2, TaskName: 'Requirements Analysis', StartDate: new Date('04/02/2026'), Duration: 4, Progress: 60 },
        { TaskID: 3, TaskName: 'Solution Design', StartDate: new Date('04/06/2026'), Duration: 6, Progress: 30 },
        { TaskID: 4, TaskName: 'Software Development', StartDate: new Date('04/12/2026'), Duration: 8, Progress: 20 },
        { TaskID: 5, TaskName: 'System Testing', StartDate: new Date('04/20/2026'), Duration: 5, Progress: 0 },
        { TaskID: 6, TaskName: 'Production Release', StartDate: new Date('04/25/2026'), Duration: 2, Progress: 0 }
    ],
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    },
    sCurveSettings: {
        visible: true,
        dataSet: [
            { field: 'Progress', color: '#4CAF50' },
            { field: 'Duration', color: '#2196F3' }
        ]
    },
    tooltipSettings: {
        sCurve: '<div>${field}<br/>Date: ${this.getFormatedDate(date)}<br/>Percentage: ${percentage}%</div>'
    }
});

ganttChart.appendTo('#Gantt');
```

## Limitations

- When `loadChildOnDemand` is enabled, S-Curve rendering is not supported because all task records are not available during S-Curve calculation.
