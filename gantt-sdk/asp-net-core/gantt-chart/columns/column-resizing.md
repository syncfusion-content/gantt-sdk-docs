---
layout: post
title: Resize Columns in ASP.NET Core Gantt Chart | Dynamic Width | Syncfusion
description: Learn how to resize columns in Syncfusion ASP.NET Core Gantt Chart dynamically by dragging column header edges with width limits and external resize customization.
keywords: asp.net core gantt resize columns, allowresizing, column width, dynamic sizing, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/columns/column-resizing
platform: gantt-sdk
control: Column Resizing - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK/overview
---

# Column Resizing with Dynamic Width Adjustment in ASP.NET Core Gantt Chart

The [ASP.NET Core Gantt Chart](https://www.syncfusion.com/gantt-sdk/aspnet-core-gantt-chart) enables dynamic column resizing by dragging column header edges. This feature enhances readability and layout flexibility, especially when working with large datasets. To enable this feature, set the [allowResizing](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_AllowResizing) property to **true** in the Gantt configuration.

Column width can be adjusted by dragging the right edge of the header, with changes applied immediately.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs1/columnresize-cs1.cs %}
{% endhighlight %}
{% endtabs %}

![Column resize](../images/column-resize.png)

>* You can disable resizing for a particular column, by specifying [columns.allowResizing](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_AllowResizing) to **false**.
>* In RTL mode, you can click and drag the left edge of header cell to resize the column.
>* The [width](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Width) property of the column can be set initially to define the default width of the column. However, when column resizing is enabled, you can override the default width by manually resizing the columns.

## Restrict the resizing based on minimum and maximum width

The Gantt chart control allows restricting column resizing within a defined range to maintain layout consistency. This ensures column widths remain within the specified limits during resizing.

To enable this, set the [columns.minWidth](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_MinWidth) and [columns.maxWidth](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_MaxWidth) properties in the column configuration.

The following example demonstrates how the **TaskID** column can be configured with a minimum width of 100 pixels and a maximum of 200 pixels, while the **TaskName** column can be set between 150 and 300 pixels.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs2/columnresize-cs2.cs %}
{% endhighlight %}
{% endtabs %}

![Column resize](../images/column-resize.png)

## Prevent resizing for particular column

You can prevent resizing for a specific column in the Gantt Chart control to maintain a consistent column width. To disable resizing, set the [allowResizing](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_AllowResizing) property of the respective column to **false**.

The following example demonstrates how to disable resizing for the **TaskID** column.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs3/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs3/columnresize-cs3.cs %}
{% endhighlight %}
{% endtabs %}

![Column resize](../images/column-resize.png)

> You can also prevent resizing by setting `args.cancel` to **true** in the [resizeStart](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ResizeStart) event.

## Column resizing modes

The ASP.NET Core Gantt Chart control supports two resizing modes that determine how column widths behave during resizing. These modes are configured using the `resizeSettings.mode` property (values: **'Normal'** | **'Auto'**) of the underlying TreeGrid during the component's `load` event or through direct property assignment.

**Available resizing modes:**

1. **Normal mode** (`mode: 'Normal'`): Columns retain their defined widths. If the total column width is less than the Gantt width, empty space appears to the right. If it exceeds, a horizontal scrollbar is shown.
2. **Auto mode** (`mode: 'Auto'`): Columns automatically expand or contract to fill the available space based on the Gantt width.

To apply a resizing mode, set the `resizeSettings.mode` property on the `treeGrid` object within the Gantt instance. This can be done during the `load` event or dynamically based on user interaction.

The following example demonstrates how to set the `resizeSettings.mode` to **Normal** or **Auto** based on the [change](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DropDowns.DropDownList.html#Syncfusion_EJ2_DropDowns_DropDownList_Change) event of the DropDownList control.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs6/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs6/columnresize-cs6.cs %}
{% endhighlight %}
{% endtabs %}

![Column resize](../images/column-resize.png)

> When the `autoFit` property of the `treeGrid` object in the Gantt instance is set to **true**, the Gantt will automatically adjust its column width based on the content inside them. In `normal` resize mode, if the `autoFit` property is set to **true**, the Gantt will maintain any empty space that is left over after resizing the columns. However, in `auto` resize mode, the Gantt will ignore any empty space.

## Resize columns programmatically

You can programmatically resize columns in the Gantt Chart control by accessing the target column using the `getColumnByField` method and updating its [width](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Width) property. This is useful for implementing custom UI controls or dynamic layout adjustments. To reflect the change, call the `refreshColumns` method from the `treeGrid` object within the Gantt instance.

The following example demonstrates how to resize a column externally using the [change](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DropDowns.DropDownList.html#Syncfusion_EJ2_DropDowns_DropDownList_Change) event of the DropDownList control.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs4/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs4/columnresize-cs4.cs %}
{% endhighlight %}
{% endtabs %}

![Column resize](../images/column-resize.png)

> The `refreshColumns` method of the `treeGrid` object in the Gantt instance is used to refresh the Gantt after the column widths are updated. Column resizing externally is useful when you want to provide a custom interface to the user for resizing columns.

## Customize column resizing behavior using events

You can control column resizing using the [resizeStart](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ResizeStart), [resizing](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Resizing), and [resizeStop](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ResizeStop) events. Each event fires at a different stage of the resize operation, allowing you to customize behavior for different columns.

The following example demonstrates how to handle each resizing event separately in their respective event handlers:
- **resizeStart** event handler: Cancels resizing for the **TaskID** column by setting `args.cancel = true`.
- **resizing** event handler: Prevents width changes for the **Duration** column during the resize operation.
- **resizeStop** event handler: Applies custom CSS styles to the **TaskName** column after resizing completes.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs5/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnresize-cs5/columnresize-cs5.cs %}
{% endhighlight %}
{% endtabs %}

![Column resize](../images/column-resize.png)

> The `ResizeArgs` object passed to the events contains information such as the current column width, new column width, column index, and the original event. The [resizing](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Resizing) event is triggered multiple times during a single resize operation, so be careful when performing heavy operations in this event.

## Touch interaction

The Gantt Chart control automatically supports touch interactions for mobile devices when [allowResizing](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_AllowResizing) is enabled.

**Resizing columns on touch devices:**

To resize a column on a touch-enabled device:

1. Tap and hold on the right edge of the column header to activate the resize mode.
2. A floating handler appears over the column border, indicating the resize is active.
3. Drag the handler left or right to adjust the column width.
4. Release your finger to apply the new width.

**Note:** Touch resizing works the same as desktop drag-and-drop. The column menu's AutoFit option is also available on touch devices for quick width adjustments.

The screenshot below illustrates column resizing on a touch device.