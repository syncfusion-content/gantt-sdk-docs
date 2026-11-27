using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttDataSourceCollection { get; set; }

        public void OnGet()
        {
            GanttDataSourceCollection = new List<GanttDataSource>
            {
                new GanttDataSource { TaskId = 1, TaskName = "Project planning", StartDate = new DateTime(2026, 4, 6), Duration = 5, CalendarId = "day-shift" },
                new GanttDataSource { TaskId = 2, TaskName = "Requirements review", StartDate = new DateTime(2026, 4, 6), Duration = 3, CalendarId = "day-shift" },
                new GanttDataSource { TaskId = 3, TaskName = "Design", StartDate = new DateTime(2026, 4, 7), Duration = 4, CalendarId = "day-shift" },
                new GanttDataSource { TaskId = 4, TaskName = "Development", StartDate = new DateTime(2026, 4, 11), Duration = 5, CalendarId = "day-shift" },
                new GanttDataSource { TaskId = 5, TaskName = "Testing", StartDate = new DateTime(2026, 4, 16), Duration = 3, CalendarId = "day-shift" }
            };
        }
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
