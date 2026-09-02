---
layout: post
title: Top and Bottom Tier in Blazor Gantt Chart | Syncfusion
description: Learn how to configure top and bottom timeline tiers in Syncfusion Blazor Gantt Chart using unit, format, count, and custom tier settings.
keywords: blazor gantt top tier, bottom tier, timeline tier, tier unit format, two-tier timeline, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/blazor/gantt-chart/top-tier-and-bottom-tier
platform: gantt-sdk
control: Top and Bottom Tier - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Top and Bottom Timeline Tier Configuration in Blazor Gantt Chart

The Blazor Gantt Chart component supports a two-tier timeline layout, enabling customization of both the top and bottom tiers through specific configuration options.

- [TopTier](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineSettings_TopTier) and [BottomTier](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineSettings_BottomTier): Define the structure and visibility of each timeline tier.
- [Unit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Unit): Specifies the time unit for each tier, such as day, week, or month.
- [Format](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Format): Determines the date format displayed in timeline cells.
- [Count](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Count): Combines multiple time units into a single timeline cell.
- [Formatter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Formatter): Applies a custom method to format the timeline cell values programmatically.

These properties allow precise control over how time intervals are displayed, enhancing the readability and usability of the Gantt chart across various project scales.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Gantt
<SfGantt DataSource="@TaskCollection" Height="450px" Width="700px">
    <GanttTaskFields Id="TaskId" Name="TaskName" StartDate="StartDate" EndDate="EndDate"
                     Duration="Duration" Progress="Progress" ParentID="ParentId">
    </GanttTaskFields>
    <GanttTimelineSettings>
        <GanttTopTierSettings Unit="TimelineViewMode.Month" Format="MMM"></GanttTopTierSettings>
        <GanttBottomTierSettings Unit="TimelineViewMode.Day" Count="2"></GanttBottomTierSettings>
    </GanttTimelineSettings>
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
            new TaskData() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), },
            new TaskData() { TaskId = 2, TaskName = "Identify Site location", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 1 },
            new TaskData() { TaskId = 3, TaskName = "Perform soil test", StartDate = new DateTime(2026, 04, 02), EndDate = new DateTime(2026, 04, 06), Progress = 40, ParentId = 1 },
            new TaskData() { TaskId = 4, TaskName = "Soil test approval", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 1 },
            new TaskData() { TaskId = 5, TaskName = "Project estimation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), },
            new TaskData() { TaskId = 6, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), Progress = 30, ParentId = 5 },
            new TaskData() { TaskId = 7, TaskName = "List materials", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), Progress = 40, ParentId = 5 },
            new TaskData() { TaskId = 8, TaskName = "Estimation approval", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 5 }
        };
        return Tasks;
    }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/BZrHtnLrorNacFhd?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Combining timeline cells

In the Blazor Gantt Chart component, timeline cells in the top and bottom tiers can be merged by grouping multiple time units into a single cell. This behavior is controlled using the `Count` property in both [TopTier](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineSettings_TopTier) and [BottomTier](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineSettings_BottomTier) configurations.

- [TopTier.count](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Count): Specifies the number of time units to combine in each top-tier cell.
- [BottomTier.count](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Count): Specifies the number of time units to combine in each bottom-tier cell.

By adjusting these values, the timeline can display broader or more granular intervals, improving visibility for long-term or short-term project views.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Gantt
<SfGantt DataSource="@TaskCollection" Height="450px" Width="700px">
    <GanttTaskFields Id="TaskId" Name="TaskName" StartDate="StartDate" EndDate="EndDate"
                     Duration="Duration" Progress="Progress" ParentID="ParentId">
    </GanttTaskFields>
    <GanttTimelineSettings TimelineUnitSize="100">
        <GanttTopTierSettings Unit="TimelineViewMode.Year"></GanttTopTierSettings>
        <GanttBottomTierSettings Unit="TimelineViewMode.Month" Format="MMM" Count="6"></GanttBottomTierSettings>
    </GanttTimelineSettings>
</SfGantt>

@code {
    private List<TaskData>? TaskCollection { get; set; }
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
            new TaskData() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), },
            new TaskData() { TaskId = 2, TaskName = "Identify Site location", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 1 },
            new TaskData() { TaskId = 3, TaskName = "Perform soil test", StartDate = new DateTime(2026, 04, 02), EndDate = new DateTime(2026, 04, 06), Progress = 40, ParentId = 1 },
            new TaskData() { TaskId = 4, TaskName = "Soil test approval", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 1 },
            new TaskData() { TaskId = 5, TaskName = "Project estimation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), },
            new TaskData() { TaskId = 6, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), Progress = 30, ParentId = 5 },
            new TaskData() { TaskId = 7, TaskName = "List materials", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), Progress = 40, ParentId = 5 },
            new TaskData() { TaskId = 8, TaskName = "Estimation approval", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 5 }
        };
        return Tasks;
    }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/BjrxtRrLIBVpybmz?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Format value of timeline cell

