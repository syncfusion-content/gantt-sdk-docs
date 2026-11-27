using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace MVCSamples.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.DataSource = new List<TaskData>
            {
                new TaskData { TaskId = 1, TaskName = "Project planning", StartDate = new DateTime(2026, 4, 6), Duration = 5, CalendarId = "day-shift" },
                new TaskData { TaskId = 2, TaskName = "Requirements review", StartDate = new DateTime(2026, 4, 6), Duration = 3, CalendarId = "day-shift" },
                new TaskData { TaskId = 3, TaskName = "Design", StartDate = new DateTime(2026, 4, 7), Duration = 4, CalendarId = "day-shift" },
                new TaskData { TaskId = 4, TaskName = "Development", StartDate = new DateTime(2026, 4, 11), Duration = 5, CalendarId = "day-shift" },
                new TaskData { TaskId = 5, TaskName = "Testing", StartDate = new DateTime(2026, 4, 16), Duration = 3, CalendarId = "day-shift" }
            };
            return View();
        }
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public int? Duration { get; set; }
        public string CalendarId { get; set; }
    }
}
