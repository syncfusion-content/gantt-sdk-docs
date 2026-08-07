---
layout: post
title: Change Schedule Dates in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to change project schedule dates programmatically in Syncfusion ASP.NET MVC Gantt Chart for task rescheduling and project adjustments.
keywords: asp.net mvc gantt schedule date, change dates, schedule start, schedule end, reschedule tasks, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/how-to/change-schedule-date
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Updating Schedule Dates Programmatically in ASP.NET MVC Gantt Chart

In the Gantt control, you can change the schedule start and end dates by clicking the custom button programmatically using the `updateProjectDates` method. You can pass the start and end dates as method arguments to the `updateProjectDates` method. You can also pass the Boolean value as an additional parameter, which is used to round-off the schedule start and end dates displayed in Gantt timeline.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/changeScheduleDates/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ChangeScheduleDates.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/changeScheduleDates/changeScheduleDates.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/changeScheduleDates/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ChangeScheduleDates.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/changeScheduleDates/changeScheduleDates.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
