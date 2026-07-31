---
layout: post
title: Scrolling in Vue Gantt Chart Component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Scrolling
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Scrolling in Vue Gantt Chart Component

The scrollbar will be displayed in the gantt when content exceeds the element `width` or `height`. The vertical and horizontal scrollbars will be displayed based on the following criteria:

- The vertical scrollbar appears when the total height of rows present in the gantt exceeds its element height.
- The horizontal scrollbar appears when the sum of columns width exceeds the grid pane size.
- The [height](https://ej2.syncfusion.com/vue/documentation/api/gantt#height) and [width](https://ej2.syncfusion.com/vue/documentation/api/gantt#width) are used to set the gantt height and width, respectively.

> The default value for `height` and `width` is `auto`.

## Set width and height

We can even set pixel values to width and height of gantt container using [width](https://ej2.syncfusion.com/vue/documentation/api/gantt#width) and [height](https://ej2.syncfusion.com/vue/documentation/api/gantt#height) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/scrolling-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/scrolling-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/scrolling-cs1" %}

## Responsive with the parent container

Specify the [width](https://ej2.syncfusion.com/vue/documentation/api/gantt#width) and [height](https://ej2.syncfusion.com/vue/documentation/api/gantt#height) as `100%` to make the gantt element fill its parent container.
Setting the `height` to `100%` requires the gantt parent element to have explicit height. Also, the component will be responsive when the parent container is resized.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/scrolling-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/scrolling-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/scrolling-cs2" %}

## Scroll To Date method

In the Gantt control, When We use the [scrollToDate](https://ej2.syncfusion.com/documentation/api/gantt#scrolltodate) method, it will scroll the timeline horizontally to the date that we specified in the method's argument.

The following code examples show how the scroll To Date method works in Gantt:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/scrolltodate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/scrolltodate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/how-to/scrolltodate-cs1" %}

## Set the vertical scroll position

In the Gantt Chart component, you can set the vertical scroller position dynamically by clicking the custom button using the [setScrollTop](https://ej2.syncfusion.com/vue/documentation/api/gantt#setscrolltop) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/setscrolltop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/setscrolltop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/how-to/setscrolltop-cs1" %}
