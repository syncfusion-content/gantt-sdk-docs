---
layout: post
title: Drag and Drop in React Kanban component | Syncfusion
description: Learn how to enable drag-and-drop for cards in the Syncfusion React Kanban component of Syncfusion Essential JS 2 and more.
control: Drag and drop 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Drag and Drop in React Kanban Component

All cards can be dragged and dropped across the columns or within the columns or swimlane row or kanban to an external source and vice versa.

The following drag and drop types are available in the Kanban board.

* Internal drag and drop
    * Column drag and drop
    * Swimlane drag and drop
* External drag and drop
    * Kanban to Kanban
    * Kanban to External source and vice versa.

> Dropped card position varies based on the [sortSettings](https://ej2.syncfusion.com/react/documentation/api/kanban#sortsettings) property.

## Internal drag and drop

Allows the user to drag and drop the cards within the kanban board. Based on this, we can categorize into two ways.

* Column drag and drop
* Swimlane drag and drop

### Column drag and drop

By default, all cards can be dragged and dropped across the columns and within the columns. You cannot drag and drop the cards when disabling the [allowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/kanban#allowdraganddrop) property.

> You can prevent the drag or drop behavior of the particular column by disabling the `allowDrag` or `allowDrop` property.
> You can also control the flow of transition cards between the columns by using the `transitionColumns` property.

In the following example, disable the drag and drop behavior on the Kanban board.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/drag-and-drop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/drag-and-drop-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/drag-and-drop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/drag-and-drop-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/drag-and-drop-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/drag-and-drop-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/drag-and-drop-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/drag-and-drop-cs2" %}

### Swimlane drag and drop

By default, Swimlane allows drag and drop across the columns within the swimlane row. Kanban does not allow dragging the cards across the swimlane rows.

Enabling the [dragAndDrop](https://ej2.syncfusion.com/react/documentation/api/kanban#allowdraganddrop) property allows you to drag the cards across the swimlane rows, which is specified inside the [swimlaneSettings](https://ej2.syncfusion.com/react/documentation/api/kanban#swimlanesettings) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/swimlane-drag-and-drop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/swimlane-drag-and-drop-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/swimlane-drag-and-drop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/swimlane-drag-and-drop-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/swimlane-drag-and-drop-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/swimlane-drag-and-drop-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/swimlane-drag-and-drop-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/swimlane-drag-and-drop-cs2" %}

## External drag and drop

Allows the user to drag and drop the cards from one kanban to another kanban or Kanban to an external source and vice versa.

### Kanban to kanban

Drag and drop the card from one kanban to another kanban and vice versa. This can be achieved by specifying the `externalDropId` property which is used to specify the id of the dropped kanban element and the [dragStop](https://ej2.syncfusion.com/react/documentation/api/kanban#dragstop) event which is used to delete the card on dragged Kanban and add the card on dropped Kanban using the [deleteCard](https://ej2.syncfusion.com/react/documentation/api/kanban#deletecard) and [addCard](https://ej2.syncfusion.com/react/documentation/api/kanban#addcard) public methods.

> Before adding a card to dropped kanban, you can manually change the card data `headerField` when the same card data `headerField` is dropped to another Kanban.

In the following example, Drag the card from one Kanban and drop it into another kanban using the [dragStop](https://ej2.syncfusion.com/react/documentation/api/kanban#dragstop) event. In this event, remove the card from the dragged Kanban by using the [deleteCard](https://ej2.syncfusion.com/react/documentation/api/kanban#deletecard) public method and add the card to the dropped Kanban by using the [addCard](https://ej2.syncfusion.com/react/documentation/api/kanban#addcard) public method.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-kanban-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-kanban-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-kanban-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/kanban-to-kanban-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-kanban-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-kanban-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-kanban-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/kanban-to-kanban-cs2" %}

### Treeview to Kanban

Drag the card from the Kanban board and drop it to the Treeview component and vice versa.

In the following sample, remove the data from the Kanban board using the [deleteCard](https://ej2.syncfusion.com/react/documentation/api/kanban#deletecard) public method and add to the Treeview component using the `addNodes` public method at Kanban [dragStop](https://ej2.syncfusion.com/react/documentation/api/kanban#dragstop) event when dragging the card and dropping it to the Treeview component. Remove the data from Treeview using the `removeNodes` public method and add to Kanban board using the [openDialog](https://ej2.syncfusion.com/react/documentation/api/kanban#opendialog) public method when dragging the list from the Treeview component and dropping it to the kanban board.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-treeview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-treeview-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-treeview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/kanban-to-treeview-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-treeview-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-treeview-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-treeview-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/kanban-to-treeview-cs2" %}

### Schedule to Kanban

Drag the card from the Kanban board and drop it to the Schedule component and vice versa.

In the following sample, remove the data from the Kanban board using the [deleteCard](https://ej2.syncfusion.com/react/documentation/api/kanban#deletecard) public method and add to the schedule component using the `addNodes` public method at Kanban [dragStop](https://ej2.syncfusion.com/react/documentation/api/kanban#dragstop) event when dragging the card and dropping it to the Treeview component. Remove the data from Treeview using the `removeNodes` public method and add to Kanban board using the [addCard](https://ej2.syncfusion.com/react/documentation/api/kanban#addcard) public method when dragging the list from the Treeview component and dropping it to the kanban board.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-schedule-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-schedule-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-schedule-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/kanban-to-schedule-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-schedule-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-schedule-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/kanban-to-schedule-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/kanban-to-schedule-cs4" %}