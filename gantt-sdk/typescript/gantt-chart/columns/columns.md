---
layout: post
title: Columns in TypeScript Gantt control | Syncfusion
description: Learn here all about columns in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Columns
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Columns in TypeScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control displays task data in a tabular format using columns. Columns help organize data efficiently and support user interaction within the Gantt chart.

Each column is defined using the [field](../../api/gantt/column#field) property, which maps values from the [dataSource](../../api/gantt#datasource). This mapping ensures accurate data binding and enables formatting and customization for each column.

## Column types

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control supports specifying the data type for each column using the `type` property. This ensures that values are displayed with the correct formatting such as number or date based on the column's data.

**Gantt supports the following column types:**

- **string**: Default type for text data.
- **number**: For numeric values with formatting.
- **boolean**: Displays checkboxes for true/false values.
- **date**: For date values.
- **datetime**: For date and time values.
- **checkbox**: Displays a checkbox column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs5" %}
{% endif %}

> - If `type` is not defined, it is auto-detected from the first record of the data source.
> - If the first record has a null or blank value, define the `type` explicitly to ensure correct filter dialog behavior.

### Difference between boolean type and checkbox type column

- Use **boolean** type to bind and edit true/false values from the data source.
- Use **checkbox** type to enable row selection or deselection in the UI.
- When column `type` is **checkbox**, Gantt `selectionSettings` defaults to multiple selection.
- If multiple **checkbox** columns exist, selecting one auto-selects others in the same row.

> To learn more about how to render boolean values as checkboxes in a Syncfusion<sup style="font-size:70%">&reg;</sup> GanttColumn, please refer to the [Render Boolean Values as Checkbox](../../gantt/columns/columns#render-boolean-value-as-checkbox) section.

## Column width

In Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt for TypeScript, column width can be adjusted using the [width](../../api/gantt#width) property within the [column](../../api/gantt#columns) configuration. This property accepts values in pixels (e.g., **100**) or percentages (e.g., **25%**) to define the column's width relative to the Gantt container.

1. Column width is calculated based on the total available width. For example, in a container with 4 columns and a total width of 800 pixels, each column will default to 200 pixels.
2. If widths are defined for some columns but not others, the remaining width is distributed equally among columns without explicit widths. For example, if you have 3 columns with widths of 100px, 200px, and no width specified for the third column, the third column will occupy the remaining width after accounting for the first two columns.
3. Percentage-based widths are responsive and adjust dynamically when the Gantt container is resized. For example, a column with a width of 50% will occupy 50% of the gantt width and will adjust proportionally when the gantt container is resized to a smaller size.
4. When columns are manually resized, a minimum width is enforced to maintain readability. By default, this minimum is set to 10 pixels unless specified otherwise.
5. If the total column width exceeds the container width, a horizontal scrollbar appears to enable scrolling.
6. The Gantt Chart control inherits the width of its parent element. If the parent has a fixed width, the Gantt will occupy that space; otherwise, it adjusts dynamically based on available space.

> To learn more about resizing, you can refer to the resizing section [here](../../gantt/columns/column-resizing)

#### Supported types for column width

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt supports the following three types of column width:

**1. Auto**

The column width is automatically calculated based on the content within the column cells. If the content exceeds the width of the column, it will be truncated with an ellipsis (...) at the end. You can set the width for columns as **auto** in your Gantt configuration as shown below:

```js
    { field: 'TaskID', headerText: 'TaskID', textAlign: 'Right', width: 'auto' },
```

**2. Percentage**

The column width is specified as a percentage value relative to the width of the gantt container. For example, a column width of 25% will occupy 25% of the total gantt width. You can set the width for columns as **percentage** in your Gantt configuration as shown below:

```js
    { field: 'TaskID', headerText: 'TaskID', textAlign: 'Right', width: '30%' },
```

**3. Pixel**

The column width is specified as an absolute pixel value. For example, a column width of 100px will have a fixed width of 100 pixels regardless of the gantt container size. You can set the width for columns as **pixel** in your Gantt configuration as shown below:

```js
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs10" %}
{% endif %}

## Column formatting

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control for TypeScript supports column formatting to customize data presentation. You can format numbers, dates, or apply templates based on specific requirements. Use the [columns.format](../../api/gantt/column#format) property to define the desired format for each column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs11" %}
{% endif %}

> - The Gantt uses the [Internalization](../../common/globalization/internationalization) library to format values based on the specified format and culture.
> - By default, the [number](../../common/globalization/internationalization#number-formatting) and [date](../../common/globalization/internationalization#date-formatting) values are formatted in **en-US** locale. You can localize the currency and date in different locale as explained [here](../../common/globalization/localization).
> - The available format codes may vary depending on the data type of the column.
> - You can also customize the formatting further by providing a custom function to the [format](../../api/gantt/column#format) property, instead of a format string.
> - Make sure that the format string is valid and compatible with the data type of the column, to avoid unexpected results.

### Number formatting

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control for TypeScript supports number formatting through the [columns.format](../../api/gantt/column#format) property, where standard format strings define numeric value presentation including currency, percentage, and decimal formats. The following standard format strings are available:

| Format | Description       | Remarks                                                               |
| ------ | ----------------- | --------------------------------------------------------------------- |
| N      | Numeric format    | Use `N2`, `N3`, etc., to set the number of decimal places.            |
| C      | Currency format   | Use `C2`, `C3`, etc., to define precision for currency values.        |
| P      | Percentage format | Input should be between 0 and 1; `P2`, `P3`, etc., control precision. |

The following example code demonstrates the formatting of data for the **TaskID** column using the **N** format, the **Progress** column using the **P** format, and a currency column using the **C** format.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs12" %}
{% endif %}

> To learn more about number formatting, you can refer to the [number](../../common/globalization/internationalization#number-formatting) section.

### Date formatting

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control for TypeScript supports date formatting in columns using the [columns.format](../../api/gantt/column#format) property, where format strings such as **d**, **D**, **MMM dd, yyyy** can be applied. Both built-in formats like **yMd** and custom formats are supported to define the layout and detail of date and time values based on column requirements. The following custom formats and their corresponding output are listed below:

| Format                                                | Formatted value        |
| ----------------------------------------------------- | ---------------------- |
| { type:'date', format:'dd/MM/yyyy' }                  | 04/07/2026             |
| { type:'date', format:'dd.MM.yyyy' }                  | 04.07.2026             |
| { type:'date', skeleton:'short' }                     | 7/4/26                 |
| { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }    | 04/07/2026 12:00 AM    |
| { type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/2026 12:00:00 AM |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs13" %}
{% endif %}

> To learn more about date formatting, you can refer to [Date formatting](../../common/globalization/internationalization#date-formatting).

### Format the date column based on localization

You can format the date column in Gantt Chart control based on localization settings by using the [format](../../api/gantt/column#format) property to define the date pattern and the [locale](../../api/gantt#locale) property to apply regional settings.

The following example demonstrates the `format` property specifies the date format as **yyyy-MMM-dd**, and the `locale` property specifies the locale as **es-AR** for Spanish (Argentina).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs14" %}
{% endif %}

### Format template column value

You can customize the appearance of values in Gantt template columns using HTML markup and number formatting. To format values, use TypeScript pipes along with the [format](../../api/gantt/column#format) property. In this example, the date pipe formats the **StartDate** value as `'dd/MMM/yyyy'`.

{% if page.publishingplatform == "typescript" %}

```ts
template: (props: any) => {
  let date: Date = new Date(props.StartDate);
  return (
    date.getFullYear() +
    "/" +
    date.toLocaleString("default", { month: "short" }) +
    "/" +
    date.getDate()
  );
};
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

```js
template: function (props) {
                var date = new Date(props.StartDate);
                return date.getFullYear() + '/' +
                    date.toLocaleString('default', { month: 'short' }) + '/' +
                    date.getDate();
            }
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs15" %}
{% endif %}

> In TypeScript, you can use JavaScript or TypeScript formatting utilities like **Intl.NumberFormat** or **toLocaleString()** to format values such as **dates**, **currency**, **decimals**, or **percentages** in column templates based on your requirements.

### Custom formatting

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control supports custom formatting for numeric and date values. You can use the [format](../../api/gantt/column#format) property to display data in a specific format based on requirements.

In the example below, `numberFormatOptions` is used for the **Progress** column to show four decimal places, and `dateFormatOptions` is used for the **StartDate** column to display the date as day-of-week, month abbreviation, day, and 2-digit year (e.g., Sun, May 8, '23).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs16" %}
{% endif %}

> To learn more about custom formatting, you can refer to [Custom Date formatting](../../common/internationalization#custom-formats) and [Custom Number formatting](../../common/internationalization#custom-number-formatting-and-parsing).

## Align the text of content

You can use the [textAlign](../../api/gantt/column#textalign) property in Gantt Chart control to set the alignment of text within column cells. By default, the text is aligned to the **left**. The available options are:

- **Left**: Aligns the text to the left (default).
- **Center**: Aligns the text to the center.
- **Right**: Aligns the text to the right.
- **Justify**: Align the text to the justify.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs17" %}
{% endif %}

> - The `textAlign` property changes the alignment for both the column content and header. If you want to align header differently, you can use the [headerTextAlign](https://ej2.syncfusion.com/documentation/api/gantt/column#headertextalign) property.

## Render boolean value as checkbox

You can render boolean values as checkboxes in Gantt Chart control by setting the [displayAsCheckBox](../../api/gantt/column#displayascheckbox) property to **true** for the desired column. This replaces the default text representation of **true** or **false** with a checkbox, making boolean fields visually clearer and more intuitive.

The following sample demonstrates how to display a boolean value as a checkbox for the **Verified** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/checkbox-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/checkbox-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/checkbox-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/checkbox-cs1" %}
{% endif %}

> - The `displayAsCheckBox` property is only applicable to boolean values in Gantt columns.
> - When `displayAsCheckBox` is set to **true**, the boolean values will be rendered as checkboxes in the Gantt column, with checked state indicating **true** and unchecked state indicating **false**.

### How to prevent checkbox for particular row

You can prevent the checkbox from rendering in a specific row of the Gantt even when [displayAsCheckBox](../../api/gantt/column#displayascheckbox) is set to **true** for the column. This can be done using the [rowDataBound](../../gantt/events#rowdatabound) event, where you check the row index and conditionally set the inner HTML of the target cell to an empty string to hide the checkbox.

The following sample hides the checkbox for the row with `ariaRowIndex` set to 3.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/checkbox-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/checkbox-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/checkbox-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/checkbox-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/checkbox-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/checkbox-cs2" %}
{% endif %}

## AutoFit columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control for TypeScript supports automatic column width adjustment based on content. Double-clicking the column header resizer adjusts the width to fit the maximum content, ensuring clear data visibility without wrapping.

To enable this feature, set [allowResizing](../../api/gantt#allowresizing) to **true** and inject `Resize` in the Gantt Chart control.

The following screenshot represents the resizing the column using resizer symbol.

![Resizing](../images/resizing.gif)

### Resizing a column to fit its content using method support

You can resize a column in Gantt to fit its content using the `autoFitColumns` method from the `treeGrid` object. This adjusts the column width based on the widest cell without wrapping. To apply this during initial rendering, call the method in the [dataBound](../../gantt/events#databound) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/autofit-columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/autofit-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/autofit-columns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/autofit-columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/autofit-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/autofit-columns-cs1" %}
{% endif %}

> You can autofit all the columns by invoking the `autoFitColumns` method without specifying column names.

## Locked columns

You can lock columns in Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control to prevent them from being reordered and to keep them fixed at the first position. This is achieved by setting the `column.lockColumn` property to **true** in the column configuration. To visually differentiate locked columns, you can apply custom CSS using attribute selectors.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/lock-columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/lock-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/lock-columns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/lock-columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/lock-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/lock-columns-cs1" %}
{% endif %}

## Show or hide columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control allows dynamic control over column visibility using built-in properties and methods. This is useful for customizing which columns are shown or hidden based on specific requirements.

### Using property

You can control the visibility of columns in the TypeScript Gantt Chart control by setting the [visible](../../api/gantt/column#visible) property of each column to **true** or **false**.

The following example illustrates how to dynamically toggle the visibility of the **Duration** column. Initially, the column is set with the `visible` property as **false**. When the switch control triggers a `change` event, the `getColumnByField` method retrieves the column, its `visible` property is updated based on the switch state, and `refreshColumns` is called to apply the changes to the UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/show-columns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/show-columns-cs1" %}
{% endif %}

> - Hiding a column using the `visible` property affects only its display; the data remains accessible in the source.
> - Hidden columns are excluded from the total width calculation.
> - To keep a column hidden permanently, set `visible` to **false** or remove its definition.

### Using methods

You can also show or hide columns in the TypeScript Gantt Chart control using the [showColumn](../../api/gantt#showcolumn) and [hideColumn](../../api/gantt#hidecolumn) methods available in the Gantt. These methods allow you to control column visibility based on either the [headerText](../../api/gantt/column#headertext) or the [field](../../api/gantt/column#field) property.

**Based on header text:**

You can dynamically show or hide columns by passing either a single header text or an array of header texts as the first parameter, and specifying `headerText` as the second parameter. This enables dynamic control over column visibility based on the displayed header.

You can use the `getGanttColumns` method to retrieve all defined columns, and the `getVisibleColumns` method to get only the visible columns.

The following sample demonstrates how to hide and show columns using button clicks. When the **Hide Column** button is clicked, the `hideColumn` method is called with **Duration** as the first parameter and `headerText` as the second. Clicking the **Show Column** button restores the column using the `showColumn` method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-columns-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/show-columns-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-columns-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/show-columns-cs2" %}
{% endif %}

**Based on field:**

You can dynamically show or hide columns by passing either a single field name or an array of field names as the first parameter, and `field` as the second parameter to indicate that visibility is controlled using the field name.

The following sample demonstrates how to hide and show columns using button clicks. When the **Hide Column** button is clicked, the `hideColumn` method is triggered with `['TaskName', 'Duration']` as the first parameter and `field` as the second. Clicking the **Show Column** button displays the columns again using the `showColumn` method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-hide-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-hide-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/show-hide-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-hide-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/show-hide-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/show-hide-cs1" %}
{% endif %}

## Controlling Gantt actions

You can manage actions like filtering, sorting, resizing, reordering, editing, and searching for specific columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt using the following options:

- [allowEditing](../../api/gantt/columnModel#allowediting): Enables or disables editing for a column.
- [allowFiltering](../../api/gantt/columnModel#allowfiltering): Enables or disables filtering for a column.
- [allowSorting](../../api/gantt/columnModel#allowsorting): Enables or disables sorting for a column.
- [allowReordering](../../api/gantt/columnModel#allowreordering): Enables or disables reordering for a column.
- [allowResizing](../../api/gantt/columnModel#allowresizing): Enables or disables resizing for a column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/grid-actions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/grid-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/grid-actions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/grid-actions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/grid-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/grid-actions-cs1" %}
{% endif %}

## Customize column styles

Customizing Gantt column styles allows you to modify the appearance to match your design needs. You can customize font, background color, and other style attributes using supported events, CSS, properties, or methods.

For more information check on this [documentation](../../gantt/style-and-appearance).

## Updating column definitions

To update column definitions in TypeScript Gantt Chart control, modify the [columns](../../api/gantt/column) property to adjust column appearance and behavior by changing attributes like [headerText](../../api/gantt/column#headertext), [width](../../api/gantt/column#width), or [visible](../../api/gantt/column#visible). After making the required updates, use the `refreshColumns` method from the `treeGrid` object to apply and reflect the changes in the Gantt chart.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs18" %}
{% endif %}

## Adding/removing columns

You can add or remove columns in the TypeScript Gantt by updating the [columns](../../api/gantt/column) option in the Gantt instance. To add a column, **push** a new column object into the `columns` array. To remove a column, use **pop** to delete the last item or `splice` to remove a specific one from the array.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs19" %}
{% endif %}

## Responsive columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control provides a built-in feature to control column visibility based on media queries using the `hideAtMedia` property in the column object. This method can be used to hide columns automatically when the screen width matches specified [media query](http://cssmediaqueries.com/what-are-css-media-queries.html) conditions.

The following example demonstrates a Gantt chart where the **Task Name** column is set to `(min-width: 700px)`, meaning it will be hidden when the browser width is less than or equal to 700px. Similarly, the **Duration** column is set to `(max-width: 500px)`, so it will be hidden when the browser width exceeds 500px.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs8" %}
{% endif %}

## Clip mode

The clip mode provides options to display overflow cell content using the [columns.clipMode](../../api/gantt/columnModel#clipmode) property. The following are three types of `clipMode`:

- **Clip**: Truncates content that exceeds the cell width.
- **Ellipsis**: Displays ellipsis when content exceeds the cell area.
- **EllipsisWithTooltip**: Displays ellipsis and shows full content in a tooltip on hover.

> By default, all the column's [clipMode](../../api/gantt/columnModel#clipmode) property is defined as **EllipsisWithTooltip**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columns-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columns-cs20" %}
{% endif %}
