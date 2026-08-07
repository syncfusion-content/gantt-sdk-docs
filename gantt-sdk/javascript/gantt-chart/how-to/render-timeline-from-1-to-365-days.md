---
layout: post
title: Timeline From 1 to 365 days in JavaScript Gantt | Syncfusion
description: Learn here all about Render timeline from 1 to 365 days in Syncfusion JavaScript Gantt control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Render timeline from 1 to 365 days
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Render Timeline From 1 to 365 Days in JavaScript Gantt Control

Gantt chart contains different types of in-built timeline view modes and it can be defined by using [timelineViewMode](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineViewMode) property and also we can customize the timescale mode of top tier and bottom tier by using [topTier.unit](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettingsModel#unit) and [bottomTier.unit](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettingsModel#unit) properties. Timeline tier’s unit can be defined by using [unit](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#unit) property and [format](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#format) property was used to define date format of timeline cell and [formatter](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettings#formatter) property was used to define custom method to format the date value of timeline cell.

In the [bottomTier.unit](https://ej2.syncfusion.com/javascript/documentation/api/gantt/timelineTierSettingsModel#unit) timescale mode, it is possible to display timeline from 1 to 365 days by making use of the formatter in the `timelineSettings` property. The following example shows how to use the formatter method for timeline cells.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/render-timeline-from-1-to-365-days-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/render-timeline-from-1-to-365-days-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/render-timeline-from-1-to-365-days-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/render-timeline-from-1-to-365-days-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/render-timeline-from-1-to-365-days-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/render-timeline-from-1-to-365-days-cs1" %}
{% endif %}
