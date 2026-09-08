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
                TaskId = 1,
                TaskName = "Project Planning",
                StartDate = new DateTime(2026, 4, 2),
                Duration = 3
            },
            new GanttDataSource
            {
                TaskId = 2,
                TaskName = "Requirements Analysis",
                StartDate = new DateTime(2026, 4, 5),
                Duration = 2,
                ParentId = 1
            },
            new GanttDataSource
            {
                TaskId = 3,
                TaskName = "Design",
                StartDate = new DateTime(2026, 4, 7),
                Duration = 4,
                ParentId = 1
            },
            new GanttDataSource
            {
                TaskId = 4,
                TaskName = "Development",
                StartDate = new DateTime(2026, 4, 11),
                Duration = 5
            },
            new GanttDataSource
            {
                TaskId = 5,
                TaskName = "Testing",
                StartDate = new DateTime(2026, 4, 16),
                Duration = 3
            }
        };
    }

    public class GanttDataSource
    {
        public int TaskId { get; set; }

        public string TaskName { get; set; }

        public DateTime? StartDate { get; set; }

        public int? Duration { get; set; }

        public int? ParentId { get; set; }
    }
}