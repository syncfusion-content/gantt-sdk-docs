---
layout: post
title: Reorder Columns in TypeScript Gantt Chart Control | Syncfusion
description: Learn how to reorder columns in the Syncfusion TypeScript Gantt Chart control using drag-and-drop or code, and how to restrict reordering for specific columns.
platform: gantt-sdk
control: Column reorder
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Rendering in TypeScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control supports column rendering to control data presentation. Column definitions act as the data schema and support operations such as sorting and filtering. The [field](../../api/gantt/column#field) property is required to map data source values to columns and must be defined for features like complex binding and template-based actions.

> - If the `field` is not defined in the [dataSource](../../api/gantt#datasource), the column will display empty values.
> - A `field` with a dot operator is treated as [complex binding](../column/column-rendering#complex-data-binding).
> - To enable CRUD, filtering, or searching, the `field` must be defined for template columns.

## Define columns manually

To manually define columns in the Gantt Chart control, use `e-columns` and set properties like [field](../../api/gantt/column#field), [headerText](../../api/gantt/column#headertext) and [width](../../api/gantt/column#width). This enables customization of column behavior and appearance based on specific requirements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs1" %}
{% endif %}

## Auto generated columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control automatically generates columns when the [columns](../../api/gantt#columns) property is either empty or undefined during initialization, binding all fields from the [dataSource](../../api/gantt#datasource) as individual Gantt columns.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs2" %}
{% endif %}

## Dynamic column generation

You can dynamically generate columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart control at runtime based on the provided data. This is useful when the column structure needs to adapt to user requirements or dynamic data sources.

### Using valueAccessor property

The [valueAccessor](../../api/gantt/column#valueaccessor) property is used to format column data in the Gantt Chart control. It accepts a function that returns a custom display value using the following two arguments:

- `field`: The column's data field.
- `data`: The data record for the row.

In the following example, `percentageFormatter` returns the progress value with a `%` sign, while `concatenateFields` returns a combined string of **TaskName** and **TaskID**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs3" %}
{% endif %}

> The `valueAccessor` function may impact performance when used with large datasets or complex logic. To improve rendering speed, enable the virtualization feature so that only visible rows are processed and displayed.

### Display array type columns

The Gantt Chart control supports binding an array of objects to a column using the [valueAccessor](../../api/gantt/column#valueaccessor) property. It accepts a function that returns a custom display value, which is then displayed in the column.

In the following example, the **Name** column shows the combined value of **FirstName** and **LastName** by using a custom function defined in `valueAccessor`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs4" %}
{% endif %}

> Since customized values are displayed in the **Name** column, data operations, such as sorting and filtering, cannot be performed for this column.

### Expression column

You can achieve an expression column in the Gantt Chart control using the [valueAccessor](../../api/gantt/column#valueaccessor) property. It accepts a function that returns a calculated value, which is displayed in the column based on other column values.

In the following example, the chart includes columns like **TaskID**, **TaskName**, **Duration**, **Progress**, **units**, and **unit price**. A **Total Price** column is added to display the result of multiplying **units** and **unit price** for each row.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs5" %}
{% endif %}

> Since custom values are displayed in the **Total Price** column, operations like sorting and filtering are not supported for this column.

### Display serial number

You can display serial numbers for each row in the Gantt Chart control using the [rowDataBound](../../gantt/events#rowdatabound) event. This event triggers when data is bound to each row, allowing you to assign and display a serial number directly in the column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/column-rendering-cs6" %}
{% endif %}

> Since custom values are displayed in the **S.No** column, data operations such as sorting and filtering are not supported for this column.
