---
layout: post
title: Excel Like Filter in React Gantt Chart Component | Syncfusion
description: Learn here all about excel like filter in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Excel like filter 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Excel-like Filtering in React Gantt Chart Component

The Excel-like filter in [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables column-level filtering similar to Microsoft Excel. It supports sorting, clearing filters, and applying advanced conditions through a submenu available in each column header. This feature is highly effective for working with large datasets and applying multiple filter criteria.

To enable this feature, configure [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/gantt/filtersettings#type) as **Excel** and set [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowfiltering) to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filtering-cs1" %}

## Show customized text in checkbox list data

To customize the text displayed in a checkbox list, use `filterItemTemplate` and assign it to the desired column. This allows rendering custom content for each item in the filter list.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs1" %}

## Hide Excel filter dialog elements

You can hide elements such as the context menu, search box, sorting options, and checkbox list in the Gantt Excel filter dialog using the following CSS:

```css

.e-gantt .e-excelfilter .e-contextmenu-wrapper {
    display: none;
}

```

If you want to hide only the built-in sorting options (ascending, descending, and separator), apply the following CSS:

```css
 .e-excel-ascending,
 .e-excel-descending,
 .e-separator.e-excel-separator {
    display: none;
  }

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs2" %}

## Customize filter choice count

The React Gantt Chart component displays up to 1000 distinct values per column in the filter dialog by default. These values are taken from the first 1000 records bound to the component and shown as checkbox list items to maintain optimal performance. Additional values can be accessed using the search option within the filter dialog.

To customize this behavior, the `filterChoiceCount` property can be adjusted to increase or decrease the number of distinct values displayed, depending on the dataset size and filtering requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs3" %}

## Bind custom remote data source for Excel-like filtering

You can dynamically bind a custom remote data source to the Excel filter in the Gantt Chart component by using a [DataManager](https://ej2.syncfusion.com/react/documentation/data/getting-started) with [WebApiAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors#web-api-adaptor). This can be done by assigning the data source directly or storing fetched data in a global variable. Then, bind it to the filter module’s `dataSource` within the [actionBegin](https://ej2.syncfusion.com/react/documentation/gantt/events#actionbegin) event when `requestType` is **filterBeforeOpen**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-filter-cs4" %}