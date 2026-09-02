---
layout: post
title: Custom Fields in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to add custom fields in the add/edit dialog of Syncfusion ASP.NET MVC Gantt Chart for extended task data management.
keywords: asp.net mvc gantt custom field, custom fields, add custom field, dialog field, extended fields, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/how-to/custom-field
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Adding Custom Fields to Edit Dialogs in ASP.NET MVC Gantt Chart

Generally in Gantt, Custom fields are displayed in the Custom Tab of the Add/Edit dialogs. However, they can be included in the General Tab of Add/Edit Dialog Box using `actionBegin` and `actionComplete` events. These events append the custom field to the dialog box. The following code snippets demonstrate the solution.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/customfield/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Customfield.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/customfield/customfield.cs %}
{% endhighlight %}
{% endtabs %}
