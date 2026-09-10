---
layout: post
title: Open Add/Edit Dialog in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to open the add/edit dialog programmatically in Syncfusion ASP.NET MVC Gantt Chart for dynamic task management and editing.
keywords: asp.net mvc gantt dialog, open dialog, add task dialog, edit dialog, task editing, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/how-to/open-add-edit-dialog
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Open Add and Edit Dialogs in ASP.NET MVC Gantt Chart

Gantt add and edit dialogs can be opened dynamically by using `openAddDialog` and `openEditDialog` methods. The following code example shows how to open add and edit dialogs on separate button click actions.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/openEditAddDialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="OpenEditAddDialog.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/openEditAddDialog/openEditAddDialog.cs %}
{% endhighlight %}
{% endtabs %}

N> We should select any one of the row in Gantt to open the edit dialog.
