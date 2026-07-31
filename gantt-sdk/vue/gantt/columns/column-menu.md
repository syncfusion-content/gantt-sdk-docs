---
layout: post
title: Column Menu in Vue Gantt Chart Component | Syncfusion
description: Learn here all about column menu in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Column menu
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Menu in Vue Gantt Chart Component

The column menu provides options for features like sorting, filtering, and autofit. A menu with the integrated features will appear when you click the multiple icon in a column. To enable the column menu, set the [showColumnMenu](https://ej2.syncfusion.com/vue/documentation/api/gantt#showcolumnmenu) property to `true`.

The default items are displayed in the following table:

| Item             | Description                                               |
| ---------------- | --------------------------------------------------------- |
| `SortAscending`  | Sort the current column in ascending order.               |
| `SortDescending` | Sort the current column in descending order.              |
| `AutoFit`        | Autofit the current column.                               |
| `AutoFitAll`     | Autofit all columns.                                      |
| `Filter`         | Show the filter option as given in `filterSettings.type`. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs3" %}

> You can disable the column menu for a specific column by setting the `columns.showColumnMenu` property to `false`.

## Column menu events

When using the column menu, the Gantt Chart component triggers the following two events:

1. The [columnMenuOpen](https://ej2.syncfusion.com/vue/documentation/api/gantt#columnmenuopen) event triggers before the column menu opens.
2. The [columnMenuClick](https://ej2.syncfusion.com/vue/documentation/api/gantt#columnmenuclick) event triggers when you click an item in the column menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs4" %}

## Custom column menu item

Custom column menu items can be added by defining the [columnMenuItems](https://ej2.syncfusion.com/vue/documentation/api/gantt#columnmenuitems) property. Actions for these custom items can be defined in the [columnMenuClick](https://ej2.syncfusion.com/vue/documentation/api/gantt#columnmenuclick) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs5" %}

## Customize menu items for specific columns

Sometimes, you may need to hide an item from the column menu for specific columns. In that case, set [columnMenuOpenEventArgs.hide](https://ej2.syncfusion.com/vue/documentation/api/grid/columnMenuOpenEventArgs) to true in the [columnMenuOpen](https://ej2.syncfusion.com/vue/documentation/api/gantt#columnmenuopen) event.

In the following sample, the **Filter** item is hidden in the column menu when it opens for the **Task Name** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs6" %}
