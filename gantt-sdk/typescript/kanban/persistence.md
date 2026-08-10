---
layout: post
title: State Persistence in TypeScript Kanban | Syncfusion
description: Learn how to enable state persistence and save Kanban settings in Syncfusion TypeScript Kanban component.
keywords: typescript kanban persistence, syncfusion kanban, state management, settings
canonical: https://help.syncfusion.com/gantt-sdk/typescript/kanban/persistence
platform: gantt-sdk
control: Persistence - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# State Persistence in TypeScript Kanban

State persistence refers to the Kanban state maintained in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.

State persistence stores Kanban datasource, column and swimlane expand/collapse state in the local storage when the [`enablePersistence`](../api/kanban#enablepersistence) is defined as true.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/persistence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/persistence-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/kanban/persistence-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/persistence-cs1" %}
{% endif %}
