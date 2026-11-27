public IActionResult Index()
{
    ViewBag.DataSource = new List<object>
    {
        new { TaskId = 1, TaskName = "Project Planning", StartDate = new DateTime(2026, 4, 2), Duration = 3 },
        new { TaskId = 2, TaskName = "Requirements Analysis", StartDate = new DateTime(2026, 4, 5), Duration = 2, ParentId = 1 },
        new { TaskId = 3, TaskName = "Design", StartDate = new DateTime(2026, 4, 7), Duration = 4, ParentId = 1 },
        new { TaskId = 4, TaskName = "Development", StartDate = new DateTime(2026, 4, 11), Duration = 5 },
        new { TaskId = 5, TaskName = "Testing", StartDate = new DateTime(2026, 4, 16), Duration = 3 }
    };
    return View();
}
