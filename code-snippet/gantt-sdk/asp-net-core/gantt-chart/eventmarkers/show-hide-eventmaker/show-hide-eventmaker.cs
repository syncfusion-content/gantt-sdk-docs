public IActionResult Index()
{
    ViewBag.dataSource = GanttData.ProjectNewData();
    List<object> EventMarkers = new List<object>();
    EventMarkers.Add(new { day = "04/09/2019", label = "Research phase" });
    EventMarkers.Add(new { day = "04/30/2019", label = "Design phase" });
    EventMarkers.Add(new { day = "05/23/2019", label = "Production phase" });
    EventMarkers.Add(new { day = "06/20/2019", label = "Sales and marketing phase" });
    ViewBag.EventMarkers = EventMarkers;
    return View();
}

public static class GanttData
{
    public static List<GanttDataSource> ProjectNewData()
    {
        List<GanttDataSource> records = new List<GanttDataSource>()
        {
            new GanttDataSource() { TaskId = 1, TaskName = "Product Concept", StartDate = new DateTime(2019, 04, 02), EndDate = new DateTime(2019, 04, 21) },
            new GanttDataSource() { TaskId = 2, TaskName = "Defining the product and its usage", StartDate = new DateTime(2019, 04, 02), Duration = 3, Progress = 30, ParentId = 1 },
            new GanttDataSource() { TaskId = 3, TaskName = "Defining target audience", StartDate = new DateTime(2019, 04, 02), Duration = 3, ParentId = 1 },
            new GanttDataSource() { TaskId = 4, TaskName = "Prepare product sketch and notes", StartDate = new DateTime(2019, 04, 02), Duration = 2, Predecessor = "2", Progress = 30, ParentId = 1 },
            new GanttDataSource() { TaskId = 5, TaskName = "Concept Approval", StartDate = new DateTime(2019, 04, 02), Duration = 0, Predecessor = "3,4" },
            new GanttDataSource() { TaskId = 6, TaskName = "Market Research", StartDate = new DateTime(2019, 04, 02), EndDate = new DateTime(2019, 04, 21) },
            new GanttDataSource() { TaskId = 7, TaskName = "Demand Analysis", StartDate = new DateTime(2019, 04, 04), EndDate = new DateTime(2019, 04, 21), ParentId = 6 },
            new GanttDataSource() { TaskId = 8, TaskName = "Customer strength", StartDate = new DateTime(2019, 04, 04), Duration = 4, Predecessor = "5", Progress = 30, ParentId = 7 },
            new GanttDataSource() { TaskId = 9, TaskName = "Market opportunity analysis", StartDate = new DateTime(2019, 04, 04), Duration = 4, Predecessor = "5", ParentId = 7 },
            new GanttDataSource() { TaskId = 10, TaskName = "Competitor Analysis", StartDate = new DateTime(2019, 04, 04), Duration = 4, Predecessor = "7,8", Progress = 30, ParentId = 6 },
            new GanttDataSource() { TaskId = 11, TaskName = "Product strength analysis", StartDate = new DateTime(2019, 04, 04), Duration = 4, Predecessor = "9", ParentId = 6 },
            new GanttDataSource() { TaskId = 12, TaskName = "Research complete", StartDate = new DateTime(2019, 04, 04), Duration = 0, Predecessor = "10", ParentId = 6 },
            new GanttDataSource() { TaskId = 13, TaskName = "Product Design and Development", StartDate = new DateTime(2019, 04, 04), EndDate = new DateTime(2019, 04, 21) },
            new GanttDataSource() { TaskId = 14, TaskName = "Functionality design", StartDate = new DateTime(2019, 04, 04), Duration = 3, Progress = 30, Predecessor = "12", ParentId = 13 },
            new GanttDataSource() { TaskId = 15, TaskName = "Quality design", StartDate = new DateTime(2019, 04, 04), Duration = 3, Predecessor = "12", ParentId = 13 },
            new GanttDataSource() { TaskId = 16, TaskName = "Define Reliability", StartDate = new DateTime(2019, 04, 04), Duration = 2, Progress = 30, Predecessor = "15", ParentId = 13 },
            new GanttDataSource() { TaskId = 17, TaskName = "Identifying raw materials", StartDate = new DateTime(2019, 04, 04), Duration = 2, Predecessor = "15", ParentId = 13 },
            new GanttDataSource() { TaskId = 18, TaskName = "Define cost plan", StartDate = new DateTime(2019, 04, 04), EndDate = new DateTime(2019, 04, 21), ParentId = 13 },
            new GanttDataSource() { TaskId = 19, TaskName = "Manufacturing cost", StartDate = new DateTime(2019, 04, 04), Duration = 2, Progress = 30, Predecessor = "17", ParentId = 18 },
            new GanttDataSource() { TaskId = 20, TaskName = "Selling cost", StartDate = new DateTime(2019, 04, 04), Duration = 2, Predecessor = "17", ParentId = 18 },
            new GanttDataSource() { TaskId = 21, TaskName = "Development of the final design", StartDate = new DateTime(2019, 04, 04), EndDate = new DateTime(2019, 04, 21), ParentId = 13 },
            new GanttDataSource() { TaskId = 22, TaskName = "Defining dimensions and package volume", StartDate = new DateTime(2019, 04, 04), Duration = 2, Progress = 30, Predecessor = "19,20", ParentId = 21 },
            new GanttDataSource() { TaskId = 23, TaskName = "Develop design to meet industry standards", StartDate = new DateTime(2019, 04, 04), Duration = 2, Predecessor = "22", ParentId = 21 },
            new GanttDataSource() { TaskId = 24, TaskName = "Include all the details", StartDate = new DateTime(2019, 04, 04), Duration = 3, Predecessor = "23", ParentId = 21 },
            new GanttDataSource() { TaskId = 25, TaskName = "CAD Computer-aided design", StartDate = new DateTime(2019, 04, 04), Duration = 3, Progress = 30, Predecessor = "24", ParentId = 13 },
            new GanttDataSource() { TaskId = 26, TaskName = "CAM Computer-aided manufacturing", StartDate = new DateTime(2019, 04, 04), Duration = 3, Predecessor = "25", ParentId = 13 },
            new GanttDataSource() { TaskId = 27, TaskName = "Design complete", StartDate = new DateTime(2019, 04, 04), Duration = 0, Predecessor = "26", ParentId = 13 },
            new GanttDataSource() { TaskId = 28, TaskName = "Prototype Testing", StartDate = new DateTime(2019, 04, 04), Duration = 4, Progress = 30, Predecessor = "27" },
            new GanttDataSource() { TaskId = 29, TaskName = "Include feedback", StartDate = new DateTime(2019, 04, 04), Duration = 4, Predecessor = "28" },
            new GanttDataSource() { TaskId = 30, TaskName = "Manufacturing", StartDate = new DateTime(2019, 04, 04), Duration = 5, Progress = 30, Predecessor = "28,29" },
            new GanttDataSource() { TaskId = 31, TaskName = "Assembling materials to finished goods", StartDate = new DateTime(2019, 04, 04), Duration = 5, Predecessor = "30" },
            new GanttDataSource() { TaskId = 32, TaskName = "Feedback and Testing", StartDate = new DateTime(2019, 04, 04), EndDate = new DateTime(2019, 04, 21) },
            new GanttDataSource() { TaskId = 33, TaskName = "Internal testing and feedback", StartDate = new DateTime(2019, 04, 04), Duration = 3, Progress = 45, Predecessor = "31", ParentId = 32 },
            new GanttDataSource() { TaskId = 34, TaskName = "Customer testing and feedback", StartDate = new DateTime(2019, 04, 04), Duration = 3, Progress = 50, Predecessor = "33", ParentId = 32 },
            new GanttDataSource() { TaskId = 35, TaskName = "Final Product Development", StartDate = new DateTime(2019, 04, 04), EndDate = new DateTime(2019, 04, 21) },
            new GanttDataSource() { TaskId = 36, TaskName = "Important improvements", StartDate = new DateTime(2019, 04, 04), Duration = 4, Progress = 30, Predecessor = "34", ParentId = 35 },
            new GanttDataSource() { TaskId = 37, TaskName = "Address any unforeseen issues", StartDate = new DateTime(2019, 04, 04), Duration = 4, Progress = 30, Predecessor = "36", ParentId = 35 },
            new GanttDataSource() { TaskId = 38, TaskName = "Final Product", StartDate = new DateTime(2019, 04, 04), EndDate = new DateTime(2019, 04, 21) },
            new GanttDataSource() { TaskId = 39, TaskName = "Branding product", StartDate = new DateTime(2019, 04, 04), Duration = 4, Predecessor = "37", ParentId = 38 },
            new GanttDataSource() { TaskId = 40, TaskName = "Marketing and presales", StartDate = new DateTime(2019, 04, 04), Duration = 4, Progress = 30, Predecessor = "39", ParentId = 38 }
        };
        return records;
    }
}

public class GanttDataSource
{
    public int TaskId { get; set; }
    public string TaskName { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public int? Duration { get; set; }
    public int Progress { get; set; }
    public string Predecessor { get; set; }
    public int? ParentId { get; set; }
    public List<IndicatorsModel> Indicators { get; set; }
}

public class IndicatorsModel
{
    public string date { get; set; }
    public string name { get; set; }
    public string title { get; set; }
}