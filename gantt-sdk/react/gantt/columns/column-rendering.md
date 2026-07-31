---
layout: post
title: Column Rendering in React Gantt Chart Component | Syncfusion
description: Learn here all about column rendering in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Column rendering
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Rendering in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports column rendering to control data presentation. Column definitions act as the data schema and support operations such as sorting and filtering. The [field](https://ej2.syncfusion.com/react/documentation/api/gantt/column#field) property is required to map data source values to columns and must be defined for features like complex binding and template-based actions.

> - If the `field` is not defined in the [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt#datasource), the column will display empty values.
> - To enable CRUD, filtering, or searching, the `field` must be defined for template columns.

## Define columns manually

To manually define columns in the Gantt Chart component, use `e-columns` and set properties like [field](https://ej2.syncfusion.com/react/documentation/api/gantt/column#field), [headerText](https://ej2.syncfusion.com/react/documentation/api/gantt/column#headertext) and [width](https://ej2.syncfusion.com/react/documentation/api/gantt/column#width). This enables customization of column behavior and appearance based on specific requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs1" %}

## Auto generated columns

The Gantt Chart component automatically generates columns when the [columns](https://ej2.syncfusion.com/react/documentation/api/gantt#columns) property is either empty or undefined during initialization, binding all fields from the [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt#datasource) as individual Gantt columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs2" %}

## Dynamic column generation

You can dynamically generate columns in the Gantt Chart component at runtime based on the provided data. This is useful when the column structure needs to adapt to user requirements or dynamic data sources.

### Using valueAccessor property

The [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/gantt/column#valueaccessor) property is used to format column data in the Gantt Chart component. It accepts a function that returns a custom display value using the following two arguments:

- `field`: The column's data field.
- `data`: The data record for the row.

In the following example, `percentageFormatter` returns the progress value with a `%` sign, while `concatenateFields` returns a combined string of **TaskName** and **TaskID**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs3" %}

> The `valueAccessor` function may impact performance when used with large datasets or complex logic. To improve rendering speed, enable the virtualization feature so that only visible rows are processed and displayed.

### Display array type columns

The Gantt Chart component supports binding an array of objects to a column using the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/gantt/column#valueaccessor) property. It accepts a function that returns a custom display value, which is then displayed in the column.

In the following example, the **Name** column shows the combined value of **FirstName** and **LastName** by using a custom function defined in `valueAccessor`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs4" %}

> Since customized values are displayed in the **Name** column, data operations, such as sorting and filtering, cannot be performed for this column.

### Expression column

You can achieve an expression column in the Gantt Chart component using the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/gantt/column#valueaccessor) property. It accepts a function that returns a calculated value, which is displayed in the column based on other column values.

In the following example, the chart includes columns like **TaskID**, **TaskName**, **Duration**, **Progress**, **units**, and **unit price**. A **Total Price** column is added to display the result of multiplying **units** and **unit price** for each row.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs5" %}

> Since custom values are displayed in the **Total Price** column, operations like sorting and filtering are not supported for this column.

### Display serial number

You can display serial numbers for each row in the Gantt Chart component using the [rowDataBound](https://ej2.syncfusion.com/react/documentation/gantt/events#rowdatabound) event. This event triggers when data is bound to each row, allowing you to assign and display a serial number directly in the column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/column-rendering-cs6" %}

> Since custom values are displayed in the **S.No** column, data operations such as sorting and filtering are not supported for this column.
