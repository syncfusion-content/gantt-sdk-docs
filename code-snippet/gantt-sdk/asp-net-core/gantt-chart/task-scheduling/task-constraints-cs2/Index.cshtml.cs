using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttData { get; set; }

        public void OnGet()
        {
            GanttData = new List<GanttDataSource>()
            {
            new GanttDataSource { TaskId = 1, TaskName = "Planning and Permits", StartDate = new DateTime(2025, 4, 2), EndDate = new DateTime(2025, 4, 10), Duration = 7, Progress = 100, ConstraintType = 0 },
            new GanttDataSource { TaskId = 2, TaskName = "Site Evaluation", StartDate = new DateTime(2025, 4, 2), EndDate = new DateTime(2025, 4, 4), Duration = 2, Progress = 100, ParentId = 1, ConstraintType = 4, ConstraintDate = new DateTime(2025, 4, 2) },
            new GanttDataSource { TaskId = 3, TaskName = "Obtain Permits", StartDate = new DateTime(2025, 4, 7), EndDate = new DateTime(2025, 4, 9), Duration = 3, Progress = 100, ParentId = 1, Predecessor = "2FS+2days", ConstraintType = 2, ConstraintDate = new DateTime(2025, 4, 7) },
            new GanttDataSource { TaskId = 4, TaskName = "Finalize Planning", StartDate = new DateTime(2025, 4, 10), EndDate = new DateTime(2025, 4, 11), Duration = 2, Progress = 100, ParentId = 1, Predecessor = "3FS", ConstraintType = 6, ConstraintDate = new DateTime(2025, 4, 11) },
            new GanttDataSource { TaskId = 5, TaskName = "Site Preparation", StartDate = new DateTime(2025, 4, 14), EndDate = new DateTime(2025, 4, 18), Duration = 5, Progress = 100, ConstraintType = 0 },
            new GanttDataSource { TaskId = 6, TaskName = "Site Clearing", StartDate = new DateTime(2025, 4, 14), Duration = 0, Progress = 100, ParentId = 5, ConstraintType = 1 },
            new GanttDataSource { TaskId = 7, TaskName = "Grading and Excavation", StartDate = new DateTime(2025, 4, 15), EndDate = new DateTime(2025, 4, 17), Duration = 3, Progress = 100, ParentId = 5, Predecessor = "6", ConstraintType = 0 },
            new GanttDataSource { TaskId = 8, TaskName = "Foundation Work", StartDate = new DateTime(2025, 4, 18), EndDate = new DateTime(2025, 4, 21), Duration = 4, Progress = 100, ParentId = 5, Predecessor = "7+1", ConstraintType = 4, ConstraintDate = new DateTime(2025, 4, 18) },
            new GanttDataSource { TaskId = 9, TaskName = "Foundation and Basement", StartDate = new DateTime(2025, 4, 22), EndDate = new DateTime(2025, 4, 28), Duration = 5, Progress = 100, ParentId = 5, ConstraintType = 0 },
            new GanttDataSource { TaskId = 10, TaskName = "Pour Foundation", StartDate = new DateTime(2025, 4, 22), EndDate = new DateTime(2025, 4, 23), Duration = 2, Progress = 100, ParentId = 9, Predecessor = "8", ConstraintType = 4, ConstraintDate = new DateTime(2025, 4, 22) },
            new GanttDataSource { TaskId = 11, TaskName = "Cure Foundation", StartDate = new DateTime(2025, 4, 28), EndDate = new DateTime(2025, 4, 29), Duration = 2, Progress = 100, ParentId = 9, Predecessor = "10", ConstraintType = 3, ConstraintDate = new DateTime(2025, 4, 29) },
            new GanttDataSource { TaskId = 12, TaskName = "Basement Walls", StartDate = new DateTime(2025, 4, 28), EndDate = new DateTime(2025, 4, 30), Duration = 3, Progress = 100, ParentId = 9, Predecessor = "11FS", ConstraintType = 0 },
            new GanttDataSource { TaskId = 13, TaskName = "Framing", StartDate = new DateTime(2025, 5, 1), EndDate = new DateTime(2025, 5, 7), Duration = 5, Progress = 100, ConstraintType = 0 },
            new GanttDataSource { TaskId = 14, TaskName = "Frame Floors", StartDate = new DateTime(2025, 5, 1), EndDate = new DateTime(2025, 5, 2), Duration = 2, Progress = 100, ParentId = 13, ConstraintType = 4, ConstraintDate = new DateTime(2025, 5, 1) },
            new GanttDataSource { TaskId = 15, TaskName = "Frame Walls", StartDate = new DateTime(2025, 5, 8), EndDate = new DateTime(2025, 5, 9), Duration = 2, Progress = 100, ParentId = 13, Predecessor = "14FS+3", ConstraintType = 2, ConstraintDate = new DateTime(2025, 5, 8) },
            new GanttDataSource { TaskId = 16, TaskName = "Install Trusses", StartDate = new DateTime(2025, 5, 7), EndDate = new DateTime(2025, 5, 8), Duration = 2, Progress = 100, ParentId = 13, Predecessor = "15", ConstraintType = 6, ConstraintDate = new DateTime(2025, 5, 8) },
            new GanttDataSource { TaskId = 17, TaskName = "Roofing", StartDate = new DateTime(2025, 5, 9), EndDate = new DateTime(2025, 5, 13), Duration = 3, Progress = 100, Predecessor = "16", ConstraintType = 1 },
            new GanttDataSource { TaskId = 18, TaskName = "Mechanical, Electrical, Plumbing", StartDate = new DateTime(2025, 5, 14), EndDate = new DateTime(2025, 5, 24), Duration = 9, Progress = 50, ConstraintType = 0 },
            new GanttDataSource { TaskId = 19, TaskName = "HVAC Installation", StartDate = new DateTime(2025, 5, 14), EndDate = new DateTime(2025, 5, 16), Duration = 3, Progress = 100, ParentId = 18, ConstraintType = 4, ConstraintDate = new DateTime(2025, 5, 14) },
            new GanttDataSource { TaskId = 20, TaskName = "Plumbing Installation", StartDate = new DateTime(2025, 5, 19), EndDate = new DateTime(2025, 5, 21), Duration = 3, Progress = 50, ParentId = 18, Predecessor = "19FS", ConstraintType = 6, ConstraintDate = new DateTime(2025, 5, 21) },
            new GanttDataSource { TaskId = 21, TaskName = "Electrical Installation", StartDate = new DateTime(2025, 5, 22), EndDate = new DateTime(2025, 5, 24), Duration = 3, Progress = 0, ParentId = 18, Predecessor = "20", ConstraintType = 7, ConstraintDate = new DateTime(2025, 5, 24) },
            new GanttDataSource { TaskId = 22, TaskName = "Interior Finishing", StartDate = new DateTime(2025, 5, 26), EndDate = new DateTime(2025, 6, 17), Duration = 15, Progress = 0, ConstraintType = 0 },
            new GanttDataSource { TaskId = 23, TaskName = "Insulation and Drywall", StartDate = new DateTime(2025, 5, 26), EndDate = new DateTime(2025, 5, 30), Duration = 5, Progress = 0, ParentId = 22, Predecessor = "21", ConstraintType = 4, ConstraintDate = new DateTime(2025, 5, 26) },
            new GanttDataSource { TaskId = 24, TaskName = "Interior Painting", StartDate = new DateTime(2025, 6, 3), EndDate = new DateTime(2025, 6, 6), Duration = 4, Progress = 0, ParentId = 22, Predecessor = "23FS", ConstraintType = 6, ConstraintDate = new DateTime(2025, 6, 6) },
            new GanttDataSource { TaskId = 25, TaskName = "Flooring Installation", StartDate = new DateTime(2025, 6, 6), EndDate = new DateTime(2025, 6, 9), Duration = 4, Progress = 0, ParentId = 22, Predecessor = "24", ConstraintType = 5, ConstraintDate = new DateTime(2025, 6, 6) },
            new GanttDataSource { TaskId = 26, TaskName = "Cabinet and Fixture Setup", StartDate = new DateTime(2025, 6, 10), EndDate = new DateTime(2025, 6, 12), Duration = 3, Progress = 0, ParentId = 22, Predecessor = "25", ConstraintType = 1 },
            new GanttDataSource { TaskId = 27, TaskName = "Final Fixture Installation", StartDate = new DateTime(2025, 6, 13), EndDate = new DateTime(2025, 6, 15), Duration = 3, Progress = 0, ParentId = 22, Predecessor = "26", ConstraintType = 0 },
            new GanttDataSource { TaskId = 28, TaskName = "Exterior Finishing", StartDate = new DateTime(2025, 6, 23), EndDate = new DateTime(2025, 6, 26), Duration = 4, Progress = 0, ConstraintType = 2, ConstraintDate = new DateTime(2025, 6, 23) },
            new GanttDataSource { TaskId = 29, TaskName = "Landscaping", StartDate = new DateTime(2025, 6, 20), EndDate = new DateTime(2025, 6, 25), Duration = 5, Progress = 0, Predecessor = "28", ConstraintType = 4, ConstraintDate = new DateTime(2025, 6, 20) },
            new GanttDataSource { TaskId = 30, TaskName = "Final Inspection", StartDate = new DateTime(2025, 7, 7), EndDate = new DateTime(2025, 7, 9), Duration = 3, Progress = 0, Predecessor = "29FS+1", ConstraintType = 3, ConstraintDate = new DateTime(2025, 7, 7) },
            new GanttDataSource { TaskId = 31, TaskName = "Correction of Issues", StartDate = new DateTime(2025, 7, 1), EndDate = new DateTime(2025, 7, 3), Duration = 3, Progress = 0, Predecessor = "30", ConstraintType = 0 },
            new GanttDataSource { TaskId = 32, TaskName = "Final Walkthrough", StartDate = new DateTime(2025, 7, 4), EndDate = new DateTime(2025, 7, 7), Duration = 2, Progress = 0, Predecessor = "31", ConstraintType = 1 },
            new GanttDataSource { TaskId = 33, TaskName = "Handover Preparation", StartDate = new DateTime(2025, 7, 8), EndDate = new DateTime(2025, 7, 10), Duration = 3, Progress = 0, Predecessor = "32", ConstraintType = 4, ConstraintDate = new DateTime(2025, 7, 8) },
            new GanttDataSource { TaskId = 34, TaskName = "Client Handover", StartDate = new DateTime(2025, 7, 11), EndDate = new DateTime(2025, 7, 12), Duration = 2, Progress = 0, Predecessor = "33", ConstraintType = 6, ConstraintDate = new DateTime(2025, 7, 12) },
            new GanttDataSource { TaskId = 35, TaskName = "Warranty Period Begins", StartDate = new DateTime(2025, 7, 14), EndDate = new DateTime(2025, 7, 15), Duration = 2, Progress = 0, Predecessor = "34FS", ConstraintType = 0 },
            new GanttDataSource { TaskId = 36, TaskName = "Routine Maintenance Visits", StartDate = new DateTime(2025, 7, 16), EndDate = new DateTime(2025, 7, 25), Duration = 10, Progress = 0, Predecessor = "35", ConstraintType = 1 },
            new GanttDataSource { TaskId = 37, TaskName = "First Year Warranty Review", StartDate = new DateTime(2025, 7, 28), EndDate = new DateTime(2025, 8, 1), Duration = 5, Progress = 0, Predecessor = "36FS", ConstraintType = 4, ConstraintDate = new DateTime(2025, 7, 28) },
            new GanttDataSource { TaskId = 38, TaskName = "Final Project Documentation", StartDate = new DateTime(2025, 8, 4), EndDate = new DateTime(2025, 8, 6), Duration = 3, Progress = 0, Predecessor = "37FS", ConstraintType = 6, ConstraintDate = new DateTime(2025, 8, 6) },
            new GanttDataSource { TaskId = 39, TaskName = "Celebrate Project Completion", StartDate = new DateTime(2025, 8, 7), EndDate = new DateTime(2025, 8, 9), Duration = 3, Progress = 0, Predecessor = "38", ConstraintType = 0 },
            new GanttDataSource { TaskId = 40, TaskName = "Begin Next Project Planning", StartDate = new DateTime(2025, 8, 10), EndDate = new DateTime(2025, 8, 13), Duration = 4, Progress = 0, Predecessor = "39FS", ConstraintType = 1 },
            };
        }
    }

    public class GanttDataSource
    {
        public int? TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
        public int? Progress { get; set; }
        public int? ParentId { get; set; }
        public string Predecessor { get; set; }
        public int? ConstraintType { get; set; }
        public DateTime? ConstraintDate { get; set; }
    }
}
