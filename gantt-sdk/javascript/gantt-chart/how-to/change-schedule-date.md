---
layout: post
title: Update Schedule Date in JavaScript Gantt Chart | Syncfusion
description: Learn how to programmatically update project schedule dates programmatically in Syncfusion JavaScript Gantt Chart to adjust timelines.
keywords: javascript gantt schedule date, update dates, change dates, adjust timeline, schedule adjustment, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/how-to/change-schedule-date
platform: gantt-sdk
control: Update Schedule Date - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Updating Schedule Dates Programmatically in JavaScript Gantt Chart Control

The [updateProjectDates](https://ej2.syncfusion.com/javascript/documentation/api/gantt#updateprojectdates) method in the [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control enables programmatic adjustment of the project's start and end dates, seamlessly updating the timeline and task positions for efficient schedule management. By passing valid `Date` objects for the start and end dates, you can shift the entire project timeline, such as moving a project forward by a month to accommodate delays. An optional Boolean `roundOff` parameter, when set to **true**, aligns dates to the timeline's unit (e.g., days or weeks), ensuring a clean and consistent display. Ensure the Gantt has a defined `dataSource` and [timelineSettings](https://ej2.syncfusion.com/javascript/documentation/api/gantt#timelinesettings) to render the updated schedule accurately. Use valid date formats and leverage the `roundOff` option to optimize timeline rendering for clarity.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/how-to-changescheduledates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/how-to-changescheduledates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/how-to-changescheduledates-cs1" %}

