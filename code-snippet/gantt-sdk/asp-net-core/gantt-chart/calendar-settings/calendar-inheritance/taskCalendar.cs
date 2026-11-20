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
                new GanttDataSource
                {
                    TaskId = 1,
                    TaskName = "Company Schedule",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 30,
                    CalendarId = "company"
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Regional Inherited Schedule",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 30,
                    CalendarId = "regional"
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Project Calendar Schedule",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 30
                }
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