In the Blazor Gantt Chart component, the values displayed in the top and bottom timeline cells can be formatted using either standard date format strings or custom formatter methods.

- [TopTier.Format](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Format) and [BottomTier.Format](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Format): Define the date format for timeline cells using predefined format strings.
- [TopTier.formatter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Formatter) and [BottomTier.formatter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Formatter): Apply custom logic to format timeline cell values programmatically.

These options provide flexibility in presenting timeline data according to project requirements or localization needs.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Gantt
<SfGantt DataSource="@TaskCollection" Height="450px" Width="700px" ProjectStartDate="@ProjectStart" ProjectEndDate="@ProjectEnd">
    <GanttTaskFields Id="TaskId" Name="TaskName" StartDate="StartDate" EndDate="EndDate" Duration="Duration" Progress="Progress" ParentID="ParentId">
    </GanttTaskFields>
    <GanttTimelineSettings TimelineUnitSize=50>
        <GanttTopTierSettings Unit="TimelineViewMode.Month" Count="3">
            <FormatterTemplate>
                @{
                    @if (context.Tier == "top")
                    {
                        @this.Formatter((context.Date))
                    }
                }
            </FormatterTemplate>
        </GanttTopTierSettings>
        <GanttBottomTierSettings Unit="TimelineViewMode.Month" Format="MMM"></GanttBottomTierSettings>
    </GanttTimelineSettings>
</SfGantt>

@code {
    private DateTime ProjectStart = new DateTime(2026, 01, 10);
    private DateTime ProjectEnd = new DateTime(2026, 12, 10);
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
    public string Formatter(DateTime? date)
    {
        DateTime dateTime = (DateTime)(date);
        var month = dateTime.Month;
        if (month >= 0 && month <= 2)
        {
            return "Q1";
        }
        else if (month >= 3 && month <= 5)
        {
            return "Q2";
        }
        else if (month >= 6 && month <= 8)
        {
            return "Q3";
        }
        else
        {
            return "Q4";
        }
    }
    public static List<TaskData> GetTaskCollection()
    {
        List<TaskData> Tasks = new List<TaskData>() {
            new TaskData() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), },
            new TaskData() { TaskId = 2, TaskName = "Identify Site location", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 1 },
            new TaskData() { TaskId = 3, TaskName = "Perform soil test", StartDate = new DateTime(2026, 04, 02), EndDate = new DateTime(2026, 04, 06), Progress = 40, ParentId = 1 },
            new TaskData() { TaskId = 4, TaskName = "Soil test approval", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 1 },
            new TaskData() { TaskId = 5, TaskName = "Project estimation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), },
            new TaskData() { TaskId = 6, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), Progress = 30, ParentId = 5 },
            new TaskData() { TaskId = 7, TaskName = "List materials", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), Progress = 40, ParentId = 5 },
            new TaskData() { TaskId = 8, TaskName = "Estimation approval", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 5 }
    };
        return Tasks;
    }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/hZBnjHLrIrKJncMk?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Show week number in timeline cell

The Gantt Chart allows week numbers to be displayed in timeline cells using the [formatter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Formatter) property of the [timelineSettings.topTier](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineSettings_TopTier) configuration. The formatter function customizes the default timeline header text and displays values such as `Week 13`.

The following example demonstrates how to display week numbers in the top-tier timeline cells while displaying individual days in the bottom-tier timeline.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Gantt

<SfGantt DataSource="@TaskCollection"
         Height="450px"
         ProjectStartDate="@ProjectStart"
         ProjectEndDate="@ProjectEnd">
    <GanttTaskFields Id="TaskId"
                     Name="TaskName"
                     StartDate="StartDate"
                     EndDate="EndDate"
                     Duration="Duration"
                     Progress="Progress"
                     ParentID="ParentId">
    </GanttTaskFields>
    <GanttTimelineSettings TimelineUnitSize="60">
        <GanttTopTierSettings Unit="TimelineViewMode.Week">
            <FormatterTemplate>
                @{
                    if (context.Tier == "top")
                    {
                        @GetWeekLabel(context.Date)
                    }
                }
            </FormatterTemplate>
        </GanttTopTierSettings>
        <GanttBottomTierSettings Unit="TimelineViewMode.Day" Count="1"></GanttBottomTierSettings>
    </GanttTimelineSettings>
</SfGantt>

