---
layout: post
title: Update Project Schedule Dates in React Gantt Chart | Syncfusion
description: Learn how to programmatically update project schedule dates in the Syncfusion React Gantt Chart component to adjust timelines and task schedules efficiently.
platform: gantt-sdk
control: Schedule dates
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Update Project Schedule Dates in React Gantt Chart Component

The [updateProjectDates](https://ej2.syncfusion.com/react/documentation/api/gantt#updateprojectdates) method in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables programmatic adjustment of the project’s start and end dates, seamlessly updating the timeline and task positions for efficient schedule management. By passing valid `Date` objects for the start and end dates, you can shift the entire project timeline, such as moving a project forward by a month to accommodate delays. An optional Boolean `roundOff` parameter, when set to **true**, aligns dates to the timeline’s unit (e.g., days or weeks), ensuring a clean and consistent display. Ensure the Gantt has a defined `dataSource` and [timelineSettings](https://ej2.syncfusion.com/react/documentation/api/gantt#timelinesettings) to render the updated schedule accurately. Use valid date formats and leverage the `roundOff` option to optimize timeline rendering for clarity.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-changescheduledates-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-changescheduledates-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-changescheduledates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/how-to-changescheduledates-cs1" %}

## See also

- [How to configure timeline settings?](https://ej2.syncfusion.com/react/documentation/gantt/timeline)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)
