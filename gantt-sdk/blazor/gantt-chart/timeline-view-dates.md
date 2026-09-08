---
layout: post
title: Timeline Range in Blazor Gantt Chart | Syncfusion
description: Learn how to control the visible timeline range in Syncfusion Blazor Gantt Chart using ViewStartDate and ViewEndDate properties.
keywords: blazor gantt timeline range, viewstartdate, viewenddate, visible timeline range, gantt timeline window, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/blazor/gantt-chart/event-markers
platform: gantt-sdk
control: Timeline Range - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Timeline Range Control in Blazor Gantt Chart

The timeline range control feature in the Gantt Chart component enables explicit control over the visible portion of the project timeline. You can define a fixed timeline window using the ViewStartDate and ViewEndDate properties without modifying the actual project scheduling boundaries.

These properties are useful when working with large project plans, as they allow users to focus on a specific date range while preserving the complete project data and scheduling logic. This approach improves timeline readability and provides better navigation across long-duration projects.

Understanding timeline range configuration helps in rendering only the required section of the timeline while maintaining the integrity of the underlying project schedule.

The timeline range feature utilizes dedicated properties to determine the visible timeline boundaries:

**Timeline start boundary**: The ViewStartDate property specifies the starting date of the rendered timeline window. All timeline cells before this date are excluded from the visible area, allowing focused visualization of the required period.

**Timeline end boundary**: The ViewEndDate property defines the ending date of the rendered timeline window. Timeline rendering is restricted up to this date, ensuring that only the desired portion of the project timeline is displayed.

**Independent scheduling support**: These properties affect only the rendered timeline range and do not alter the actual start date, end date, duration, or scheduling calculations of project tasks.

## Timeline range configuration

The visible timeline can be restricted to a specific date range by configuring both the ViewStartDate and ViewEndDate properties. This enables users to concentrate on important phases of a project without displaying the entire schedule.

**Focused timeline rendering**: Only the timeline interval between the configured start and end dates is displayed, reducing visual clutter and improving usability for projects containing extensive timelines.

**Preserved project scheduling**: Tasks remain scheduled based on their actual project dates, while the rendered timeline displays only the specified portion of the project timeline.

The following implementation demonstrates timeline range configuration within a Gantt Chart by defining a fixed visible timeline window using ViewStartDate and ViewEndDate.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Gantt
<SfGantt DataSource="@TaskCollection" Height="450px" Width="700px">
    <GanttTaskFields Id="TaskId" Name="TaskName" StartDate="StartDate" EndDate="EndDate"
                     Duration="Duration" Progress="Progress" ParentID="ParentId">
    </GanttTaskFields>
    <GanttTimelineSettings ViewStartDate="new DateTime(2026, 04, 01)" ViewEndDate="new DateTime(2026, 04, 20)"></GanttTimelineSettings>
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

{% previewsample "https://blazorplayground.syncfusion.com/embed/rtBxtchjrBZplHLu?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## See also

* [Display Striplines in Blazor Gantt](https://www.syncfusion.com/forums/175385/display-striplines-in-blazor-gantt)

N> You can refer to our [Blazor Gantt Chart](https://www.syncfusion.com/gantt-sdk/blazor-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Blazor Gantt Chart example](https://blazor.syncfusion.com/demos/gantt-chart/default-functionalities?theme=fluent2) to know how to render and configure the Gantt.
