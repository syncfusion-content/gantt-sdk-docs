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
                    TaskName = "Inicio del proyecto",
                    StartDate = new DateTime(2023, 1, 1),
                    EndDate = new DateTime(2023, 1, 5),
                    Duration = 5,
                    Progress = 1000
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Análisis del sitio",
                    StartDate = new DateTime(2023, 1, 6),
                    EndDate = new DateTime(2023, 1, 10),
                    Duration = 4,
                    Progress = 1500
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Pruebas de suelo",
                    StartDate = new DateTime(2023, 1, 11),
                    EndDate = new DateTime(2023, 1, 14),
                    Duration = 3,
                    Progress = 1200
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Proceso de aprobación",
                    StartDate = new DateTime(2023, 1, 15),
                    EndDate = new DateTime(2023, 1, 18),
                    Duration = 3,
                    Progress = 1800
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Estimación de presupuesto",
                    StartDate = new DateTime(2023, 1, 19),
                    EndDate = new DateTime(2023, 1, 23),
                    Duration = 4,
                    Progress = 2000
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Diseño del plano",
                    StartDate = new DateTime(2023, 1, 24),
                    EndDate = new DateTime(2023, 1, 28),
                    Duration = 4,
                    Progress = 2500
                },
                new GanttDataSource
                {
                    TaskId = 7,
                    TaskName = "Listado de materiales",
                    StartDate = new DateTime(2023, 1, 29),
                    EndDate = new DateTime(2023, 2, 2),
                    Duration = 4,
                    Progress = 3000
                },
                new GanttDataSource
                {
                    TaskId = 8,
                    TaskName = "Aprobación final",
                    StartDate = new DateTime(2023, 2, 3),
                    EndDate = new DateTime(2023, 2, 6),
                    Duration = 3,
                    Progress = 3500
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
        public double? Progress { get; set; }
        public int? ParentId { get; set; }
    }
}