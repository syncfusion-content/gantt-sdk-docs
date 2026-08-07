---
layout: post
title: Dynamically Change Columns in React Kanban | Syncfusion
description: Learn how to dynamically change columns in Syncfusion React Kanban with practical examples and configuration guidance.
keywords: react kanban dynamically change columns, syncfusion kanban, update columns at runtime, column toggle
canonical: https://help.syncfusion.com/gantt-sdk/react/kanban/how-to/dynamically-change-columns
platform: gantt-sdk
control: Dynamically Change Columns - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

#  Modify Columns Programmatically in React Kanban

You can dynamically change the Kanban columns by using the [columns](https://ej2.syncfusion.com/react/documentation/api/kanban/#columns) property.

In the below sample, you can dynamically change the [allowToggle](https://ej2.syncfusion.com/react/documentation/api/kanban/columnsModel/#allowtoggle) property at the particular column when you click on the button. You can also change the initially created columns to the new Kanban columns by using the [columns](https://ej2.syncfusion.com/react/documentation/api/kanban/#columns) property when you click on the button.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/auto-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/auto-cs4" %}