---
layout: post
title: Row spanning in React Gantt Chart Component | Syncfusion
description: Learn here all about Row spanning in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Row spanning 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Row Spanning in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports row cell spanning, allowing multiple cells in a row to merge into a single cell. This is useful for displaying shared information across rows without duplication.

To enable row spanning, use the [rowSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs#rowspan) attribute inside the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event. This event is triggered for each grid cell, where you can define the number of rows a cell should span based on its data.

In the example below, the **Soil test approval** cell spans across two rows in the **TaskName** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/row-span-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/row-span-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/row-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/row-span-cs1" %}

> * You can use both [rowSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs#rowspan) and [colSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs#colspan) together to merge grid cells vertically and horizontally.
