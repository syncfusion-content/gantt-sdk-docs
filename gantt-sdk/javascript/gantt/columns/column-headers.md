---
layout: post
title: Headers in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about Headers in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Headers
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Headers in JavaScript Gantt Chart Control

The JavaScript Gantt Chart control provides flexible options to manage and customize column headers. You can define static header text, apply custom templates, align header content, and even update header titles dynamically through events or methods. These features help tailor the Gantt chart to match specific UI requirements and improve readability.

## Set custom header text

By default, column headers in the Gantt chart display the value defined in the [field](../../api/gantt/column#field) property. To customize the header title, use the [headerText](../../api/gantt/column#headertext) property within the column configuration. This allows you to define meaningful labels for each column as needed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs1" %}
{% endif %}

> - The `headerText` property is optional. If not defined, the column's field value will be used as the header text by default.
> - To apply custom HTML content to the header cell, use the [headerTemplate](../../api/gantt/column#headertemplate) property.

## Customize header using template

You can customize the column header in the Gantt chart using the [headerTemplate](../../api/gantt/column#headertemplate) property. This allows rendering custom HTML or JavaScript components within the header.

In this example, custom elements are applied to both the **TaskName** and **Duration** column headers.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs2" %}
{% endif %}

> - The `headerTemplate` property is only applicable to Gantt columns that have a header element.

## Align header text

You can align the column header text in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control using the [headerTextAlign](../../api/gantt/column#headertextalign) property. By default, the text is aligned to the **left**. The available alignment options are:

- **Left:** Aligns text to the left (default).
- **Center:** Aligns text to the center.
- **Right:** Aligns text to the right.
- **Justify:** Distributes text evenly across the header.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs3" %}
{% endif %}

> - The `headerTextAlign` property only changes the alignment of the text in the column header, and not the content of the column. If you want to align both the column header and content, you can use the [textAlign](https://ej2.syncfusion.com/documentation/api/gantt/column#textalign) property.

## Enable header text wrapping

You can enable autowrap in the Syncfusion JavaScript Gantt Chart control to allow cell content to wrap onto the next line when it exceeds the defined column width. This wrapping behavior is based on the whitespace between words. To activate this feature, set the `allowTextWrap` property to **true** and specify an appropriate column [width](../../api/gantt/column#width).

The wrapping behavior is defined using the `textWrapSettings.wrapMode` property of the `treeGrid` object. Available options include:

- **Header:** Wraps only the header text.
- **Content:** Wraps only the cell content.
- **Both:** Wraps both header and content (default).

> - If column width is not defined, autowrap adjusts based on the overall Gantt chart width.
> - Header text without white space may not wrap.
> - If cell content includes HTML tags, autowrap may not function as expected. In such cases, use [headerTemplate](../../api/gantt/column#headertemplate) and [template](../../api/gantt/column#template) properties to customize the header and cell layout.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs4" %}
{% endif %}

## Update header text dynamically

The JavaScript Gantt Chart control allows dynamic updates to column header text, either through events or method calls. This is useful for customizing headers based on user input or application logic.

**Using Event**

To modify header text during rendering, use the [headerCellInfo](../../gantt/events#headercellinfo) event. After updating the text, call the `refreshHeader` method of the `treeGrid` object to apply changes.

**Using method**

You can also change header text programmatically using the following methods:

- `getColumnByField`: Returns the column object by field name.
- `getColumnHeaderByField`: Returns the header element by field name.
- `getColumnIndexByField`: Returns the column index by field name.
- `getColumnByUid`: Returns the column object by UID.
- `getColumnHeaderByIndex`: Returns the header element by index.
- `getColumnIndexByUid`: Returns the column index by UID.
- `getColumnHeaderByUid`: Returns the header element by UID.

These methods allow access to the column or header element, where you can update the `headerText` or `textContent` as needed.

> - After modifying header text, call `refreshHeader` to reflect the changes.
> - Column UIDs are auto-generated and may change when the chart is refreshed

Here is an example of how to change the header text of a column using the `getColumnByField` method:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs6" %}
{% endif %}

**Changing the header text of all columns:**

To modify the header text of all columns in the Gantt Chart control, iterate through the columns collection and set the [headerText](../../api/gantt/column#headertext) property for each column. This approach ensures consistent customization across all headers.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs7" %}
{% endif %}

## Rotate header text

By default, header text in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control is displayed horizontally. To rotate it vertically, diagonally, or at a custom angle, follow the steps below using the [customAttributes](../../api/gantt/column#customattributes) property of the column.

**Step 1**: Create a CSS class with rotation styles.

```css
.e-gantt .e-headercell.orientationcss {
  transform: rotate(90deg);
  text-align: center;
}
```

**Step 2:** Apply the CSS class to the desired column using `customAttributes`.

```typescript
 {
      field: 'Duration',
      headerText: 'Duration',
      textAlign: 'Center',
      customAttributes: { class: 'orientationcss' }
    },
```

**Step 3:** Adjust the header cell height to fit the rotated text.

```typescript
function setHeaderHeight() {
  var headerDiv = document.querySelector(".orientationcss > div");
  if (!headerDiv) {
    return;
  }
  var textWidth = headerDiv.scrollWidth;
  var headerCells = document.querySelectorAll(".e-headercell");
  headerCells.forEach(function (cell) {
    cell.style.height = textWidth + "px";
  });
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs8" %}
{% endif %}

## Add custom tooltip to header

You can display additional information in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control by adding custom tooltips to column headers. This is especially helpful when space is limited or when extra context is needed. To implement this, use the [beforeRender](../../api/gantt#beforeRender) event of the `Tooltip` control. This event triggers before each header cell is rendered, allowing you to assign a custom tooltip dynamically.

The following example demonstrates how to use the `beforeRender` event to add a tooltip to a header cell:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs9" %}
{% endif %}

> - The [headerCellInfo](../../api/gantt#headercellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.

## Style header text

To modify the appearance of column headers in the Gantt, follow the steps below. You can use CSS, properties, methods, or events provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control.

### Using CSS

You can apply styles to Gantt Chart control header cells using the **.e-headercell** class. This allows you to customize font, background color, and other visual properties.

```css
.e-gantt .e-headercell {
  background-color: #a2d6f4;
  color: rgb(3, 2, 2);
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs10" %}
{% endif %}

### Using property

To customize the appearance of column headers in the Gantt Chart control, use the [customAttributes](../../api/gantt/column#customattributes) property. It accepts an object containing CSS class names that apply styles directly to header cells.

**Step 1:** Define a CSS class with the desired styles.

```css
.e-gantt .e-headercell.customcss {
  background-color: rgb(43, 205, 226);
  color: black;
}
```

**Step 2:** Assign the class using `customAttributes` in the column definition.

```js
{% raw %}
{  field: 'TaskName', headerText: 'Task Name', customAttributes: { class: 'customcss' }},
{% endraw %}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs11" %}
{% endif %}

### Using method

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control provides methods in the `treeGrid` object to customize column header appearance:

- `getColumnHeaderByIndex(index)` – Gets the header element by column index.
- `getColumnHeaderByField(field)` – Retrieves the header element using the field name.
- `getColumnHeaderByUid(uid)` – Accesses the header element by unique ID.
- `getColumnIndexByField(field)` – Returns the index of a column using its field name.
- `getColumnIndexByUid(uid)` – Returns the index of a column using its unique ID.

The following example demonstrates how to apply custom styles to specific column headers in the Gantt chart using the `dataBound` event:

- Set font color to black for the header at index 0 of the **TaskID** column.
- Apply pink background and black font color to the **TaskName** header.
- Apply the same styles to the **Duration** header using both UID (`grid-column11`) and index 3.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs12" %}
{% endif %}

> - The UID is automatically generated by the Gantt chart control and may change whenever the gantt chart is refreshed or updated.

### Using event

To customize the Gantt Chart control header appearance, use the [headerCellInfo](../../gantt/events#headercellinfo) event. This event triggers when each header cell is rendered and provides access to its details, allowing you to apply custom styles.

The following example demonstrates how to check if the current header column is the **TaskID** field and apply a CSS class conditionally:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs13" %}
{% endif %}

## Refresh header programmatically

To refresh the header in Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control after updating column properties (such as text, width, or alignment), use the `refreshHeader` method from the `treeGrid` object. This method re-renders the header to reflect the latest column changes.

The following example demonstrates how to update the header text of the column at index 1 for the **TaskName** column using a button click.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columnheader-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columnheader-cs14" %}
{% endif %}

## Access header element

To retrieve the header element in a Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart control, you can use one of the following methods available in the `treeGrid` object of the Gantt instance:

1. `getHeaderContent`: This method returns the header <div> element of the Gantt chart. You can use it to access the entire header content.

   ```ts
   const headerElement = gantt.treeGrid.getHeaderContent();
   ```

2. `getHeaderTable`: This method returns the header <table> element of the Gantt chart. You can use it to access only the header table.

   ```ts
   const headerTableElement = gantt.treeGrid.getHeaderTable();
   ```

3. `getColumnHeaderByUid`: This method returns the column header element by its unique identifier (UID).

   ```ts
   const columnHeaderElement = gantt.treeGrid.getColumnHeaderByUid("e-grid2");
   ```

4. `getColumnHeaderByIndex`: This method returns the column header element by its index.

   ```ts
   const columnHeaderElement = gantt.treeGrid.getColumnHeaderByIndex(0);
   ```

5. `getColumnHeaderByField`: This method returns the column header element by its field name.

   ```ts
   const columnHeaderElement = gantt.treeGrid.getColumnHeaderByField("TaskID");
   ```

> - The UID is automatically generated by the Gantt chart control and may change whenever the Gantt is refreshed or updated.
