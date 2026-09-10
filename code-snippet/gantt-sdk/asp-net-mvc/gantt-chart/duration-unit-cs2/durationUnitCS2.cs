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
                TaskName = "Project Planning",
                ParentID = null,
                StartDate = new DateTime(2019, 4, 2),
                EndDate = new DateTime(2019, 4, 21),
                IsParent = true
            },
            new GanttDataSource
            {
                TaskID = 2,
                TaskName = "Planning Phase",
                ParentID = 1,
                StartDate = new DateTime(2019, 4, 2),
                Duration = 1,
                DurationUnit = "week",
                Progress = 50,
                IsParent = false
            },
            new GanttDataSource
            {
                TaskID = 3,
                TaskName = "Resource Allocation",
                ParentID = 1,
                StartDate = new DateTime(2019, 4, 9),
                Duration = 2,
                DurationUnit = "week",
                Predecessor = "2FS",
                Progress = 70,
                IsParent = false
            },
            new GanttDataSource
            {
                TaskID = 4,
                TaskName = "Design Phase",
                ParentID = null,
                StartDate = new DateTime(2019, 4, 23),
                EndDate = new DateTime(2019, 5, 21),
                IsParent = true
            },
            new GanttDataSource
            {
                TaskID = 5,
                TaskName = "Design Mockups",
                ParentID = 4,
                StartDate = new DateTime(2019, 4, 23),
                Duration = 1,
                DurationUnit = "month",
                Progress = 60,
                IsParent = false
            },
            new GanttDataSource
            {
                TaskID = 6,
                TaskName = "Design Review",
                ParentID = 4,
                StartDate = new DateTime(2019, 5, 21),
                Duration = 1,
                DurationUnit = "week",
                Predecessor = "5FS",
                Progress = 40,
                IsParent = false
            },
            new GanttDataSource
            {
                TaskID = 7,
                TaskName = "Development",
                ParentID = null,
                StartDate = new DateTime(2019, 5, 28),
                EndDate = new DateTime(2019, 7, 21),
                IsParent = true
            },
            new GanttDataSource
            {
                TaskID = 8,
                TaskName = "Backend Development",
                ParentID = 7,
                StartDate = new DateTime(2019, 5, 28),
                Duration = 2,
                DurationUnit = "week",
                Progress = 35,
                IsParent = false
            },
            new GanttDataSource
            {
                TaskID = 9,
                TaskName = "Frontend Development",
                ParentID = 7,
                StartDate = new DateTime(2019, 6, 11),
                Duration = 1,
                DurationUnit = "month",
                Predecessor = "8FS",
                Progress = 25,
                IsParent = false
            },
            new GanttDataSource
            {
                TaskID = 10,
                TaskName = "Testing",
                ParentID = 7,
                StartDate = new DateTime(2019, 7, 9),
                Duration = 2,
                DurationUnit = "week",
                Predecessor = "9FS",
                Progress = 10,
                IsParent = false
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
        public string DurationUnit { get; set; }
        public string Predecessor { get; set; }
        public int? Progress { get; set; }
        public bool IsParent { get; set; }
    }
}