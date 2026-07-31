---
layout: post
title: Rows in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about rows in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Rows
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Rows in JavaScript Gantt Chart Control

Each row typically represents a single record or item from a data source. Rows in a Gantt Chart are used to present data in both tabular and timeline chart formats. Each row displays a set of values representing the fields of an individual data record. Rows allow you to interact with the data in the Gantt Chart. You can select rows, edit cell values, perform taskbar editing in the chart side of the Gantt Chart, perform sorting or filtering operations, and trigger events based on actions.

## Customize row styles

Customizing row styles in the JavaScript Gantt Chart allows you to modify the appearance of rows to meet design requirements, such as highlighting specific rows or adjusting font styles, background colors, and other visual properties. This can be achieved using CSS, built-in properties, methods, or event support provided by the control, offering flexibility for both static and dynamic styling.

### Using event

You can customize the row appearance in the JavaScript Gantt Chart control by using the [rowDataBound](../api/gantt#rowdatabound) event. This event allows you to apply styles or perform other row-level modifications based on the data or specific logic requirements.

The following example demonstrates how to customize row styles based on the value of the **Progress** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/rows-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/rows-cs13" %}
{% endif %}

> - The [queryCellInfo](../api/gantt#querycellinfo) event can also be used to customize grid cells and is triggered for every cell in the grid part of the gantt chart. It can be useful when you need to customize cells based on certain conditions or criteria.

### Using CSS

The JavaScript Gantt Chart allows row-level customization through CSS. Each row is assigned specific class names, enabling precise styling to improve readability and visual presentation.

**Customize selected row:**

To highlight the currently selected row, you can override the default styles applied by the Gantt chart. The following CSS classes are used by default:

```css
.e-gantt .e-selectionbackground,
.e-gantt .e-gantt-chart .e-active,
.e-gantt .e-active > .e-chart-row-border {
  background-color: #f9920b !important;
  border: 1px solid red !important;
}
```

**Alternate row customization:**

To create a visual separation between consecutive rows, you can style alternate rows using the **.e-altrow** class.

```css
.e-gantt .e-altrow {
  background-color: #fafafa;
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/alt-rows-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/alt-rows-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/alt-rows-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/alt-rows-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/alt-rows-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/alt-rows-cs1" %}
{% endif %}

### Using method

The JavaScript Gantt Chart control provides methods to customize the appearance of rows in both the grid and chart sections. These methods are accessible through the `treeGrid` object and the Gantt instance.

To customize rows in the grid section, you can use the following methods:

- `getRowByIndex`: Returns the HTML element of a row at a specific index.
- `getRows`: Returns all row elements in the grid.
- `getRowInfo`: Provides the data and index for a row element.
- `getSelectedRowIndexes`: Returns indexes of selected rows.
- `getSelectedRows`: Returns HTML elements of selected rows.

To customize rows in the chart section, the following methods are available:

- `getRowByIndex`: Returns the HTML element of a chart row at a specific index.
- `getChartRows`: Returns all chart row elements.

The following example demonstrates how to use the `getRowByIndex` method of the `treegrid` object in the Gantt instance and the `getRowByIndex` method of the Gantt chart component to customize the appearance of a row within the [rowDataBound](../api/gantt#rowdatabound) event of the Gantt chart.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/rows-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/rows-cs12" %}
{% endif %}

## Styling parent and child rows

You can customize the styling of parent and child rows in the JavaScript Gantt Chart by handling the [rowDataBound](../api/gantt#rowdatabound) event, which is triggered as each row is rendered. Within this event, the `hasChildRecords` property can be used to identify parent rows, allowing you to apply distinct styles that visually separate them from child rows.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-style/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-style/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-style" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-style/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-style/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-style" %}
{% endif %}

## Auto focus taskbar on row click

You can enable automatic scrolling to the corresponding taskbar in the timeline when a row is clicked in the JavaScript Gantt Chart by using the [auto focus tasks](../api/gantt#autofocustasks) property. This feature ensures that the selected task is brought into view within the timeline area, improving navigation and focus during interaction.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-focus/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-focus/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-focus" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-focus/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-focus/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-focus" %}
{% endif %}

## Row height

You can customize row height in the JavaScript Gantt Chart by setting the [rowHeight](../api/gantt#rowheight) property. This helps display additional content within a row or reduce its height to align with the content size.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/rows-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/rows-cs3" %}
{% endif %}

> - The `rowHeight` property can only be used to set the height of the entire gantt row. It cannot be used to set the height of individual cells within a row.
> - The `rowHeight` property applies the height to all rows in the gantt chart, including the header rows.

### Customize row height for particular row

You can customize the height of a specific row in the JavaScript Gantt Chart using the [rowDataBound](../api/gantt#rowdatabound) event. Within this event, conditionally apply a height value to the [rowHeight](../api/gantt#rowheight) property for rows based on their data.

In the example below, the row height is set to **90px** for the row where **TaskID** is 2.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-customize/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-customize/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-customize" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-customize/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-customize/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-customize" %}
{% endif %}

> - In virtual scrolling mode, it is not applicable to set different row heights.
> - You can customize the row height of multiple rows by checking the relevant criteria in the [dataBound](../api/gantt#databound) event and setting the `rowHeight` property accordingly.

## Row hover with custom action or items

You can execute custom actions or display items on row hover in the Gantt chart by using the [dataBound](../api/gantt#databound) event.

The following demonstrates how to implement a custom action using the `dataBound` event. In this event, when hovering over a row, a tooltip containing a button is displayed. Clicking the button reveals a custom message.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-hover/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-hover/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-hover" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-hover/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-hover/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-hover" %}
{% endif %}

## Adding a new row programmatically

The JavaScript Gantt Chart allows adding a new row programmatically using the [addRecord](../api/gantt#addrecord) method. This is useful when you want to insert a record without manually entering data. The method accepts three parameters:

- A **data object** representing the new row
- A **newRowPosition**, which controls where the row is inserted based on the `newRowPosition` property.
- An **index** to specify the insertion position; if not provided, the new row will be added at the top of the Gantt Chart by default.

Supported `newRowPosition` values:

- **Top**: Adds the row at the beginning of the chart.
- **Bottom**: Adds the row at the end of the chart.
- **Above**: Inserts the row above a specified target row.
- **Below**: Inserts the row below a specified target row.
- **Child**: Adds the row as a child under a specified parent row, enabling hierarchical structure.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-addition/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-addition/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-addition" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-addition/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-addition/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-addition" %}
{% endif %}

> - If you want to add a new record to the beginning of the data source, you can pass **0** as the third parameter to the [addRecord](../api/gantt#addrecord) method.
> - If you do not specify an index, the new row will be added at the top of the gantt.

## Show or hide a row using an external actions

You can show or hide specific rows in the Gantt chart based on external actions like a checkbox click, which is useful for temporarily hiding rows without changing the data source. This can be achieved using `getRowByIndex` from the `treeGrid` object and Gantt chart component, and `getRowsObject` from the Gantt instance, along with the [change](../api/check-box#change) event to manage row visibility dynamically.

In this example, the `onCheckBoxChange` method checks the checkbox state and uses `getRowsObject` to iterate through all grid rows. If the **TaskName** value is **Perform Soil test**, the row is hidden using `getRowByIndex` by setting its display style to **none**, and its index is stored in a `hiddenRows` array. When the checkbox is unchecked, the method loops through `hiddenRows` to show each row by resetting its display style and then clears the array.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-show-hide/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-show-hide/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-show-hide" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-show-hide/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/row-show-hide/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/row-show-hide" %}
{% endif %}
