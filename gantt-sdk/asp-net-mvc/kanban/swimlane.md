---
layout: post
title: Swimlanes in ASP.NET MVC Kanban | Syncfusion
description: Learn how to configure swimlanes in Syncfusion ASP.NET MVC Kanban to group and organize cards by categories or resources.
keywords: asp-net-mvc kanban swimlane, syncfusion kanban, grouping, card grouping
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/kanban/swimlane
platform: gantt-sdk
control: Swimlane - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Swimlane Grouping in ASP.NET MVC Kanban

Swimlanes are horizontal categorizations of cards on the Kanban board.  It is used for grouping of cards, which brings transparency to the workflow process.

## Render swimlane row

Cards can be grouped based on [`KeyField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_KeyField) and displayed in rows, which are separated by columns. It is mandatory to define the [`KeyField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_KeyField) that is mapped from the datasource for rendering swimlane rows in the Kanban board.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/swimlane-row/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/swimlane-row/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/swimlane-row/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/swimlane-row.PNG)

## Custom row text

Customize the swimlane row header text by using the [`TextField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanSwimlaneSettings.html#Syncfusion_EJ2_Kanban_KanbanSwimlaneSettings_TextField) property mapped from datasource.

N> It is not mandatory to define the [`TextField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanSwimlaneSettings.html#Syncfusion_EJ2_Kanban_KanbanSwimlaneSettings_TextField) to [`SwimlaneSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_SwimlaneSettings). It will automatically consider the [`KeyField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_KeyField) to swimlane row header text.
<br/> If the mapping [`TextField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanSwimlaneSettings.html#Syncfusion_EJ2_Kanban_KanbanSwimlaneSettings_TextField) key is not present in the datasource, it will consider the swimlane [`KeyField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_KeyField) as swimlane row header text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/custom-row/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/custom-row/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/custom-row/controller.cs %}
{% endhighlight %}
{% endtabs %}

## Template

You can customize the Kanban swimlane row by using the `Template` property, which is specified within the [`SwimlaneSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_SwimlaneSettings) property. In this demo, the swimlane header is customized with HTML element.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/template/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/template/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/template.PNG)

## Sorting

Swimlane rows are rendered on descending order when using the [`SortBy`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanSortSettings.html#Syncfusion_EJ2_Kanban_KanbanSortSettings_SortBy) property set to `Descending` order. By default, swimlane rows are rendered by **Ascending** order.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/sorting/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/sorting/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/sorting/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/sorting.PNG)

## Drag-and-drop

By default, The Kanban does not allow dragging the cards across the swimlane rows. Enabling the `DragAndDrop` property allows you to drag the cards across the swimlane rows, which is specified inside [`SwimlaneSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_SwimlaneSettings) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/drag-and-drop/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/drag-and-drop/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/drag-and-drop/controller.cs %}
{% endhighlight %}
{% endtabs %}

## Create empty row

You can render the empty swimlane row by enabling the `ShowEmptyRow` property. If mapping [`KeyField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_KeyField) does not have cards, empty swimlane row will be rendered.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/empty-row/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/empty-row/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/empty-row/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/empty-row.PNG)

## Calculate cards count

Users can show or hide the cards count by swimlane row in header when enabling the [`ShowItemCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_ShowItemCount) property, which is enabled by default on the Kanban board.

N> Provided localization support for **Items** text.

In below demo, disabled on [`ShowItemCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_ShowItemCount) property on rendering swimlane row without total count.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/cards-count/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/cards-count/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/cards-count/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/cards-count.PNG)

## Enable frozen rows

Frozen rows provide an option to make the current swimlane row header text always visible on top of the content while scrolling the Kanban content. The swimlane header text will be changed dynamically, when you scroll to another swimlane row.

By default, the [`EnableFrozenRows`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanSwimlaneSettings.html#Syncfusion_EJ2_Kanban_KanbanSwimlaneSettings_EnableFrozenRows) property is set as `false`. If you wish to show the swimlane frozen rows, you can enable the [`EnableFrozenRows`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanSwimlaneSettings.html#Syncfusion_EJ2_Kanban_KanbanSwimlaneSettings_EnableFrozenRows) property.

N> This feature support only when using Kanban content scrolling.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/frozen-rows/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/frozen-rows/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/swimlane/frozen-rows/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/frozen-rows.png)
