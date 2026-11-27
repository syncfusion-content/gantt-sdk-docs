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
                TaskName = "Local Team Work",
                StartDate = new DateTime(2026, 4, 2),
                Duration = 11,
                CalendarId = "local-team"
            },
            new GanttDataSource
            {
                TaskId = 2,
                TaskName = "Offshore Team Work",
                StartDate = new DateTime(2026, 4, 2),
                Duration = 11,
                CalendarId = "offshore-team"
            },
            new GanttDataSource
            {
                TaskId = 3,
                TaskName = "Project Calendar Work",
                StartDate = new DateTime(2026, 4, 9),
                Duration = 6
            }
        };
    }

    public class GanttDataSource
    {
        public int TaskId { get; set; }

        public string TaskName { get; set; }

        public DateTime? StartDate { get; set; }

        public int? Duration { get; set; }

        public string CalendarId { get; set; }
    }
}