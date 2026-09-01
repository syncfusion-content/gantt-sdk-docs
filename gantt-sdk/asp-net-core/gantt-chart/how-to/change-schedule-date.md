---
layout: post
title: Change Schedule Dates in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to change project schedule dates programmatically in Syncfusion ASP.NET Core Gantt Chart for task rescheduling and project adjustments.
keywords: asp.net core gantt schedule date, change dates, schedule start, schedule end, reschedule tasks, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/how-to/change-schedule-date
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Updating Schedule Dates Programmatically in ASP.NET Core Gantt Chart

In the Gantt control, you can change the schedule start and end dates by clicking the custom button programmatically using the `updateProjectDates` method. You can pass the start and end dates as method arguments to the `updateProjectDates` method. You can also pass the Boolean value as an additional parameter, which is used to round-off the schedule start and end dates displayed in Gantt timeline.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/how-to/changeScheduleDates/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ChangeScheduleDates.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/how-to/changeScheduleDates/changeScheduleDates.cs %}
{% endhighlight %}
{% endtabs %}