@code {

    private DateTime ProjectStart = new DateTime(2019, 04, 01);
    private DateTime ProjectEnd = new DateTime(2019, 10, 01);

    public List<TaskData> TaskCollection { get; set; }

    protected override void OnInitialized()
    {
        TaskCollection = GetTaskCollection();
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Duration { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
    }

    private string GetWeekLabel(DateTime? date)
    {
        if (!date.HasValue)
        {
            return string.Empty;
        }

        return $"Week {GetWeekNumber(date.Value)}";
    }

    private int GetWeekNumber(DateTime date)
    {
        DateTime firstDay = new DateTime(date.Year, 1, 1);
        int days = (int)(date - firstDay).TotalDays;

        return (int)Math.Ceiling((days + (int)firstDay.DayOfWeek + 1) / 7.0);
    }

    public static List<TaskData> GetTaskCollection()
    {
        return new List<TaskData>
        {
            new TaskData() { TaskId = 1, TaskName = "Project Initiation", StartDate = new DateTime(2019, 04, 02), EndDate = new DateTime(2019, 09, 16) },
            new TaskData() { TaskId = 2, ParentId = 1, TaskName = "Identify Site location", StartDate = new DateTime(2019, 04, 02), Duration = "120", Progress = 50 },
            new TaskData() { TaskId = 3, ParentId = 1, TaskName = "Perform Soil test", StartDate = new DateTime(2019, 04, 02), Duration = "120", Progress = 50 },
            new TaskData() { TaskId = 4, ParentId = 1, TaskName = "Soil test approval", StartDate = new DateTime(2019, 04, 02), Duration = "120", Progress = 50 },
            new TaskData() { TaskId = 5, TaskName = "Project Estimation", StartDate = new DateTime(2019, 04, 04), EndDate = new DateTime(2019, 09, 18) },
            new TaskData() { TaskId = 6, ParentId = 5, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2019, 04, 04), Duration = "120", Progress = 50 },
            new TaskData() { TaskId = 7, ParentId = 5, TaskName = "List materials", StartDate = new DateTime(2019, 04, 04), Duration = "120", Progress = 50 },
            new TaskData() { TaskId = 8, ParentId = 5, TaskName = "Estimation approval", StartDate = new DateTime(2019, 04, 04), Duration = "120", Progress = 50 }
        };
    }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/LjrxNOthhelWgFXd?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Timeline cell width

In the Blazor Gantt Chart component, the width of timeline cells can be configured using the `TimelineSettings.TimelineUnitSize` property within [TimelineSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html). This value directly sets the width of the bottom tier cells.

The width of the top tier cells is automatically calculated based on the bottom tier's unit and the specified `TimelineUnitSize`. This ensures consistent scaling across both tiers while maintaining clarity in the timeline view.

- [TimelineSettings.TimelineUnitSize](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineSettings_TimelineUnitSize): Defines the pixel width of each bottom-tier timeline cell.
- [TopTier.Unit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttTimelineTierSettings.html#Syncfusion_Blazor_Gantt_GanttTimelineTierSettings_Unit): Determines how the top-tier cell width is derived relative to the bottom tier.

This configuration allows precise control over the visual density of the timeline, supporting both detailed and high-level project views.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Gantt
<SfGantt DataSource="@TaskCollection" Height="450px" Width="1000px">
    <GanttTaskFields Id="TaskId" Name="TaskName" StartDate="StartDate" EndDate="EndDate"
                     Duration="Duration" Progress="Progress" ParentID="ParentId">
    </GanttTaskFields>
    <GanttTimelineSettings TimelineUnitSize=150></GanttTimelineSettings>
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
            new TaskData() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), },
            new TaskData() { TaskId = 2, TaskName = "Identify Site location", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 1 },
            new TaskData() { TaskId = 3, TaskName = "Perform soil test", StartDate = new DateTime(2026, 04, 02), EndDate = new DateTime(2026, 04, 06), Progress = 40, ParentId = 1 },
            new TaskData() { TaskId = 4, TaskName = "Soil test approval", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 1 },
            new TaskData() { TaskId = 5, TaskName = "Project estimation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), },
            new TaskData() { TaskId = 6, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), Progress = 30, ParentId = 5 },
            new TaskData() { TaskId = 7, TaskName = "List materials", StartDate = new DateTime(2026, 04, 06), EndDate = new DateTime(2026, 04, 08), Progress = 40, ParentId = 5 },
            new TaskData() { TaskId = 8, TaskName = "Estimation approval", StartDate = new DateTime(2026, 04, 06), Duration = "0", Progress = 30, ParentId = 5 }
        };
        return Tasks;
    }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/BtVRXHrBSrfWEWVU?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}