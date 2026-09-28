public class HomeController : Controller
{
    public ActionResult Index()
    {
        ViewBag.DataSource = GetData();
        return View();
    }

    public static List<GanttDataSource> GetData()
    {
        return new List<GanttDataSource>()
        {
            new GanttDataSource
            {
                TaskID = 1,
                TaskName = "Project initiation",
                StartDate = new DateTime(2019, 3, 29),
                EndDate = new DateTime(2019, 4, 21),
                subtasks = new List<GanttDataSource>
                {
                    new GanttDataSource
                    {
                        TaskID = 2,
                        TaskName = "Identify site location",
                        StartDate = new DateTime(2019, 3, 29),
                        Duration = 3,
                        Progress = 30
                    },
                    new GanttDataSource
                    {
                        TaskID = 3,
                        TaskName = "Perform soil test",
                        StartDate = new DateTime(2019, 3, 29),
                        Duration = 4,
                        Progress = 30,
                        Predecessor = "6FF"
                    },
                    new GanttDataSource
                    {
                        TaskID = 4,
                        TaskName = "Soil test approval",
                        StartDate = new DateTime(2019, 3, 29),
                        Duration = 4,
                        Progress = 30,
                        Predecessor = "2SF"
                    }
                }
            },
            new GanttDataSource
            {
                TaskID = 5,
                TaskName = "Project estimation",
                StartDate = new DateTime(2019, 3, 29),
                EndDate = new DateTime(2019, 4, 21),
                subtasks = new List<GanttDataSource>
                {
                    new GanttDataSource
                    {
                        TaskID = 6,
                        TaskName = "Develop floor plan for estimation",
                        StartDate = new DateTime(2019, 3, 29),
                        Duration = 3,
                        Progress = 30,
                        Predecessor = "3FF"
                    },
                    new GanttDataSource
                    {
                        TaskID = 7,
                        TaskName = "List materials",
                        StartDate = new DateTime(2019, 4, 8),
                        Duration = 12,
                        Progress = 30
                    },
                    new GanttDataSource
                    {
                        TaskID = 8,
                        TaskName = "Estimation approval",
                        StartDate = new DateTime(2019, 4, 3),
                        Duration = 10,
                        Progress = 30,
                        Predecessor = "7SF"
                    },
                    new GanttDataSource
                    {
                        TaskID = 9,
                        TaskName = "Excavate for foundations",
                        StartDate = new DateTime(2019, 4, 1),
                        Duration = 4,
                        Progress = 30,
                        Predecessor = "4"
                    },
                    new GanttDataSource
                    {
                        TaskID = 10,
                        TaskName = "Install plumbing grounds",
                        StartDate = new DateTime(2019, 4, 8),
                        Duration = 4,
                        Progress = 30,
                        Predecessor = "9SS"
                    },
                    new GanttDataSource
                    {
                        TaskID = 11,
                        TaskName = "Dig footer",
                        StartDate = new DateTime(2019, 4, 8),
                        Duration = 3,
                        Predecessor = "3,6FF"
                    },
                    new GanttDataSource
                    {
                        TaskID = 12,
                        TaskName = "Electrical utilities",
                        StartDate = new DateTime(2019, 4, 3),
                        Duration = 4,
                        Progress = 30,
                        Predecessor = "8SS"
                    }
                }
            },
            new GanttDataSource
            {
                TaskID = 13,
                TaskName = "Sign contract",
                StartDate = new DateTime(2019, 4, 4),
                Duration = 2,
                Progress = 30
            }
        };
    }

    public class GanttDataSource
    {
        public int TaskID { get; set; }
        public string TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
        public int? Progress { get; set; }
        public string Predecessor { get; set; }
        public List<GanttDataSource> subtasks { get; set; }
    }
}