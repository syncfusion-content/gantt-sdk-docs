---
layout: post
title: Getting Started with .NET MAUI Gantt | Syncfusion
description: Learn how to get started with Syncfusion® .NET MAUI Gantt control. Explore setup, data binding, task mapping, and hierarchy.
platform: gantt-sdk
control: Gantt
documentation: ug
appliesto: UI Component Suite, Gantt SDK
---

# Getting Started with .NET MAUI Gantt

This section provides a quick overview for working with Essential<sup>®</sup> Gantt for .NET MAUI. It lets you plan and track a project as a hierarchy of tasks, with task bars, progress, milestones, and dependencies on a timeline.

{% tabcontents %}
{% tabcontent Visual Studio %}

## Prerequisites

Before proceeding, ensure the following are set up:

1. Install [.NET 10 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0) or later.
2. Set up a .NET MAUI environment with Visual Studio 2022 v17.12 or later.

## Step 1: Create a new .NET MAUI project

1. Go to **File > New > Project** and choose the **.NET MAUI App** template.
2. Name the project and choose a location. Then, click **Next**.
3. Select the .NET framework version and click **Create**.

## Step 2: Install the Syncfusion<sup>®</sup> MAUI Gantt NuGet package

1. In **Solution Explorer**, right-click the project and choose **Manage NuGet Packages**.
2. Search for [Syncfusion.Maui.Gantt](https://www.nuget.org/packages/Syncfusion.Maui.Gantt/) and install the latest version.
3. Ensure the necessary dependencies are installed correctly, and the project is restored.

{% endtabcontent %}
{% tabcontent Visual Studio Code %}

## Prerequisites

Before proceeding, ensure the following are set up:

1. Install [.NET 10 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0) or later.
2. Set up a .NET MAUI environment with Visual Studio Code.
3. Ensure that the .NET MAUI workloads are installed and configured as described [here](https://learn.microsoft.com/en-us/dotnet/maui/get-started/installation?view=net-maui-9.0&tabs=visual-studio-code).

## Step 1: Create a new .NET MAUI project

1. Open the Command Palette by pressing **Ctrl+Shift+P** and type **.NET:New Project** and press Enter.
2. Choose the **.NET MAUI App** template.
3. Select the project location, type the project name and press Enter.
4. Then choose **Create project**

## Step 2: Install the Syncfusion<sup>®</sup> MAUI Gantt NuGet package

1. Press <kbd>Ctrl</kbd> + <kbd>`</kbd> (backtick) to open the integrated terminal in Visual Studio Code.
2. Ensure you are in the project root directory where your .csproj file is located.
3. Run the command `dotnet add package Syncfusion.Maui.Gantt` to install the Syncfusion<sup>®</sup> .NET MAUI Gantt package.
4. To ensure all dependencies are installed, run `dotnet restore`.

{% endtabcontent %}
{% tabcontent JetBrains Rider %}

## Prerequisites

Before proceeding, ensure the following are set up:

1. Install [.NET 10 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0) or later.
2. Set up a .NET MAUI environment with JetBrains Rider 2024.3 or later.
3. Make sure the MAUI workloads are installed and configured as described [here.](https://www.jetbrains.com/help/rider/MAUI.html#before-you-start)

## Step 1: Create a new .NET MAUI project

1. Go to **File > New Solution,** Select .NET (C#) and choose the .NET MAUI App template.
2. Enter the Project Name, Solution Name, and Location.
3. Select the .NET framework version and click Create.

## Step 2: Install the Syncfusion<sup>®</sup> MAUI Gantt NuGet package

1. In **Solution Explorer,** right-click the project and choose **Manage NuGet Packages.**
2. Search for [Syncfusion.Maui.Gantt](https://www.nuget.org/packages/Syncfusion.Maui.Gantt/) and install the latest version.
3. Ensure the necessary dependencies are installed correctly, and the project is restored. If not, open the Terminal in Rider and manually run: `dotnet restore`

{% endtabcontent %}
{% endtabcontents %}

## Step 3: Register Syncfusion handler

Add the following `using` directive to `MauiProgram.cs`:

{% tabs %}
{% highlight c# %}
using Syncfusion.Maui.Core.Hosting;
{% endhighlight %}
{% endtabs %}

Then, register the Syncfusion core handler inside the `CreateMauiApp` method of `MauiProgram.cs` to enable Syncfusion controls:

{% tabs %}
{% highlight c# %}
builder.ConfigureSyncfusionCore();
{% endhighlight %}
{% endtabs %}

## Step 4: Register the Syncfusion license key

Syncfusion<sup>®</sup> controls require a valid license key. Register the license key in your application as described in [How to Register Syncfusion License Key in Application](https://help.syncfusion.com/gantt-sdk/licensing/license-key-registration).

## Step 5: Import the Gantt namespace

Add the following namespace in your XAML or C#.

{% tabs %}
{% highlight xaml %}

xmlns:gantt="clr-namespace:Syncfusion.Maui.Gantt;assembly=Syncfusion.Maui.Gantt"

{% endhighlight %}
{% highlight c# %}

using Syncfusion.Maui.Gantt;

{% endhighlight %}
{% endtabs %}

## Step 6: Populate .NET MAUI Gantt data

Initialize the .NET MAUI [`SfGantt`](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Gantt.SfGantt.html) control, bind your task data to it, and map the data properties to Gantt task fields.

### Creating the task model and view model

* **Define the model:** Create a task class with properties for the task id, name, start date, end date, progress, predecessors, and milestone flag. To build a hierarchy, add a property that holds the child tasks.

* **Define the view model:** Create a view model that exposes the task collection. Tasks that contain child tasks are displayed as parent (summary) tasks.

### Binding the data source

Bind the task collection to the [`DataSource`](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Gantt.SfGantt.html#Syncfusion_Maui_Gantt_SfGantt_DataSource) property of `SfGantt`.

### Mapping task fields

Set the [`GanttTaskFields`](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Gantt.GanttTaskFields.html) property to tell the Gantt which data properties supply each task field. Each value is the **name** of a property in your task class.

| GanttTaskFields property | Purpose |
|---|---|
| `Id` | Unique identifier of the task. Predecessors refer to this value. |
| `Name` | Task name. |
| `StartDate` | Start date of the task. |
| `EndDate` | End date of the task. |
| `Progress` | Completion percentage of the task. |
| `Child` | Collection of child tasks, used to build the hierarchy. |
| `Dependency` | Predecessor string. For example, `"3,4"` or `"28SS"`. The relation type can be `FS`, `SS`, `FF`, or `SF` (default `FS`). |
| `Milestone` | Boolean value that marks the task as a milestone. |

The following sample demonstrates this:

{% tabs %}

{% highlight XAML %}

<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             xmlns:gantt="clr-namespace:Syncfusion.Maui.Gantt;assembly=Syncfusion.Maui.Gantt"
             xmlns:local="clr-namespace:YourAppNamespace;assembly=YourAppName"
             x:Class="YourAppNamespace.MainPage">
    <ContentPage.BindingContext>
        <local:GanttViewModel />
    </ContentPage.BindingContext>
    <gantt:SfGantt x:Name="gantt"
                   DataSource="{Binding Tasks}">
        <gantt:SfGantt.GanttTaskFields>
            <gantt:GanttTaskFields Id="Id"
                                   Name="Name"
                                   StartDate="StartDate"
                                   EndDate="EndDate"
                                   Progress="Progress"
                                   Child="Children"
                                   Dependency="Predecessors"
                                   Milestone="IsMilestone" />
        </gantt:SfGantt.GanttTaskFields>
    </gantt:SfGantt>
</ContentPage>

{% endhighlight %}
{% highlight C# %}

SfGantt gantt = new SfGantt();
GanttViewModel viewModel = new GanttViewModel();

gantt.GanttTaskFields = new GanttTaskFields
{
    Id = "Id",
    Name = "Name",
    StartDate = "StartDate",
    EndDate = "EndDate",
    Progress = "Progress",
    Child = "Children",
    Dependency = "Predecessors",
    Milestone = "IsMilestone"
};

gantt.DataSource = viewModel.Tasks;
Content = gantt;

{% endhighlight %}
{% highlight C# tabtitle="GanttTask.cs" %}

using System;
using System.Collections.Generic;

public class GanttTask
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public double Progress { get; set; }
    public string? Predecessors { get; set; }
    public bool IsMilestone { get; set; }
    public IList<GanttTask>? Children { get; set; }
}

{% endhighlight %}
{% highlight C# tabtitle="GanttViewModel.cs" %}

using System;
using System.Collections.Generic;

public class GanttViewModel
{
    public IList<GanttTask> Tasks { get; }

    public GanttViewModel()
    {
        Tasks = new List<GanttTask>
        {
            new GanttTask
            {
                Id = 1, Name = "Concept",
                StartDate = new DateTime(2021, 4, 2), EndDate = new DateTime(2021, 4, 8),
                Children = new List<GanttTask>
                {
                    new GanttTask { Id = 2, Name = "Product usage", StartDate = new DateTime(2021, 4, 2), EndDate = new DateTime(2021, 4, 8), Progress = 30 },
                    new GanttTask { Id = 3, Name = "Target users", StartDate = new DateTime(2021, 4, 2), EndDate = new DateTime(2021, 4, 4), Progress = 40 },
                    new GanttTask { Id = 4, Name = "Sketch & notes", StartDate = new DateTime(2021, 4, 5), EndDate = new DateTime(2021, 4, 8), Progress = 30, Predecessors = "2" },
                    new GanttTask { Id = 5, Name = "Approval", StartDate = new DateTime(2021, 4, 8), EndDate = new DateTime(2021, 4, 8), Predecessors = "3,4", IsMilestone = true },
                }
            },
            new GanttTask
            {
                Id = 6, Name = "Market study",
                StartDate = new DateTime(2021, 4, 9), EndDate = new DateTime(2021, 4, 18), Progress = 30,
                Children = new List<GanttTask>
                {
                    new GanttTask
                    {
                        Id = 7, Name = "Demand study",
                        StartDate = new DateTime(2021, 4, 9), EndDate = new DateTime(2021, 4, 12), Progress = 40,
                        Children = new List<GanttTask>
                        {
                            new GanttTask { Id = 8, Name = "Strengths", StartDate = new DateTime(2021, 4, 9), EndDate = new DateTime(2021, 4, 12), Progress = 30, Predecessors = "5" },
                            new GanttTask { Id = 9, Name = "Opportunities", StartDate = new DateTime(2021, 4, 9), EndDate = new DateTime(2021, 4, 12), Predecessors = "5" },
                        }
                    },
                    new GanttTask { Id = 10, Name = "Competitors", StartDate = new DateTime(2021, 4, 15), EndDate = new DateTime(2021, 4, 18), Progress = 30, Predecessors = "7,8" },
                    new GanttTask { Id = 11, Name = "Strength test", StartDate = new DateTime(2021, 4, 15), EndDate = new DateTime(2021, 4, 18), Progress = 40, Predecessors = "9" },
                    new GanttTask { Id = 12, Name = "Research done", StartDate = new DateTime(2021, 4, 18), EndDate = new DateTime(2021, 4, 18), Progress = 30, Predecessors = "10", IsMilestone = true },
                }
            },
            new GanttTask
            {
                Id = 13, Name = "Product design",
                StartDate = new DateTime(2021, 4, 19), EndDate = new DateTime(2021, 4, 29),
                Children = new List<GanttTask>
                {
                    new GanttTask { Id = 14, Name = "Func design", StartDate = new DateTime(2021, 4, 19), EndDate = new DateTime(2021, 4, 23), Progress = 30, Predecessors = "12" },
                    new GanttTask { Id = 15, Name = "Quality design", StartDate = new DateTime(2021, 4, 19), EndDate = new DateTime(2021, 4, 23), Progress = 40, Predecessors = "12" },
                    new GanttTask { Id = 16, Name = "Reliability", StartDate = new DateTime(2021, 4, 24), EndDate = new DateTime(2021, 4, 25), Progress = 30, Predecessors = "15" },
                    new GanttTask { Id = 17, Name = "Raw materials", StartDate = new DateTime(2021, 4, 24), EndDate = new DateTime(2021, 4, 25), Predecessors = "15" },
                    new GanttTask
                    {
                        Id = 18, Name = "Cost plan",
                        StartDate = new DateTime(2021, 4, 26), EndDate = new DateTime(2021, 4, 29), Progress = 30, Predecessors = "17",
                        Children = new List<GanttTask>
                        {
                            new GanttTask { Id = 19, Name = "Mfg estimate", StartDate = new DateTime(2021, 4, 26), EndDate = new DateTime(2021, 4, 29), Progress = 40, Predecessors = "17" },
                            new GanttTask { Id = 20, Name = "Sell estimate", StartDate = new DateTime(2021, 4, 26), EndDate = new DateTime(2021, 4, 29), Progress = 30, Predecessors = "17" },
                        }
                    },
                }
            },
            new GanttTask { Id = 21, Name = "Prototype", StartDate = new DateTime(2021, 5, 17), EndDate = new DateTime(2021, 5, 22), Progress = 30, Predecessors = "18" },
            new GanttTask { Id = 22, Name = "Feedback", StartDate = new DateTime(2021, 5, 17), EndDate = new DateTime(2021, 5, 22), Predecessors = "21SS" },
            new GanttTask { Id = 23, Name = "Launch", StartDate = new DateTime(2021, 5, 23), EndDate = new DateTime(2021, 5, 23), Predecessors = "21,22", IsMilestone = true },
        };
    }
}

{% endhighlight %}
{% endtabs %}

<!-- TODO: Add the Getting Started screenshot captured from the Sample Browser Gantt > Getting Started > Overview sample. -->
![.NET MAUI Gantt with hierarchy, progress, milestones and dependencies](images/getting-started/gantt-getting-started.png)

<!-- TODO: Add the link to the Gantt Getting Started sample on GitHub once the sample repository is published. -->
