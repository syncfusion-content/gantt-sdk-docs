---
layout: post
title: New row position in TypeScript Gantt control | Syncfusion
description: Learn here all about New row position in Syncfusion TypeScript Gantt control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: New row position
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# New Row Position in TypeScript Gantt Chart Control

In Gantt, a new row can be added in one of the following positions: Top, Bottom, Above, Below and Child. This position can be specified through the `new RowPosition` property. We can make use of the toolbarClick event to create a context menu that specifies the position in which the new row is to be added when adding a record through toolbar click.

The following code snippets demonstrate how to achieve this.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/newrowposition-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/newrowposition-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/newrowposition-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/newrowposition-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/newrowposition-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/newrowposition-cs1" %}
{% endif %}
