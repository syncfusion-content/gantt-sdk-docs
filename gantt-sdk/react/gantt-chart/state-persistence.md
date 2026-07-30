---
layout: post
title: State Persistence in React Gantt Chart Component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: State persistence 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# State Persistence in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports state management to retain its configuration and data after a browser refresh during the same session.

To enable this, set the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt#enablepersistence) property to **true**. Once enabled, the component saves its state in the browser’s [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#) and restores it automatically after page reloads.

## Restore initial Gantt state

The React Gantt Chart component provides options to reset its state, reverting all interactions and configurations to the original setup.  This is useful for clearing filters, sorting, and column arrangements, even when [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt#enablepersistence) is enabled.

### Changing component ID

To reset the Gantt to its default state, update the component ID.  This initializes the component as a new instance, restoring its original configuration.

Here is an example code to change the component ID dynamically to restore initial Gantt state.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs1" %}

### Clearing local storage

Clearing the browser’s local storage associated with the Gantt Chart component removes all persisted data, allowing it to load with its initial settings.

Here is an example code on how to clear local storage to retain its default state.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs2" %}

## Restore to previous state

The React Gantt Chart component allows saving and restoring its state using **local storage**, ensuring retention of configurations like column order, sorting, and filtering.

To implement this functionality, extract the current state using `getPersistData`, store it with `setItem`, retrieve it via `getItem`, and apply it using `setProperties` to restore the saved configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs3" %}

## Get or set localStorage value

When [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt#enablepersistence) is set to **true**, the Gantt Chart component state is stored in `window.localStorage`. The stored data can be retrieved or updated using the `getItem` and `setItem` methods available in the browser's `localStorage`.

```typescript
//get the Gantt model.
let value: string = window.localStorage.getItem('ganttGantt'); //"ganttGantt" is component name + component ID.
let model: Object = JSON.parse(model);

```

```typescript
//set the Gantt model.
window.localStorage.setItem('ganttGantt', JSON.stringify(model)); //"ganttGantt" is component name + component ID.

```

> You can refer to our [React Gantt](https://www.syncfusion.com/react-ui-components/react-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [React Gantt example](https://ej2.syncfusion.com/react/demos/#/tailwind3/gantt/default) to know how to present and manipulate data.

## Prevent columns from persisting

When [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt#enablepersistence) is set to **true**, Gantt properties such as [Filtering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowfiltering), [Sorting](https://ej2.syncfusion.com/react/documentation/api/gantt#allowsorting), and [Columns](https://ej2.syncfusion.com/react/documentation/api/gantt#columns) are automatically saved.  

To prevent specific properties from being persisted, use the `addOnPersist` method.

> When the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt#enablepersistence) property is set to **true**, the Gantt features such as column template, column formatter, header text, and value accessor will not persist.

The example below shows how to prevent Gantt columns from being persisted. In the [dataBound](https://ej2.syncfusion.com/react/documentation/gantt/events#databound) event, override the `addOnPersist` method and remove [Columns](https://ej2.syncfusion.com/react/documentation/api/gantt#columns) from the persistence key list.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-prevent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-prevent-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-prevent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/column-prevent-cs1" %}

## Add to persist

Persistence in the React Gantt Chart component enables storing and restoring the component state. It supports preserving column layout, sorting, filtering, and configuration elements such as column templates, header templates, and header text, ensuring consistent behavior across sessions.

### Add a new column in persisted columns list

When [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt#enablepersistence) is set to **true** in the Syncfusion Gantt Chart component, column configurations are saved automatically. To add a new column to the persisted list, update the column collection using `columns.push()`, then call the `refreshColumns` method on the `treeGrid` object in the Gantt instance to update the UI.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/state-persistence-cs3" %}

### Persist the header template and header Text

By default, properties such as column template, header text, header template, formatter, and value accessor are not persisted when [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt#enablepersistence) is set to **true**, as these are defined at the application level.

To persist these settings, clone the [Columns](https://ej2.syncfusion.com/react/documentation/api/gantt#columns) property using `Object.assign`, store it manually along with the persisted data, and reassign it to the Gantt’s `Columns` property during restoration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-persist-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-persist-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/column-persist-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/column-persist-cs1" %}
