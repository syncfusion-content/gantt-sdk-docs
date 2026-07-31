---
layout: post
title: Baseline in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about Baseline in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Baseline 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Baseline in JavaScript Gantt control

The baseline feature in the Gantt Chart control enables comparison between original planned schedules and actual task execution timelines. This visualization provides clear insights into schedule deviations, helping assess project performance and identify areas requiring attention. Baseline functionality displays both the original planned timeline and current progress side-by-side for comprehensive project tracking.

Before implementing baseline functionality, ensure the data source includes baseline date fields and configure the [taskFields](../api/gantt/taskFields) object with appropriate field mappings. The baseline feature requires proper field mapping to display planned versus actual timelines effectively.

**Baseline fields**:

- [baselineStartDate](../api/gantt/taskFields#baselinestartdate): Represents the originally planned start date of a task. This value is used to compare against the actual start date to identify schedule deviations.
- [baselineEndDate](../api/gantt/taskFields#baselineenddate): Represents the originally planned end date of a task. It is used to compare against the actual end date.
- [baselineDuration](../api/gantt/taskFields#baselineduration): Represents the total planned duration of the task. This value is critical for baseline visualization. To represent a baseline milestone, this property must be explicitly set to `0`. Setting `baselineStartDate` and `baselineEndDate` to the same value without setting `baselineDuration` to `0` will result in a one-day baseline task, not a milestone.

## Implement baseline

To enable baseline, configure the Gantt control by setting [renderBaseline](../api/gantt#renderbaseline) to `true`, mapping `baselineStartDate`, `baselineEndDate`, and optionally `baselineDuration` in `taskFields`. To customize appearance set the [baselineColor](../api/gantt#baselinecolor) property or the .`e-baseline-bar` CSS class for advanced styling.

```typescript
export let projectData = [
    {
        TaskID: 1,
        TaskName: 'Project Planning',
        StartDate: new Date('02/04/2019'),
        EndDate: new Date('02/08/2019'),
        baselineStartDate: new Date('02/02/2019'),
        baselineEndDate: new Date('02/06/2019'),
        baselineDuration: '5' // Regular baseline
    },
    {
        TaskID: 2,
        TaskName: 'Milestone Review',
        StartDate: new Date('02/10/2019'),
        EndDate: new Date('02/10/2019'),
        baselineStartDate: new Date('02/09/2019'),
        baselineEndDate: new Date('02/09/2019'),
        baselineDuration: '0' // Milestone baseline
    }
];

var baselineColor = 'rgba(255, 107, 107, 0.8)';

```

```css
.e-gantt .e-gantt-chart .e-baseline-bar {
    height: 4px;
    border-radius: 2px;
    opacity: 0.9;
    background-color: #4CAF50; 
}
```

The following example demonstrates complete baseline configuration with proper field mapping:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs1" %}
{% endif %}

{% if page.publishingplatform == "typescript" %}

> For a comprehensive demonstration of baseline functionality, explore the [interactive sample](https://ej2.syncfusion.com/demos/#/tailwind3/gantt/baseline.html).

{% elsif page.publishingplatform == "javascript" %}

> For a comprehensive demonstration of baseline functionality, explore the [interactive sample](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/gantt/baseline.html).

{% endif %}

## Customize baseline using event

You can customize the baseline bar in the Gantt chart using the [queryTaskbarInfo](../../gantt/events#querytaskbarinfo) event.
 
{% if page.publishingplatform == "typescript" %}

```ts
queryTaskbarInfo: (args) => {
    const element = args.rowElement.querySelector('.e-baseline-bar');
    if (element) {
        (element as HTMLElement).style.background =
            'linear-gradient(red, yellow)';
    }
}
```

{% elsif page.publishingplatform == "javascript" %}

```js
queryTaskbarInfo: function (args) {
    var element = args.rowElement.querySelector('.e-baseline-bar');
    if (element) {
        element.style.background = 'linear-gradient(red, yellow)';
    }
}
```

{% endif %}

## Customize baseline templates

The [baselineTemplate](../api/gantt#baselinetemplate) property allows customization of baseline rendering by replacing the default baseline UI with a custom HTML structure. This enables advanced scenarios such as rendering additional baseline elements, visual indicators, or multiple baselines using task-specific data.

Set the `baselineTemplate` property with a template string or function. The template receives the task data object, which can be used to dynamically generate baseline elements.

### Multiple baseline rendering using template

By default, the Gantt component supports a single baseline per task. However, using the `baselineTemplate`, you can extend this behavior to render multiple baselines by maintaining additional baseline data within a custom field in your data source.

This enables rich visualization scenarios such as:
* Comparing original vs revised schedules.
* Visualizing multiple planning phases.
* Highlighting deviations across timeline checkpoints.

The following example demonstrates how to render multiple baselines using `baselineTemplate`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/baseline-cs2" %}
{% endif %}