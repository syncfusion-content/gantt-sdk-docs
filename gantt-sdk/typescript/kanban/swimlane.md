---
layout: post
title: Swimlanes in TypeScript Kanban | Syncfusion
description: Learn how to configure swimlanes in Syncfusion TypeScript Kanban to group and organize cards by categories or resources.
keywords: typescript kanban swimlane, syncfusion kanban, grouping, card grouping
canonical: https://help.syncfusion.com/gantt-sdk/typescript/kanban/swimlane
platform: gantt-sdk
control: Swimlane - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Swimlane Grouping in TypeScript Kanban

Swimlanes are horizontal categorizations of cards on the Kanban board.  It is used for grouping of cards, which brings transparency to the workflow process.

## Render swimlane row

Cards can be grouped based on `keyField` and displayed in rows, which are separated by columns. It is mandatory to define the `keyField` that is mapped from the datasource for rendering swimlane rows in the Kanban board.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-key-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/swimlane-key-cs1" %}

## Custom row text

Customize the swimlane row header text by using the `textField` property mapped from datasource.

> It is not mandatory to define the `textField` to `swimlaneSettings`.  It will automatically consider the `keyField` to swimlane row header text.
> If the mapping `textField` key is not present in the datasource, it will consider the swimlane `keyField` as swimlane row header text.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-text-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-text-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/swimlane-text-cs1" %}

## Template

You can customize the Kanban swimlane row by using the `template` property, which is specified within the `swimlaneSettings` property. In this demo, the swimlane header is customized with HTML element.

You can get the following swimlane data when using a swimlane template.

* keyField
* textField
* count

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/swimlane-template-cs1" %}

## Sorting

Swimlane rows are rendered on descending order when using the `sortBy` property set to `Descending` order. By default, swimlane rows are rendered by **Ascending** order.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-sort-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-sort-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/swimlane-sort-cs1" %}

## Drag-and-drop

By default, The Kanban does not allow dragging the cards across the swimlane rows. Enabling the `dragAndDrop` property allows you to drag the cards across the swimlane rows, which is specified inside `swimlaneSettings` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-drag-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-drag-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/swimlane-drag-cs1" %}

## Create empty row

You can render the empty swimlane row by enabling the `showEmptyRow` property.  If mapping `keyField` does not have cards, empty swimlane row will be rendered.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-empty-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-empty-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/swimlane-empty-cs1" %}

## Calculate cards count

Users can show or hide the cards count by swimlane row in header when enabling the `showItemCount` property, which is enabled by default on the Kanban board.

> Provided localization support for **items** text.

In below demo, disabled on `showItemCount` property on rendering swimlane row without total count.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-total-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/swimlane-total-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/swimlane-total-cs1" %}

## Enable frozen rows

Frozen rows provide an option to make the current swimlane row header text always visible on top of the content while scrolling the Kanban content. The swimlane header text will be changed dynamically, when you scroll to another swimlane row.

By default, the `enableFrozenRows` property is set as `false`. If you wish to show the swimlane frozen rows, you can enable the `enableFrozenRows` property.

> This feature support only when using Kanban content scrolling.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/enable-frozen-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/enable-frozen-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/enable-frozen-cs1" %}
