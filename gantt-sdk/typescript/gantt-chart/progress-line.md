---
layout: post
title: Progress Line in TypeScript Gantt Chart | Syncfusion
description: Learn how to configure the progress line in the Syncfusion TypeScript Gantt Chart to compare task progress with a project status date.
keywords: typescript gantt progress line, progressLine, status date, line color, line width, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/progress-line
platform: gantt-sdk
control: Progress Line - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Progress Line in TypeScript Gantt Chart

The progress line is a zigzag drawn in the chart area that compares task progress with a project status date. It helps you see how the completed portion of each task relates to that date.

## Configure the progress line

Inject the [ProgressLine](https://ej2.syncfusion.com/documentation/api/gantt#progresslinemodule) module and configure the [progressLine](https://ej2.syncfusion.com/documentation/api/gantt#progressline) property with a valid `statusDate`. The line is rendered only when the module is injected and the status date resolves to a valid date.

The `statusDate` specifies the reference position of the progress line on the timeline. The Gantt Chart connects the progress endpoints of eligible tasks in row order. Tasks with 100% progress, an invalid start position, or no end date are excluded, except that milestones are included without an end date.

The line is refreshed when the chart updates. With virtualization enabled, it is also recalculated while scrolling so it stays aligned with the visible task rows.

### Progress line settings

| Property | Type | Description |
| --- | --- | --- |
| [statusDate](https://ej2.syncfusion.com/documentation/api/gantt/progressLineSettingsModel#statusdate) | `Date` | Specifies the date used to position the progress line on the timeline. A valid date is required for the line to display. The default value is `null`. |
| [lineColor](https://ej2.syncfusion.com/documentation/api/gantt/progressLineSettingsModel#linecolor) | `string` | Specifies the stroke color of the progress line. The default value is `null`. |
| [lineWidth](https://ej2.syncfusion.com/documentation/api/gantt/progressLineSettingsModel#linewidth) | `number` | Specifies the stroke width of the progress line in pixels. The default value is `2`. |

The following example demonstrates configuring the progress line by injecting the `ProgressLine` module and setting the `statusDate`, `lineColor`, and `lineWidth` properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/progressLine-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/progressLine-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/progressLine-cs1" %}
