---
layout: post
title: Column Menu in React Gantt Chart Component | Syncfusion
description: Learn here all about column menu in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Column menu
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Menu in React Gantt Chart Component

The column menu in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component offers built-in actions including sorting, filtering, column chooser, and autofit. When you click the column menu icon, a menu appears with these features.

To activate the column menu feature, set the [showColumnMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#showcolumnmenu) property to **true** in the Gantt configuration and inject the `ColumnMenu` service in the Gantt Chart component.

The following built-in column menu items are available:

| Item           | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SortAscending  | Sorts the column in ascending order.                                                                                                  |
| SortDescending | Sorts the column in descending order.                                                                                                 |
| AutoFit        | Adjusts the width of the current column.                                                                                              |
| AutoFitAll     | Adjusts the width of all columns.                                                                                                     |
| ColumnChooser  | Allows toggling column visibility .                                                                                                   |
| Filter         | Displays filter options based on [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings#type). |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs1" %}

> - You can disable the column menu for specific columns by setting [columns.showColumnMenu](https://ej2.syncfusion.com/react/documentation/api/gantt/column#showcolumnmenu) to **false**.
> - You can customize the default column menu items by defining [columnMenuItems](https://ej2.syncfusion.com/react/documentation/api/gantt#columnmenuitems) with only the required items.

## Add a custom column menu item

The React Gantt Chart component allows adding custom items to the column menu using the [columnMenuItems](https://ej2.syncfusion.com/react/documentation/api/gantt#columnmenuitems) property, which accepts a set of `columnMenuItemModel` objects.

Define the behavior of custom items through the [columnMenuClick](https://ej2.syncfusion.com/react/documentation/gantt/events#columnmenuclick) event.

The following example demonstrates how to add a custom column menu item to clear the sorting in the Gantt chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/colmenu-item-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/colmenu-item-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/colmenu-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/colmenu-item-cs1" %}

## Customize column menu items per column

Control the visibility of column menu items for specific columns by using the [columnMenuOpen](https://ej2.syncfusion.com/react/documentation/gantt/events#columnmenuopen) event. To hide an item, set `args.hide` to **true** for the target item.

The following example demonstrates hiding the **Filter** item when the column menu opens for the **TaskName** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/colmenu-action-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/colmenu-action-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/colmenu-action-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/colmenu-action-cs1" %}

> - You can disable the column menu for a specific column by setting [column.showColumnMenu](https://ej2.syncfusion.com/react/documentation/api/gantt/column#showcolumnmenu) to **false**.

## Render nested column menu items

Extend the column menu in Gantt Chart component by adding nested items using the [columnMenuItems](https://ej2.syncfusion.com/react/documentation/api/gantt#columnmenuitems) property. This property accepts an array of built-in item names or custom objects to define additional actions.

The following example demonstrates how to configure `columnMenuItems` to include a nested menu.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs2" %}

## Customize the column menu icon

Customize the default column menu icon in Gantt Chart component by overriding the **.e-icons.e-columnmenu** class using the `content` CSS property. This allows you to use a Unicode character or a custom icon font.

To customize the column menu icon, follow these steps:

**1.** Add custom CSS to override the default icon:

```css
.e-gantt .e-columnheader .e-icons.e-columnmenu::before {
  content: "\e99a";
}
```

**2.** Import the required icon stylesheets (e.g., Material or Bootstrap5):

```html
<link
  href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/tailwind3.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css"
  rel="stylesheet"
/>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnmenu-cs3" %}