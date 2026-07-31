---
layout: post
title: Labels in ASP.NET MVC Gantt Component
description: Learn here all about Labels in Syncfusion ASP.NET MVC Gantt component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Labels
publishingplatform: gantt-sdk
documentation: ug
---

# Labels in ASP.NET MVC Gantt component

The Gantt control maps any data source fields to task labels using the [`LabelSettings.LeftLabel`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttLabelSettings.html#Syncfusion_EJ2_Gantt_GanttLabelSettings_LeftLabel), [`LabelSettings.RightLabel`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttLabelSettings.html#Syncfusion_EJ2_Gantt_GanttLabelSettings_RightLabel), and [`LabelSettings.TaskLabel`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttLabelSettings.html#Syncfusion_EJ2_Gantt_GanttLabelSettings_TaskLabel) properties. You can customize the task labels with templates.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/customizations/tasklabelTemplate/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="TasklabelTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/customizations/tasklabelTemplate/tasklabelTemplate.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/customizations/tasklabelTemplate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="TasklabelTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/customizations/tasklabelTemplate/tasklabelTemplate.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



![Alt text](images/tasklabelTemplate.png)