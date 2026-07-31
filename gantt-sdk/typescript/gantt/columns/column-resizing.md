---
layout: post
title: Column resizing in TypeScript Gantt Chart control | Syncfusion
description: Learn here all about Column resizing in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Column resizing 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Resize Columns in TypeScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control allows you to resize columns dynamically by dragging the edges of column headers. This feature enhances readability and layout flexibility, especially when working with large datasets. To enable this feature, set the [allowResizing](../../api/gantt#allowresizing) property to **true** in the Gantt configuration. 

Column width can be adjusted by dragging the right edge of the header, with changes applied immediately.

To use the column resize feature, inject the `Resize` module into the Gantt Chart control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs3" %}
{% endif %}

>* You can disable resizing for a particular column, by specifying [columns.allowResizing](../../api/gantt/column#allowresizing) to **false**.
>* In RTL mode, you can click and drag the left edge of header cell to resize the column.
>* The [width](../../api/gantt/column#width) property of the column can be set initially to define the default width of the column. However, when column resizing is enabled, you can override the default width by manually resizing the columns.

## Restrict the resizing based on minimum and maximum width

The Gantt chart control allows restricting column resizing within a defined range to maintain layout consistency. This ensures column widths remain within the specified limits during resizing.  
  
To enable this, set the [minWidth](../../api/gantt/column#minwidth) and [maxWidth](../../api/gantt/column#maxwidth) properties in the column configuration.  

The following example demonstrates how the **TaskID** column can be configured with a minimum width of 100 pixels and a maximum of 200 pixels, while the **TaskName** column can be set between 150 and 300 pixels.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/columns-cs4" %}
{% endif %}

## Prevent resizing for particular column

You can prevent resizing for a specific column in the Gantt Chart control to maintain a consistent column width. To disable resizing, set the [allowResizing](../../api/gantt/column#allowresizing) property of the respective column to **false**.

The following example demonstrates how to disable resizing for the **TaskID** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs1" %}
{% endif %}

> You can also prevent resizing by setting `args.cancel` to **true** in the [resizeStart](../../api/gantt#resizestart) event.

## Column resizing modes

The TypeScript Gantt Chart control supports two resizing modes that determine how column widths behave during resizing. These modes are configured using the [resizeSettings.mode](../../api/grid/resizeSettings#mode) property of the underlying TreeGrid. Resizing behavior is defined using the `ResizeSettingsModel` interface, where the `mode` property specifies the type of resizing to be applied.

There are two available resizing modes:

1. **Normal mode**: Columns retain their defined widths. If the total column width is less than the Gantt width, empty space appears to the right. If it exceeds, a horizontal scrollbar is shown.  
2. **Auto mode**: Columns automatically expand or contract to fill the available space based on the Gantt width.

To apply a resizing mode, set the `resizeSettings.mode` property on the `grid` object inside the Gantt instance. This can be done during the `load` event or dynamically based on user interaction.  

The following example demonstrates how to set the `resizeSettings.mode` to **Normal** or **Auto** based on the `DropDownList` [change](../../api/drop-down-list#change) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs2" %}
{% endif %}

> When the [autoFit](../../api/grid#autofit) property of grid object in gantt instance is set to **true**, the gantt will automatically adjust its column width based on the content inside them. In `normal` resize mode, if the `autoFit` property is set to **true**, the gantt will maintain any empty space that is left over after resizing the columns. However, in `auto` resize mode, the gantt will ignore any empty space.

## Resize columns programmatically

You can programmatically resize columns in the TypeScript Gantt Chart control by accessing the target column using the `getColumnByField` method and updating its [width](../../api/gantt/column#width) property. This is useful for implementing custom UI controls or dynamic layout adjustments.  To reflect the change, call the `refreshColumns` method from the `treeGrid` object within the Gantt instance.

The following example demonstrates how to resize a column externally using the [change](../../api/drop-down-list#change) event of the [DropDownList](../../drop-down-list/getting-started) control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs3" %}
{% endif %}

>  The `refreshColumns` method of `treeGrid` object in gantt instance is used to refresh the gantt after the column widths are updated. Column resizing externally is useful when you want to provide a custom interface to the user for resizing columns.

## Customize column resizing behavior using events

You can control column resizing using [resizeStart](../../gantt/events#resizestart), [resizing](../../gantt/events#resizing), and [resizeStop](../../gantt/events#resizestop) events.

The following example demonstrates how resizing events work: `resizeStart` cancels resizing of the **TaskID** column, `resizing` prevents changes when the field is **Duration**, and `resizeStop` applies custom CSS styles to the resized column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-resize-cs4" %}
{% endif %}

>The `ResizeArgs` object passed to the events contains information such as the current column width, new column width, column index, and the original event. The [resizing](../../api/gantt#resizing) event is triggered multiple times during a single resize operation, so be careful when performing heavy operations in this event.

## Touch interaction

The Gantt Chart control supports touch interactions for mobile devices. Users can resize columns by tapping and dragging the floating handler, or use the column menu to autofit columns.

**Resizing columns on touch devices:**

To resize a column:

1. Tap the right edge of the column header.
2. A floating handler appears over the column border.
3. Drag the handler to adjust the column width.

The screenshot below illustrates column resizing on a touch device.

![Column resize](../images/column-resize.png)