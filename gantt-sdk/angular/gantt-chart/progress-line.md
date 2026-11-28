---
layout: post
title: Progress Line in Angular Gantt Chart | Syncfusion
description: Learn how to configure the progress line in the Syncfusion Angular Gantt Chart to compare task progress with a project status date.
keywords: angular gantt progress line, progressLine, status date, line color, line width, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/angular/gantt-chart/progress-line
platform: gantt-sdk
control: Progress Line - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Progress Line in Angular Gantt Chart

The progress line provides a visual representation of task progress relative to a specified project status date. It is rendered as a continuous line across the chart area, enabling project managers to quickly evaluate whether tasks are progressing as expected and identify activities that are ahead of or behind schedule.

By comparing the completed portion of tasks against the status date, the progress line helps monitor overall project performance and track progress across the project timeline.

## Configure the progress line

The progress line can be displayed by injecting the `ProgressLineService` module and setting the `statusDate` property within the `progressLine` configuration. The status date represents the project assessment date against which task progress is evaluated.

The Gantt Chart automatically generates the progress line based on task progress values and renders it across eligible task rows. As task data, progress values, or timeline settings change, the progress line is refreshed to reflect the updated project status. When virtualization is enabled, the progress line is recalculated during scrolling to maintain alignment with the visible task rows.

### Progress line settings

The appearance and behavior of the progress line can be customized using the following properties.

| Property | Type | Description |
| --- | --- | --- |
| `statusDate` | `Date` | Specifies the date used as the reference point for calculating and rendering the progress line. |
| `lineColor` | `string` | Specifies the color of the progress line. |
| `lineWidth` | `number` | Specifies the width of the progress line in pixels. |

The following example demonstrates how to configure the progress line by setting the `statusDate`, `lineColor`, and `lineWidth` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/progressLine-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/progressLine-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/gantt-chart/progressLine-cs1" %}
