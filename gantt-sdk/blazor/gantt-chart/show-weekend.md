---
layout: post
title: Weekend Visibility in Blazor Gantt Chart | Syncfusion
description: Learn how to show or hide weekends in the Syncfusion Blazor Gantt Chart timeline using the ShowWeekend property.
keywords: blazor gantt show weekend, hide weekends, gantt timeline weekends, showweekend, working days, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/blazor/gantt-chart/show-weekend
platform: gantt-sdk
control: Show Weekend - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Weekend Visibility in Blazor Gantt Chart

The Blazor Gantt Chart provides support for displaying or hiding weekends within the timeline using the [ShowWeekend](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html) property available in GanttTimelineSettings.

By default, weekends are displayed in the timeline. Setting `ShowWeekend` to `false` removes weekend days from the timeline and renders only working days, providing a compact project view focused on business schedules.

This feature is useful for organizations that operate only on weekdays and want to improve timeline readability by removing non-working days from the chart view.

## Understanding Weekend Visibility

The `ShowWeekend` property determines whether weekend days are displayed in the Gantt timeline. When enabled, both working days and weekends are rendered in the timeline. When disabled, weekend days are excluded from the timeline view, allowing the project schedule to focus only on working days.

### Key behaviors

- **Default behavior**: Weekends are displayed in the timeline by default.
- **Timeline rendering**: Setting `ShowWeekend` to `false` removes weekend cells from the timeline.
- **Working-day focus**: Projects can be displayed using only working days by excluding weekend cells from the timeline.
- **Schedule visualization**: Tasks continue to follow their configured schedule while the timeline reflects the selected weekend visibility setting.

## Weekend visibility configuration

The weekend rendering behavior is controlled through the [ShowWeekend](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html) property available in the `GanttTimelineSettings`.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Gantt

<SfGantt DataSource="@TaskCollection" Height="450px" Width="900px">

    <GanttTaskFields Id="TaskId"
                     Name="TaskName"
                     StartDate="StartDate"
                     EndDate="EndDate"
                     Duration="Duration"
                     Progress="Progress"
                     ParentID="ParentId">
    </GanttTaskFields>

    <GanttTimelineSettings ShowWeekend="false"> </GanttTimelineSettings>

</SfGantt>

@code {

    public List<TaskData>? TaskCollection { get; set; }

    protected override void OnInitialized()
    {
        TaskCollection = GetTaskCollection();
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string? TaskName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string? Duration { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
    }

    public static List<TaskData> GetTaskCollection()
    {
        List<TaskData> Tasks = new List<TaskData>()
        {
            new TaskData() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2026, 01, 05), EndDate = new DateTime(2026, 01, 08), },
            new TaskData() { TaskId = 2, TaskName = "Identify Site location", StartDate = new DateTime(2026, 01, 05), Duration = "0", Progress = 30, ParentId = 1, },
            new TaskData() { TaskId = 3, TaskName = "Perform soil test", StartDate = new DateTime(2026, 01, 05), EndDate = new DateTime(2026, 01, 08), Progress = 40, ParentId = 1, },
            new TaskData() { TaskId = 4, TaskName = "Soil test approval", StartDate = new DateTime(2026, 01, 05), Duration = "0", Progress = 30, ParentId = 1, },
            new TaskData() { TaskId = 5, TaskName = "Project estimation", StartDate = new DateTime(2026, 01, 05), EndDate = new DateTime(2026, 01, 10), },
            new TaskData() { TaskId = 6, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2026, 01, 07), EndDate = new DateTime(2026, 01, 09), Progress = 30, ParentId = 5, },
            new TaskData() { TaskId = 7, TaskName = "List materials", StartDate = new DateTime(2026, 01, 07), EndDate = new DateTime(2026, 01, 09), Progress = 40, ParentId = 5, },
            new TaskData() { TaskId = 8, TaskName = "Estimation approval", StartDate = new DateTime(2026, 01, 07), Duration = "0", Progress = 30, ParentId = 5, }
        };

        return Tasks;
    }
}

{% endhighlight %}
{% endtabs %}

## See also

* https://www.syncfusion.com/gantt-sdk/blazor-gantt-chart