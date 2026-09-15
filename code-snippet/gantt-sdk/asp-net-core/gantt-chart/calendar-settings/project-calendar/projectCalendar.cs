using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttDataSourceCollection { get; set; }

        public void OnGet()
        {
            GanttDataSourceCollection = GetTaskCollection();
        }

        private List<GanttDataSource> GetTaskCollection()
        {
            return new List<GanttDataSource>()
            {
                new GanttDataSource
                {
                    TaskId = 1,
                    TaskName = "Development Team Work",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 5,
                    CalendarId = "day-shift"
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Night Shift Support",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 5,
                    CalendarId = "night-shift"
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Standard Hours",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 5
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