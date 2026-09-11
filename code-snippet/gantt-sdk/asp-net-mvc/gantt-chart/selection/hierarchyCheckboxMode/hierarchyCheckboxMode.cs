public class HomeController : Controller
{
    public ActionResult Index()
    {
        ViewBag.DataSource = GetTaskCollection();
        return View();
    }

    public static List<GanttDataSource> GetTaskCollection()
    {
        return new List<GanttDataSource>()
        {
            new GanttDataSource
            {
                TaskID = 1,
                TaskName = "Project Initiation",
                StartDate = new DateTime(2019, 4, 2),
                EndDate = new DateTime(2019, 4, 21)
            },
            new GanttDataSource
            {
                TaskID = 2,
                TaskName = "Identify Site location",
                StartDate = new DateTime(2019, 4, 2),
                Duration = 4,
                ParentID = 1,
                Progress = 50
            },
            new GanttDataSource
            {
                TaskID = 3,
                TaskName = "Perform Soil test",
                StartDate = new DateTime(2019, 4, 2),
                Duration = 4,
                ParentID = 2,
                Progress = 50
            },
            new GanttDataSource
            {
                TaskID = 4,
                TaskName = "Soil test approval",
                StartDate = new DateTime(2019, 4, 2),
                Duration = 4,
                ParentID = 2,
                Progress = 50
            },
            new GanttDataSource
            {
                TaskID = 5,
                TaskName = "Project Estimation",
                StartDate = new DateTime(2019, 4, 2),
                EndDate = new DateTime(2019, 4, 21)
            },
            new GanttDataSource
            {
                TaskID = 6,
                TaskName = "Develop floor plan for estimation",
                StartDate = new DateTime(2019, 4, 4),
                Duration = 3,
                ParentID = 5,
                Progress = 50
            },
            new GanttDataSource
            {
                TaskID = 7,
                TaskName = "List materials",
                StartDate = new DateTime(2019, 4, 4),
                Duration = 3,
                ParentID = 6,
                Progress = 50
            },
            new GanttDataSource
            {
                TaskID = 8,
                TaskName = "Estimation approval",
                StartDate = new DateTime(2019, 4, 4),
                Duration = 3,
                ParentID = 6,
                Progress = 50
            }
        };
    }

    public class GanttDataSource
    {
        public int TaskID { get; set; }
        public string TaskName { get; set; }
        public int? ParentID { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
        public int? Progress { get; set; }
        public string Predecessor { get; set; }
    }
}