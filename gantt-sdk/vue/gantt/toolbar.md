---
layout: post
title: Toolbar in Vue Gantt Chart Component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Toolbar
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Toolbar in Vue Gantt Chart Component

The Gantt Chart component provides the toolbar support to handle Gantt actions. The [toolbar](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbar) property accepts the collection of built-in toolbar items and `ItemModel` objects for custom toolbar items.

To use toolbar feature, inject the `Toolbar` module in the `provide` section.

To learn about Gantt Chart Toolbar Options, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=LvB4lvlm1J8" %}

## Built-in toolbar items

Built-in toolbar items execute standard actions of the Gantt Chart component, and these items can be added to toolbar by defining the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbar) as a collection of built-in items. It renders the button with icon and text.

The following table shows built-in toolbar items and its actions.

| Built-in Toolbar Items | Actions                                            |
| ---------------------- | -------------------------------------------------- |
| ExpandAll              | Expands all the rows.                              |
| CollapseAll            | Collapses all the rows.                            |
| Add                    | Adds a new record.                                 |
| Edit                   | Edits the selected record.                         |
| Indent                 | Indent the selected record to one level.           |
| Outdent                | Outdent the elected record to one level.           |
| Update                 | Updates the edited record.                         |
| Delete                 | Deletes the selected record.                       |
| Cancel                 | Cancels the edit state.                            |
| Search                 | Searches the records by the given key.             |
| PrevTimeSpan           | Navigate the Gantt timeline to previous time span. |
| NextTimeSpan           | Navigate the Gantt timeline to Next time span.     |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/toolbar-cs1" %}

> - The [toolbar](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbar) has options to define both built-in and custom toolbar items.

## Custom toolbar items

Custom toolbar items can be added to the toolbar by defining the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbar) property as a collection of `ItemModels`.
Actions for this customized toolbar items are defined in the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbarclick) event.

By default, the custom toolbar items are at left position. You can change the position by using the `align` property. In the following sample, the `Quick Filter` toolbar item is positioned at right.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/toolbar-cs2" %}

> - The [toolbar](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbar) has options to define both built-in and custom toolbar items.
> - If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Built-in and custom items in toolbar

The Gantt Chart component has an option to use both built-in and custom toolbar items at the same time.

In the following example, the `ExpandAll` and `CollapseAll` are built-in toolbar items and `Test` is the custom toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/toolbar-cs3" %}

## Enable/disable toolbar items

You can enable or disable the toolbar items by using the `enableItems` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/toolbar-cs4" %}

## Add input elements in toolbar

In the Gantt toolbar, you can add EJ2 editor elements like numeric text box, drop-down list, and date picker controls. The following code snippets demonstrates how to add EJ2 editors to the Gantt toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/toolbar-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/toolbar-cs5" %}
