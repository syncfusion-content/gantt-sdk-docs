---
layout: post
title: Excel Like Filter in Gantt Chart Control | Syncfusion
description: Learn here all about excel like filter in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Excel like filter
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Excel-like Filtering in TypeScript Gantt Chart Control

The Excel-like filter in Gantt Chart control enables column-level filtering similar to Microsoft Excel. It supports sorting, clearing filters, and applying advanced conditions through a submenu available in each column header. This feature is highly effective for working with large datasets and applying multiple filter criteria.

To enable this feature, configure [filterSettings.type](../../api/gantt/filtersettings#type) as **Excel** and set [allowFiltering](../../api/gantt#allowfiltering) to **true**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs1" %}
{% endif %}

## Show customized text in checkbox list data

To customize the text displayed in a checkbox list, use `filterItemTemplate` and assign it to the desired column. This allows rendering custom content for each item in the filter list.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs2" %}
{% endif %}

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

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs3" %}
{% endif %}

## Customize filter choice count

The Gantt Chart control displays up to 1000 distinct values per column in the filter dialog by default. These values are taken from the first 1000 records bound to the control and shown as checkbox list items to maintain optimal performance. Additional values can be accessed using the search option within the filter dialog.

To customize this behavior, the `filterChoiceCount` property can be adjusted to increase or decrease the number of distinct values displayed, depending on the dataset size and filtering requirements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs4" %}
{% endif %}

## Bind custom remote data source for Excel-like filtering

You can dynamically bind a custom remote data source to the Excel filter in the Gantt Chart control by using a [DataManager](../../data/getting-started) with [WebApiAdaptor](../../data/adaptors#web-api-adaptor). This can be done by assigning the data source directly or storing fetched data in a global variable. Then, bind it to the filter module's `dataSource` within the [actionBegin](../../gantt/events#actionbegin) event when `requestType` is **filterBeforeOpen**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/excel-filter-cs5" %}
{% endif %}
