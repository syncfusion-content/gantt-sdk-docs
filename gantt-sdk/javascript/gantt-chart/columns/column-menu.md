---
layout: post
title: Column Menu in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about column menu in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Column menu 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Menu in JavaScript Gantt Chart Control

The column menu in the JavaScript Gantt Chart control offers built-in actions including sorting, filtering, column chooser, and autofit. When you click the column menu icon, a menu appears with these features.

To activate the column menu feature, set the [showColumnMenu](../../api/gantt#showcolumnmenu) property to **true** in the Gantt configuration and inject the `ColumnMenu` service in the Gantt Chart control.

The following built-in column menu items are available:

| Item           | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SortAscending  | Sorts the column in ascending order.                                                                                                  |
| SortDescending | Sorts the column in descending order.                                                                                                 |
| AutoFit        | Adjusts the width of the current column.                                                                                              |
| AutoFitAll     | Adjusts the width of all columns.                                                                                                     |
| ColumnChooser  | Allows toggling column visibility .                                                                                                   |
| Filter         | Displays filter options based on [filterSettings.type](../../api/gantt/filtersettings#type). |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/columns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/columns-cs1" %}
{% endif %}

> * You can disable the column menu for specific columns by setting [columns.showColumnMenu](../../api/gantt/column#showcolumnmenu) to **false**.

> * You can customize the default column menu items by defining [columnMenuItems](../../api/gantt#columnmenuitems) with only the required items.

## Add a custom column menu item

The JavaScript Gantt Chart control allows adding custom items to the column menu using the [columnMenuItems](../../api/gantt#columnmenuitems) property, which accepts a set of `columnMenuItemModel` objects.

Define the behavior of custom items through the [columnMenuClick](../../gantt/events#columnmenuclick) event.

The following example demonstrates how to add a custom column menu item to clear the sorting in the Gantt chart.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/columnMenu-custom-item-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/columnMenu-custom-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/columnMenu-custom-item-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/columnMenu-custom-item-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/columnMenu-custom-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/columnMenu-custom-item-cs1" %}
{% endif %}

## Customize column menu items per column

Control the visibility of column menu items for specific columns by using the [columnMenuOpen](../../gantt/events#columnmenuopen) event. To hide an item, set `args.hide` to **true** for the target item.

The following example demonstrates hiding the **Filter** item when the column menu opens for the **TaskName** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/colMenu-customAction-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/colMenu-customAction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/colMenu-customAction-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/colMenu-customAction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/colMenu-customAction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/colMenu-customAction-cs1" %}
{% endif %}

## Render nested column menu items

Extend the column menu in Gantt Chart control by adding nested items using the [columnMenuItems](../../api/gantt#columnmenuitems) property. This property accepts an array of built-in item names or custom objects to define additional actions.

The following example demonstrates how to configure `columnMenuItems` to include a nested menu.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs1" %}
{% endif %}

## Customize the column menu icon

Customize the default column menu icon in Gantt Chart control by overriding the **.e-icons.e-columnmenu** class using the `content` CSS property. This allows you to use a Unicode character or a custom icon font.

To customize the column menu icon, follow these steps:

**1.** Add custom CSS to override the default icon:

```css
.e-gantt .e-columnheader .e-icons.e-columnmenu::before {
  content: "\e99a";
}
```

**2.** Import the required icon stylesheets (e.g., Material or Bootstrap5):

```html
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/column-menu-cs2" %}
{% endif %}