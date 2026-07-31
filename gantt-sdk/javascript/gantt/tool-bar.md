---
layout: post
title: Toolbar in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about toolbar in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Toolbar
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Toolbar in JavaScript Gantt Chart Control

The JavaScript Gantt Chart control includes built-in toolbar support for executing common actions such as editing, searching, and navigating the timeline. The [toolbar](../api/gantt#toolbar) property accepts the collection of built-in toolbar items and `ItemModel` objects for custom toolbar items.

## Built-in toolbar items

Built-in toolbar items allow you to perform standard operations directly from the Gantt interface. These items can be added to the toolbar by specifying the [toolbar](../api/gantt#toolbar) property as a collection of predefined items. Each toolbar item appears as a button with an associated icon and label for intuitive interaction.

The following table shows built-in toolbar items and its actions.

| Built-in Toolbar Items | Actions                                            |
| ---------------------- | -------------------------------------------------- |
| ExpandAll              | Expands all the rows.                              |
| CollapseAll            | Collapses all the rows.                            |
| Add                    | Adds a new record.                                 |
| Edit                   | Edits the selected record.                         |
| Indent                 | Indent the selected record to one level.           |
| Outdent                | Outdents the selected record to one level.         |
| Update                 | Updates the edited record.                         |
| Delete                 | Deletes the selected record.                       |
| Cancel                 | Cancels the edit state.                            |
| Search                 | Searches the records by the given key.             |
| PrevTimeSpan           | Navigate the Gantt timeline to previous time span. |
| NextTimeSpan           | Navigate the Gantt timeline to Next time span.     |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-cs1" %}
{% endif %}

> - The [toolbar](../api/gantt#toolbar) has options to define both built-in and custom toolbar items.

### Customize the built-in toolbar items

You can modify built-in toolbar actions using the [toolbarClick](../api/gantt#toolbarclick) event. The following example disables the default functionality of the **Add** button, allowing you to override its behavior and display a custom message when it's clicked.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-custom-action/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-custom-action/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-custom-action" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-custom-action/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-custom-action/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-custom-action" %}
{% endif %}

### Show only icons in built-in toolbar items

To show only icons in the built-in toolbar items, apply custom CSS to hide the text labels. Use the following style:

```css
.e-gantt .e-toolbar .e-tbar-btn-text,
.e-gantt .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
  display: none;
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-cs2" %}
{% endif %}

## Customize toolbar buttons using CSS

You can customize the appearance of toolbar buttons in the Gantt Chart control using CSS. Use the following class selectors to target the toolbar icons and buttons:

```css
.e-gantt .e-toolbar .e-tbar-btn .e-icons,
.e-gantt .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn {
  background: #add8e6;
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-button/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-button/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-button" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-button/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-button/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-button" %}
{% endif %}

## Add toolbar at the bottom of gantt

To reposition the toolbar to the bottom of the Gantt chart, use the [created](../api/gantt#created) event to manipulate the DOM. In this event, select the toolbar element and append it to the Gantt container using DOM manipulation. This moves the toolbar to the bottom of the layout.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-position/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-position/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-position" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-position/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-position/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-position" %}
{% endif %}

## Custom toolbar items

You can add custom items to the Gantt chart toolbar by setting the [toolbar](../api/gantt#toolbar) property with a collection of `ItemModel` objects. The actions associated with these custom toolbar items can be handled using the [toolbarClick](../api/gantt#toolbarclick) event.

By default, custom toolbar items are aligned to the left. However, you can change their position using the `align` property. In the example below, the **Collapse All** toolbar item is aligned to the right.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/custom-toolbar/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/custom-toolbar/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/custom-toolbar" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/custom-toolbar/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/custom-toolbar/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/custom-toolbar" %}
{% endif %}

> - If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Built-in and custom items in toolbar

The Gantt control supports using both built-in and custom toolbar items simultaneously. In this example, **ExpandAll** and **CollapseAll** are built-in items, while **Test** and **Schedule** is a custom item added to the toolbar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/toolbar-cs3" %}
{% endif %}

## Enable/disable toolbar items

You can control toolbar items dynamically using the [enableItems](../api/gantt#enableitems) method. This allows you to enable or disable specific items based on user actions or application state.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/enable-disabletoolbarItems-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/enable-disabletoolbarItems-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/enable-disabletoolbarItems-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/enable-disabletoolbarItems-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/enable-disabletoolbarItems-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/enable-disabletoolbarItems-cs1" %}
{% endif %}

## Add input elements to toolbar

You can enhance the Gantt toolbar control by adding editor elements such as numeric text boxes, drop-down lists, and date pickers. These input controls improve user interaction by enabling filtering, searching, and other dynamic actions.

The following example demonstrates how to integrate an [AutoComplete](../../auto-complete/getting-started) compoenent into the toolbar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/customToolbarItems-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/customToolbarItems-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/customToolbarItems-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/customToolbarItems-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/customToolbarItems-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/customToolbarItems-cs1" %}
{% endif %}
