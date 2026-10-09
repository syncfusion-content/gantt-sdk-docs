using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace MVCSamples.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.DataSource = new List<TaskData>()
            {
                new TaskData
                {
                    TaskId = 1,
                    TaskName = "Project Planning",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 3
                },
                new TaskData
                {
                    TaskId = 2,
                    TaskName = "Requirements Analysis",
                    StartDate = new DateTime(2026, 4, 5),
                    Duration = 2,
                    ParentId = 1
                },
                new TaskData
                {
                    TaskId = 3,
                    TaskName = "Design",
                    StartDate = new DateTime(2026, 4, 7),
                    Duration = 4,
                    ParentId = 1
                },
                new TaskData
                {
                    TaskId = 4,
                    TaskName = "Development",
                    StartDate = new DateTime(2026, 4, 11),
                    Duration = 5
                },
                new TaskData
                {
                    TaskId = 5,
                    TaskName = "Testing",
                    StartDate = new DateTime(2026, 4, 16),
                    Duration = 3
                }
            };

            return View();
        }
    }

    public class TaskData
    {
        public int TaskId { get; set; }

        public string TaskName { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int? Duration { get; set; }

        public int? ParentId { get; set; }
    }
}