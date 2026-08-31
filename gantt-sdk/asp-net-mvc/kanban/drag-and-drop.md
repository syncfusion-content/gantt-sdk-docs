---
layout: post
title: Drag and Drop in ASP.NET MVC Kanban | Syncfusion
description: Learn how to enable drag-and-drop interactions in Syncfusion ASP.NET MVC Kanban to reorder cards and move tasks across columns.
keywords: asp-net-mvc kanban drag and drop, syncfusion kanban, card movement, reordering
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/kanban/drag-and-drop
platform: gantt-sdk
control: Drag and Drop - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Drag and Drop Operations in ASP.NET MVC Kanban

All cards can be dragged and dropped across the columns or within the columns or swimlane row or kanban to an external source and vice versa.

The following drag and drop types are available in the Kanban board.

* Internal drag and drop
    * Column drag and drop
    * Swimlane drag and drop
* External drag and drop
    * Kanban to Kanban
    * Kanban to External source and vice versa.

N> Dropped card position varies based on the `SortSettings` property.

## Internal drag and drop

Allows the user to drag and drop the cards within the kanban board. Based on this, we can categorize into two ways.

* Column drag and drop
* Swimlane drag and drop

### Column drag and drop

By default, all cards can be dragged and dropped across the columns and within the columns. You cannot drag and drop the cards when disabling the `AllowDragAndDrop` property.

N> You can prevent the drag or drop behavior of the particular column by disabling the `AllowDrag` or `AllowDrop` property.
<br/> You can also control the flow of transition cards between the columns by using the `TransitionColumns` property.

In the following example, disable the drag and drop behavior on the Kanban board.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/drag-and-drop/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/drag-and-drop/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/drag-and-drop/controller.cs %}
{% endhighlight %}
{% endtabs %}

### Swimlane drag and drop

By default, Swimlane allows drag and drop across the columns within the swimlane row. Kanban does not allow dragging the cards across the swimlane rows.

Enabling the `DragAndDrop` property allows you to drag the cards across the swimlane rows, which is specified inside the `SwimlaneSettings` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/swimlane-drag-and-drop/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/swimlane-drag-and-drop/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/swimlane-drag-and-drop/controller.cs %}
{% endhighlight %}
{% endtabs %}

## External drag and drop

Allows the user to drag and drop the cards from one kanban to another kanban or Kanban to an external source and vice versa.

### Kanban to kanban

Drag and drop the card from one kanban to another kanban and vice versa. This can be achieved by specifying the `ExternalDropId` property which is used to specify the id of the dropped kanban element and the `DragStop` event which is used to delete the card on dragged Kanban and add the card on dropped Kanban using the `deleteCard` and `addCard` public methods.

N> Before adding a card to dropped kanban, you can manually change the card data `HeaderField` when the same card data `HeaderField` is dropped to another Kanban.

In the following example, Drag the card from one Kanban and drop it into another kanban using the `DragStop` event. In this event, remove the card from the dragged Kanban by using the `deleteCard` public method and add the card to the dropped Kanban by using the `addCard` public method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-kanban/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-kanban/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-kanban/controller.cs %}
{% endhighlight %}
{% endtabs %}

### Treeview to Kanban

Drag the card from the Kanban board and drop it to the Treeview component and vice versa.

In the following sample, remove the data from the Kanban board using the `deleteCard` public method and add to the Treeview component using the `addNodes` public method at Kanban `DragStop` event when dragging the card and dropping it to the Treeview component. Remove the data from Treeview using the `removeNodes` public method and add to Kanban board using the `openDialog` public method when dragging the list from the Treeview component and dropping it to the kanban board.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-treeview/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-treeview/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-treeview/controller.cs %}
{% endhighlight %}
{% endtabs %}

### Schedule to Kanban

Drag the card from the Kanban board and drop it to the Schedule component and vice versa.

In the following sample, remove the data from the Kanban board using the `deleteCard` public method and add to the schedule component using the `addNodes` public method at Kanban `DragStop` event when dragging the card and dropping it to the Treeview component. Remove the data from Treeview using the `removeNodes` public method and add to Kanban board using the `addCard` public method when dragging the list from the Treeview component and dropping it to the kanban board.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-schedule/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-schedule/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/drag-and-drop/kanban-to-schedule/controller.cs %}
{% endhighlight %}
{% endtabs %}
