---
layout: post
title: Loading animation in JavaScript Gantt control | Syncfusion
description: Learn here all about Loading animation in Syncfusion JavaScript Gantt control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Loading animation
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Loading animation in JavaScript Gantt control

The loading indicator is used to display a visual indicator while the Gantt is fetching data or performing certain actions, such as sorting or filtering. The gantt support two indicator types, which is achieved by setting the [loadingIndicator.indicatorType](../api/gantt#loadingindicator) property to Shimmer or Spinner. The default value of the indicator type is "Spinner."

In the following sample, the Shimmer indicator is displayed while the gantt is scrolled when using the virtual data.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/loading-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/loading-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/loading-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/loading-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/loading-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/loading-animation-cs1" %}
{% endif %}
