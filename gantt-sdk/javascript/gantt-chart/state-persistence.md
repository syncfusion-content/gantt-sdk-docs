---
layout: post
title: State Persistence in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about State persistence in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: State persistence 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# State Persistence in JavaScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control supports state management to retain its configuration and data after a browser refresh during the same session.

To enable this, set the [enablePersistence](../../api/gantt#enablepersistence) property to **true**. Once enabled, the control saves its state in the browser’s [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#) and restores it automatically after page reloads.

## Restore initial Gantt state

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control provides options to reset its state, reverting all interactions and configurations to the original setup.  This is useful for clearing filters, sorting, and column arrangements, even when [enablePersistence](../../api/gantt#enablepersistence) is enabled.

### Changing control ID

To reset the Gantt to its default state, update the control ID.  This initializes the control as a new instance, restoring its original configuration.

Here is an example code to change the control ID dynamically to restore initial Gantt state.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs1" %}
{% endif %}

### Clearing local storage

Clearing the browser’s local storage associated with the Gantt Chart control removes all persisted data, allowing it to load with its initial settings.

Here is an example code on how to clear local storage to retain its default state.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs2" %}
{% endif %}

## Restore to previous state

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control allows saving and restoring its state using **local storage**, ensuring retention of configurations like column order, sorting, and filtering.

To implement this functionality, extract the current state using `getPersistData`, store it with `setItem`, retrieve it via `getItem`, and apply it using `setProperties` to restore the saved configuration.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs3" %}
{% endif %}

## Get or set localStorage value

When [enablePersistence](../../api/gantt#enablepersistence) is set to **true**, the Gantt Chart control state is stored in `window.localStorage`. The stored data can be retrieved or updated using the `getItem` and `setItem` methods available in the browser's `localStorage`.

```typescript
//get the Gantt model.
let value: string = window.localStorage.getItem('ganttGantt'); //"ganttGantt" is control name + control ID.
let model: Object = JSON.parse(model);

```

```typescript
//set the Gantt model.
window.localStorage.setItem('ganttGantt', JSON.stringify(model)); //"ganttGantt" is control name + control ID.

```

> You can refer to our [JavaScript Gantt](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Gantt example](https://ej2.syncfusion.com/demos#/material/gantt/default.html) to knows how to present and manipulate data.

## Prevent columns from persisting

When [enablePersistence](../../api/gantt#enablepersistence) is set to **true**, Gantt properties such as [Filtering](../../api/gantt#allowfiltering), [Sorting](../../api/gantt#allowsorting), and [Columns](../../api/gantt#columns) are automatically saved.  

To prevent specific properties from being persisted, use the `addOnPersist` method.

> When the [enablePersistence](../../api/gantt#enablepersistence) property is set to **true**, the Gantt features such as column template, column formatter, header text, and value accessor will not persist.

The example below shows how to prevent Gantt columns from being persisted. In the [dataBound](../../gantt/events#databound) event, override the `addOnPersist` method and remove [Columns](../../api/gantt#columns) from the persistence key list.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-prevent-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-prevent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/column-prevent-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-prevent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-prevent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/column-prevent-cs1" %}
{% endif %}

## Add to persist

Persistence in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control enables storing and restoring the control state. It supports preserving column layout, sorting, filtering, and configuration elements such as column templates, header templates, and header text, ensuring consistent behavior across sessions.

### Add a new column in persisted columns list

When [enablePersistence](../../api/gantt#enablepersistence) is set to **true** in the Syncfusion Gantt Chart control, column configurations are saved automatically. To add a new column to the persisted list, update the column collection using `columns.push()`, then call the `refreshColumns` method on the `treeGrid` object in the Gantt instance to update the UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/state-persistence-cs4" %}
{% endif %}

### Persist the header template and header Text

By default, properties such as column template, header text, header template, formatter, and value accessor are not persisted when [enablePersistence](../../api/gantt#enablepersistence) is set to **true**, as these are defined at the application level.

To persist these settings, clone the [Columns](../../api/gantt#columns) property using `Object.assign`, store it manually along with the persisted data, and reassign it to the Gantt’s `Columns` property during restoration.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-persist-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-persist-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/column-persist-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-persist-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/column-persist-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/column-persist-cs1" %}
{% endif %}