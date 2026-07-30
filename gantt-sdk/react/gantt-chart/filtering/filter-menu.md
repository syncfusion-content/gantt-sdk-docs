---
layout: post
title: Filter Menu in React Gantt Chart Component | Syncfusion
description: Learn here all about filter menu in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Filter menu 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter Menu in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component offers a filter menu for each column, enabling you to filter data based on column type and supported operators such as equal, contains, greaterthan, etc. To enable this feature, set [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowfiltering) to **true** and configure [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/gantt/filtersettings#type) as **Menu**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filtering-cs2" %}

> To prevent the filter menu from rendering for a specific column, set [columns.allowFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt/column#allowfiltering) to **false**.

## Custom component in filter menu

You can customize the filter menu in the React Gantt Chart component using the `column.filter.ui` property. This allows you to replace the default filter controls with custom components such as dropdowns or textboxes for specific columns. By default, the Gantt uses AutoComplete for string columns, NumericTextBox for number columns, DatePicker for date columns, DropDownList for boolean columns, and DateTimePicker for datetime columns.

The `column.filter.ui` property supports three essential functions:

1. `create`- Initializes and renders the custom filter component inside the filter menu.
2. `write`- Populates the component with the current filter value and attaches any necessary event handlers. 
3. `read` - Retrieves the selected value from the component and applies the filter to the column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filtering-cs5" %}

## Hide default filter icon while perform filtering through method

To hide the default filter icon from the UI when filtering is performed programmatically, apply the following CSS: 
 
```css
.e-filtermenudiv.e-icons.e-icon-filter {
      display: none;
    }
```

You can perform filtering programmatically by checking if `args.currentTarget.id` equals **performFilter**, and then calling [filterByColumn](https://ej2.syncfusion.com/react/documentation/api/gantt#filterbycolumn) method. If the condition is not met, use [clearFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt#clearfiltering) to reset filters via a button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filtering-cs4" %}

## Customize the default input component of filter menu dialog

To customize the default input components in the filter menu dialog, use the `params` property inside the column's [filter](https://ej2.syncfusion.com/react/documentation/api/gantt/column#filter) configuration. This allows you to override default settings such as autofill, spin buttons, and sort order. This allows you to override default settings based on the column type.

You can refer to the table below for supported column types, their default components, customization examples, and API references:

| Column Type | Default component                                                                                 | Customization                            | API Reference                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| String      | [AutoComplete](https://ej2.syncfusion.com/react/documentation/auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](https://ej2.syncfusion.com/react/documentation/api/auto-complete/autoCompleteModel) |
| Number      | [NumericTextBox](https://ej2.syncfusion.com/react/documentation/numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](https://ej2.syncfusion.com/react/documentation/api/numerictextbox)                |
| Boolean     | [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started)   | Eg: { params: { sortOrder:'Ascending'}}  | [DropDownList API](https://ej2.syncfusion.com/react/documentation/api/drop-down-list)                  |
| Date        | [DatePicker](https://ej2.syncfusion.com/react/documentation/datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](https://ej2.syncfusion.com/react/documentation/api/datepicker)                        |
| DateTime    | [DateTimePicker](https://ej2.syncfusion.com/react/documentation/datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](https://ej2.syncfusion.com/react/documentation/api/datetimepicker)                |

The following sample demonstrates how to disable the autofill feature by setting the `autofill` property to **false** for the **TaskName** column, and how to disable the spin button by setting `showSpinButton` to **false** for the **TaskID** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-menu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-menu-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filter-menu-cs1" %}

## Customizing filter menu operators list

The React Gantt Chart component allows customization of the default filter operator list using the [filterSettings.operators](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings#operators) property. This allows you to define a custom set of operators shown in the filter menu for each column type, improving usability and relevance.

You can configure operators for different types using the following options: 

- **stringOperator** – Custom operators for string columns.  
- **numberOperator** – Custom operators for number columns.  
- **dateOperator** – Custom operators for date columns.  
- **booleanOperator** – Custom operators for boolean columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-menu-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-menu-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-menu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filter-menu-cs2" %}