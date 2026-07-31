---
layout: post
title: Change schedule date in TypeScript Gantt control | Syncfusion
description: Learn how to update project schedule dates programmatically in the Syncfusion TypeScript Gantt Chart to efficiently adjust timelines and task schedules.
platform: gantt-sdk
control: Schedule dates
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Update Project Schedule Dates in TypeScript Gantt Chart Control

The [updateProjectDates](../../api/gantt#updateprojectdates) method in the [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control enables programmatic adjustment of the project's start and end dates, seamlessly updating the timeline and task positions for efficient schedule management. By passing valid `Date` objects for the start and end dates, you can shift the entire project timeline, such as moving a project forward by a month to accommodate delays. An optional Boolean `roundOff` parameter, when set to **true**, aligns dates to the timeline's unit (e.g., days or weeks), ensuring a clean and consistent display. Ensure the Gantt has a defined `dataSource` and [timelineSettings](../../api/gantt#timelinesettings) to render the updated schedule accurately. Use valid date formats and leverage the `roundOff` option to optimize timeline rendering for clarity.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-changescheduledates-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-changescheduledates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/how-to-changescheduledates-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-changescheduledates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/how-to-changescheduledates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/how-to-changescheduledates-cs1" %}
{% endif %}
