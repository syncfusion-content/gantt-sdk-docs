---
layout: post
title: S-Curve in TypeScript Gantt Chart | Syncfusion
description: Learn how to display cumulative task progress and duration as S-curves in the Syncfusion TypeScript Gantt Chart.
keywords: typescript gantt s-curve, cumulative progress, cumulative duration, project tracking, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/s-curve
platform: gantt-sdk
control: S-Curve - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# S-Curve in TypeScript Gantt Chart

The S-Curve feature visualizes cumulative project progress and duration over time directly on the Gantt chart timeline. It helps compare planned work against completed work and provides insight into project performance throughout the schedule.

The Gantt Chart supports two S-Curve metrics:

- **Progress** – Displays cumulative earned progress.
- **Duration** – Displays cumulative scheduled duration.

## Enabling S-Curve

To enable the S-Curve feature, inject the `SCurve` module and configure the [sCurveSettings](https://ej2.syncfusion.com/documentation/api/gantt#scurvesettings) property with `visible: true`. Define one or more datasets within the `dataSet` collection to display the required curves.

Map the task properties by using the [taskFields](https://ej2.syncfusion.com/documentation/api/gantt#taskfields) configuration.

The following example demonstrates how to render Progress and Duration S-Curves.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/scurve-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/scurve-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/scurve-cs1" %}

## S-Curve Settings

Use the [sCurveSettings](https://ej2.syncfusion.com/documentation/api/gantt#scurvesettings) property to configure S-Curve behavior.

| Property | Description |
| --- | --- |
| `visible` | Enables or disables S-Curve rendering. The default value is `false`. |
| `dataSet` | Defines the collection of S-Curve datasets to render. |
| `dataSet.field` | Specifies the metric represented by the dataset. Supported values are `Progress` and `Duration`. |
| `dataSet.color` | Specifies the line and marker color for the dataset. If not specified, theme-specific colors are used. |

## Understanding S-Curve Calculation

The S-Curve values are calculated using scheduled leaf-level tasks that contain valid start dates and durations.

### Progress S-Curve

The Progress S-Curve represents cumulative earned progress over time. Each task contributes based on its duration and progress value, allowing project completion trends to be visualized throughout the schedule.

### Duration S-Curve

The Duration S-Curve represents cumulative scheduled duration over time and illustrates how planned work is distributed across the project timeline.

Both curves are normalized as percentages of the total scheduled duration, allowing Progress and Duration curves to be compared on the same scale.

## Timeline Interaction

S-Curve data points are generated using the configured timeline intervals together with task start and finish dates. The level of detail displayed in the curve depends on the configured timeline tier settings.

The S-Curve is automatically refreshed when task data or S-Curve settings change.

## Customizing S-Curve Tooltip

Hovering over an S-Curve data point displays information about the curve value at that date.

To customize the tooltip content, use the [tooltipSettings.sCurve](https://ej2.syncfusion.com/documentation/api/gantt/tooltipSettings#scurve) property.

The template receives the following fields:

| Field | Description |
| --- | --- |
| `field` | Dataset type (`Progress` or `Duration`). |
| `name` | Display name of the dataset. |
| `date` | Timeline date corresponding to the data point. |
| `percentage` | Calculated cumulative percentage value. |
| `value` | Actual cumulative value represented by the point; available for Duration datasets only. |

```typescript
import { Gantt, SCurve } from '@syncfusion/ej2-gantt';

Gantt.Inject(SCurve);

let gantt: Gantt = new Gantt({
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
        sCurve: '<div>${field}: ${name}<br/>Date: ${date}<br/>Percentage: ${percentage}%${if (field === "Duration")}<br/>Value: ${value}${/if}</div>'
    }
});

gantt.appendTo('#Gantt');
```

To disable S-Curve tooltips, set [tooltipSettings.showTooltip](https://ej2.syncfusion.com/documentation/api/gantt/tooltipSettings#showtooltip) to `false`.

## Export Support

The S-Curve overlay is included when exporting the Gantt Chart to PDF.

To enable PDF export, inject the `PdfExport` module and follow the Gantt Chart [PDF Export documentation](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/pdf-export/pdf-export).

## Limitations

When `loadChildOnDemand` is enabled together with child mapping, S-Curve rendering is not supported because all task data is not available during calculation.
