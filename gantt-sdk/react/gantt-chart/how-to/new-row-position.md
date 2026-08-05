---
layout: post
title: New Row Position in React Gantt Chart | Syncfusion
description: Learn how to configure the new row position in Syncfusion React Gantt Chart to control where newly added tasks appear in the task list.
keywords: react gantt new row position, add row position, insert row location, task insertion, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/react/gantt-chart/how-to/new-row-position
platform: gantt-sdk
control: New Row Position - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Controlling the Position of Newly Added Rows in React Gantt Chart

In Gantt, a new row can be added in one of the following positions: Top, Bottom, Above, Below and Child. This position can be specified through the `newRowPostion` property. We can make use of the toolbarClick event to create a context menu that specifies the position in which the new row is to be added when adding a record through toolbar click.

The following code snippets demonstrate how to achieve this.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-newrow-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-newrow-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-newrow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/how-to-newrow-cs1" %}