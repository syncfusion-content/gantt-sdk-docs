public IActionResult Index()
{
    ViewBag.DataSource = new List<object>
    {
        new { TaskId = 1, TaskName = "Development Team Work", StartDate = new DateTime(2026, 4, 2), Duration = 5, CalendarId = "day-shift" },
        new { TaskId = 2, TaskName = "Night Shift Support", StartDate = new DateTime(2026, 4, 2), Duration = 5, CalendarId = "night-shift" },
        new { TaskId = 3, TaskName = "Standard Hours", StartDate = new DateTime(2026, 4, 2), Duration = 5 }
    };
    return View();
}
