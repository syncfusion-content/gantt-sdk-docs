---
layout: post
title: Open Add/Edit Dialog in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to open the add/edit dialog programmatically in Syncfusion ASP.NET MVC Gantt Chart for dynamic task management and editing.
keywords: asp.net core gantt dialog, open dialog, add task dialog, edit dialog, task editing, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/how-to/open-add-edit-dialog
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Opening Add and Edit Dialogs Programmatically in ASP.NET MVC Gantt Chart

Gantt add and edit dialogs can be opened dynamically by using `openAddDialog` and `openEditDialog` methods. The following code example shows how to open add and dialog on separate button click actions.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/openEditAddDialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="OpenEditAddDialog.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/openEditAddDialog/openEditAddDialog.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/openEditAddDialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="OpenEditAddDialog.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/openEditAddDialog/openEditAddDialog.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

N> We should select any one of the row in Gantt to open the edit dialog.
