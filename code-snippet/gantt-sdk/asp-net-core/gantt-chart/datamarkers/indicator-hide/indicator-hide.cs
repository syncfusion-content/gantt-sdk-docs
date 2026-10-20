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
                    TaskName = "Project Initiation",
                    StartDate = new DateTime(2019, 4, 2),
                    EndDate = new DateTime(2019, 4, 21)
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Identify Site location",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 4,
                    Progress = 50,
                    ParentId = 1,
                    Indicators = new List<IndicatorsModel>()
                    {
                        new IndicatorsModel { date = "04/08/2019", iconClass = "e-btn-icon e-notes-info e-icons", name = "Review Meeting", tooltip = "Review and approve project requirements" }
                    }
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Perform Soil test",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 4,
                    Progress = 50,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Soil test approval",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 4,
                    Progress = 50,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Project Estimation",
                    StartDate = new DateTime(2019, 4, 2),
                    EndDate = new DateTime(2019, 4, 21)
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Develop floor plan for estimation",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    Progress = 50,
                    ParentId = 5,
                    Indicators = new List<IndicatorsModel>()
                    {
                        new IndicatorsModel { date = "04/10/2019", iconClass = "e-btn-icon e-notes-info e-icons", name = "Quality Check", tooltip = "Soil quality inspection checkpoint" }
                    }
                },
                new GanttDataSource
                {
                    TaskId = 7,
                    TaskName = "List materials",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    Progress = 50,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 8,
                    TaskName = "Estimation approval",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    Progress = 50,
                    ParentId = 5
                }
            };
        }
    }

    public class GanttDataSource
    {
        public int TaskId { get; set; }

        public string TaskName { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int? Duration { get; set; }

        public int? Progress { get; set; }

        public int? ParentId { get; set; }

        public List<IndicatorsModel> Indicators { get; set; }
    }

    public class IndicatorsModel
    {
        public string date { get; set; }

        public string iconClass { get; set; }

        public string name { get; set; }

        public string tooltip { get; set; }
    }
}
