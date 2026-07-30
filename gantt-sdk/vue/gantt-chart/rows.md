---
layout: post
title: Rows in Vue Gantt Chart component | Syncfusion
description: Learn here all about Rows in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Rows 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Rows in Vue Gantt Chart component

Row represents a task information from the data source, and it is possible to perform the following actions in Gantt rows.

## Row height

It is possible to change the height of the row in Gantt by setting row height in pixels to the [rowHeight](https://ej2.syncfusion.com/vue/documentation/api/gantt#rowheight) property. The following code example explains how to change the row height in the Gantt at load time.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/rows-cs1" %}

## Expand/Collapse Row

In Gantt parent tasks are expanded/collapsed by using expand/collapse icons, expand all/collapse all toolbar items and by using public methods. By default all tasks in Gantt was rendered in expanded state but you can change this status in Gantt.

### Collapse all tasks at Gantt load

All tasks available in Gantt was rendered in collapsed state by setting [collapseAllParentTasks](https://ej2.syncfusion.com/vue/documentation/api/gantt#collapseallparenttasks) property as `true`. The following code example shows how to use [collapseAllParentTasks](https://ej2.syncfusion.com/vue/documentation/api/gantt#collapseallparenttasks) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/rows-cs2" %}

### Define expand/collapse status of tasks

In Gantt, you can render some tasks in collapsed state and some tasks in expanded state, this can done by defining expand status of the task in data source. This value was mapped to Gantt Chart component by using [expandState](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#expandstate) property. The following code example shows how to use this property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/rows-cs3" %}

### Customize expand/collapse action

On expand action [expanding](https://ej2.syncfusion.com/vue/documentation/api/gantt#expanding) and [expanded](https://ej2.syncfusion.com/vue/documentation/api/gantt#expanded) event will be triggered with current expanding row’s information. Similarly on collapse action [collapsing](https://ej2.syncfusion.com/vue/documentation/api/gantt#collapsing) and [collapsed](https://ej2.syncfusion.com/vue/documentation/api/gantt#collapsed) event will be triggered. Using this events and it’s arguments you can customize the expand/collapse action. The following code example shows how to prevent the particular row from expand/collapse action using [expanding](https://ej2.syncfusion.com/vue/documentation/api/gantt#expanding) and [collapsing](https://ej2.syncfusion.com/vue/documentation/api/gantt#collapsing) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/rows-cs4" %}

## Customize rows

You can customize the appearance of a row in grid side, by using the [rowDataBound](https://ej2.syncfusion.com/vue/documentation/api/gantt#rowdatabound) event and in chart side by using [queryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#querytaskbarinfo) event

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/rows-cs11" %}

## Styling alternate rows

 You can change the background colour of alternative rows in Gantt chart, by overriding the class as shown below.

```
.e-altrow, tr.e-chart-row:nth-child(even)  {
    background-color: #f2f2f2;
}
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/rows-cs12" %}

## Row spanning

Gantt chart has an option to span row cells. You can achieve this using [rowSpan](https://ej2.syncfusion.com/vue/documentation/api/gantt/queryCellInfoEventArgs#rowspan) attribute to span cells in the [QueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt/queryCellInfoEventArgs) event.

In the following demo, **Soil test approval** cell is spanned to two rows in the **TaskName** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/rows-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/rows-cs13" %}

## Customize rows and cells

While rendering the TreeGrid part in Gantt, the [rowDataBound](https://ej2.syncfusion.com/vue/documentation/api/gantt#rowdatabound) and [queryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#querycellinfo) events trigger for every row and cell. Using these events, you can customize the rows and cells. The following code example shows how to customize the cell and row elements using these events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs6" %}

## Clip mode

The clip mode provides options to display its overflow cell content and it can be defined by the [columns.clipMode](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#clipmode) property.

The following are three types of `clipMode`:

* `Clip`: Truncates the cell content when it overflows its area.
* `Ellipsis`: Displays ellipsis when content of the cell overflows its area.
* `EllipsisWithTooltip`: Displays ellipsis when content of the cell overflows its area; it displays the tooltip content when hover over ellipsis.

> NOTE
> By default, all the column's [clipMode](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#clipmode) property is defined as `EllipsisWithTooltip`.

### Cell tooltip

You can enable or disable the Grid cell tooltip using the [columns.clipMode](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#clipmode) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs3" %}