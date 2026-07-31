---
layout: post
title: Filter Menu in TypeScript Gantt Chart Control | Syncfusion
description: Learn here all about filter menu in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Filter menu
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter Menu in TypeScript Gantt Chart Control

The [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control offers a filter menu for each column, enabling you to filter data based on column type and supported operators such as equal, contains, greaterthan, etc. To enable this feature, set [allowFiltering](../../api/gantt#allowfiltering) to **true** and configure [filterSettings.type](../../api/gantt/filtersettings#type) as **Menu**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs2" %}
{% endif %}

> To prevent the filter menu from rendering for a specific column, set [columns.allowFiltering](../../api/gantt/column#allowfiltering) to **false**.

## Custom control in filter menu

You can customize the filter menu in the TypeScript Gantt Chart control using the `column.filter.ui` property. This allows you to replace the default filter controls with custom components such as dropdowns or textboxes for specific columns. By default, the Gantt uses AutoComplete for string columns, NumericTextBox for number columns, DatePicker for date columns, DropDownList for boolean columns, and DateTimePicker for datetime columns.

The `column.filter.ui` property supports three essential functions:

1. `create`- Initializes and renders the custom filter control inside the filter menu.
2. `write`- Populates the control with the current filter value and attaches any necessary event handlers.
3. `read` - Retrieves the selected value from the control and applies the filter to the column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/initialLoadFiltering-cs3" %}
{% endif %}

## Hide default filter icon while perform filtering through method

To hide the default filter icon from the UI when filtering is performed programmatically, apply the following CSS:

```css
.e-filtermenudiv.e-icons.e-icon-filter {
  display: none;
}
```

You can perform filtering programmatically by checking if `args.currentTarget.id` equals **performFilter**, and then calling [filterByColumn](../../api/gantt#filterbycolumn) method. If the condition is not met, use [clearFiltering](../../api/gantt#clearfiltering) to reset filters via a button click.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs2" %}
{% endif %}

## Customize the default input control of filter menu dialog

To customize the default input components in the filter menu dialog, use the `params` property inside the column's [filter](../../api/gantt/column#filter) configuration. This allows you to override default settings such as autofill, spin buttons, and sort order. This allows you to override default settings based on the column type.

You can refer to the table below for supported column types, their default components, customization examples, and API references:

| Column Type | Default control                                        | Customization                            | API Reference                                                 |
| ----------- | ------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------- |
| String      | [AutoComplete](../../auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](../../api/auto-complete/autoCompleteModel) |
| Number      | [NumericTextBox](../../numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](../../api/numerictextbox)                |
| Boolean     | [DropDownList](../../drop-down-list/getting-started)   | Eg: { params: { sortOrder:'Ascending'}}  | [DropDownList API](../../api/drop-down-list)                  |
| Date        | [DatePicker](../../datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](../../api/datepicker)                        |
| DateTime    | [DateTimePicker](../../datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](../../api/datetimepicker)                |

The following sample demonstrates how to disable the autofill feature by setting the `autofill` property to **false** for the **TaskName** column, and how to disable the spin button by setting `showSpinButton` to **false** for the **TaskID** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs1" %}
{% endif %}

## Customizing filter menu operators list

The TypeScript Gantt Chart control allows customization of the default filter operator list using the [filterSettings.operators](../../api/gantt/filterSettings#operators) property. This allows you to define a custom set of operators shown in the filter menu for each column type, improving usability and relevance.

You can configure operators for different types using the following options:

- **stringOperator** – Custom operators for string columns.
- **numberOperator** – Custom operators for number columns.
- **dateOperator** – Custom operators for date columns.
- **booleanOperator** – Custom operators for boolean columns.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/filter-menu-cs3" %}
{% endif %}
