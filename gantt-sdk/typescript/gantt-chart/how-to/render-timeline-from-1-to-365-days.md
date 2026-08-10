---
layout: post
title: Render Timeline in TypeScript Gantt Chart | Syncfusion
description: Learn how to render custom timeline in Syncfusion TypeScript Gantt Chart for extended project schedule visualization and detailed time tracking.
keywords: TypeScript gantt timeline, custom timeline, timeline rendering, 365 days, extended timeline, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/how-to/render-timeline-from-1-to-365-days
platform: gantt-sdk
control: Custom Timeline - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Render Timeline From 1 to 365 Days in TypeScript Gantt Chart

Gantt chart contains different types of in-built timeline view modes and it can be defined by using [timelineViewMode](https://ej2.syncfusion.com/documentation/api/gantt/timelineViewMode) property and also we can customize the timescale mode of top tier and bottom tier by using [topTier.unit](https://ej2.syncfusion.com/documentation/api/gantt/timelineTierSettingsModel#unit) and [bottomTier.unit](https://ej2.syncfusion.com/documentation/api/gantt/timelineTierSettingsModel#unit) properties. Timeline tier’s unit can be defined by using [unit](https://ej2.syncfusion.com/documentation/api/gantt/timelineTierSettings#unit) property and [format](https://ej2.syncfusion.com/documentation/api/gantt/timelineTierSettings#format) property was used to define date format of timeline cell and [formatter](https://ej2.syncfusion.com/documentation/api/gantt/timelineTierSettings#formatter) property was used to define custom method to format the date value of timeline cell.

In the [bottomTier.unit](https://ej2.syncfusion.com/documentation/api/gantt/timelineTierSettingsModel#unit) timescale mode, it is possible to display timeline from 1 to 365 days by making use of the formatter in the `timelineSettings` property. The following example shows how to use the formatter method for timeline cells.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/render-timeline-from-1-to-365-days-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/render-timeline-from-1-to-365-days-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/render-timeline-from-1-to-365-days-cs1" %}
