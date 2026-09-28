public class HomeController : Controller
{
    public ActionResult Index()
    {
        ViewBag.DataSource = new List<TaskData>()
        {
            new TaskData
            {
                TaskId = 1,
                TaskName = "Product Design",
                StartDate = new DateTime(2026, 4, 2),
                EndDate = new DateTime(2026, 4, 21)
            },
            new TaskData
            {
                TaskId = 2,
                TaskName = "Requirement analysis"
            },
            new TaskData
            {
                TaskId = 3,
                TaskName = "Resource Planning",
                StartDate = new DateTime(2026, 4, 3),
                Duration = 5
            },
            new TaskData
            {
                TaskId = 4,
                TaskName = "Design Review"
            },
            new TaskData
            {
                TaskId = 5,
                TaskName = "Document Preparation"
            }
        };
        return View();
    }
    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
    }
}