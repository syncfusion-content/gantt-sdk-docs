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
                    TaskName = "Local Team Work",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 5,
                    CalendarId = "local-team"
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Offshore Team Work",
                    StartDate = new DateTime(2026, 4, 2),
                    Duration = 5,
                    CalendarId = "offshore-team"
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