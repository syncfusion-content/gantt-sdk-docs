export let GanttData: Object[] = [
  // Project Initiation
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), ParentID: null },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 60, ParentID: 1 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 90, ParentID: 1 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 70, ParentID: 1 },
  { TaskID: 9, TaskName: 'Environmental clearance', StartDate: new Date('04/03/2019'), Duration: 3, Progress: 50, ParentID: 1 },

  // Project Estimation
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: null },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 10, ParentID: 5 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70, ParentID: 5 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 20, ParentID: 5 },
  { TaskID: 10, TaskName: 'Budget review', StartDate: new Date('04/05/2019'), Duration: 2, Progress: 40, ParentID: 5 },

  // Design Phase
  { TaskID: 11, TaskName: 'Design Phase', StartDate: new Date('04/22/2019'), EndDate: new Date('05/10/2019'), ParentID: null },
  { TaskID: 12, TaskName: 'Architectural design', StartDate: new Date('04/22/2019'), Duration: 5, Progress: 30, ParentID: 11 },
  { TaskID: 13, TaskName: 'Structural design', StartDate: new Date('04/23/2019'), Duration: 4, Progress: 50, ParentID: 11 },
  { TaskID: 14, TaskName: 'Electrical layout', StartDate: new Date('04/24/2019'), Duration: 3, Progress: 20, ParentID: 11 },
  { TaskID: 15, TaskName: 'Design approval', StartDate: new Date('04/25/2019'), Duration: 2, Progress: 10, ParentID: 11 },

  // Procurement
  { TaskID: 16, TaskName: 'Procurement', StartDate: new Date('05/11/2019'), EndDate: new Date('05/25/2019'), ParentID: null },
  { TaskID: 17, TaskName: 'Identify vendors', StartDate: new Date('05/11/2019'), Duration: 3, Progress: 60, ParentID: 16 },
  { TaskID: 18, TaskName: 'Request quotations', StartDate: new Date('05/12/2019'), Duration: 2, Progress: 40, ParentID: 16 },
  { TaskID: 19, TaskName: 'Vendor selection', StartDate: new Date('05/13/2019'), Duration: 2, Progress: 30, ParentID: 16 },
  { TaskID: 20, TaskName: 'Purchase materials', StartDate: new Date('05/14/2019'), Duration: 3, Progress: 20, ParentID: 16 },

  // Foundation Work
  { TaskID: 21, TaskName: 'Foundation Work', StartDate: new Date('05/26/2019'), EndDate: new Date('06/10/2019'), ParentID: null },
  { TaskID: 22, TaskName: 'Excavation', StartDate: new Date('05/26/2019'), Duration: 4, Progress: 50, ParentID: 21 },
  { TaskID: 23, TaskName: 'Foundation pouring', StartDate: new Date('05/30/2019'), Duration: 3, Progress: 40, ParentID: 21 },
  { TaskID: 24, TaskName: 'Curing', StartDate: new Date('06/02/2019'), Duration: 5, Progress: 30, ParentID: 21 },
  { TaskID: 25, TaskName: 'Inspection', StartDate: new Date('06/07/2019'), Duration: 2, Progress: 20, ParentID: 21 },

  // Structural Work
  { TaskID: 26, TaskName: 'Structural Work', StartDate: new Date('06/11/2019'), EndDate: new Date('06/30/2019'), ParentID: null },
  { TaskID: 27, TaskName: 'Column construction', StartDate: new Date('06/11/2019'), Duration: 4, Progress: 60, ParentID: 26 },
  { TaskID: 28, TaskName: 'Beam construction', StartDate: new Date('06/15/2019'), Duration: 4, Progress: 50, ParentID: 26 },
  { TaskID: 29, TaskName: 'Slab casting', StartDate: new Date('06/19/2019'), Duration: 4, Progress: 40, ParentID: 26 },
  { TaskID: 30, TaskName: 'Structural inspection', StartDate: new Date('06/23/2019'), Duration: 3, Progress: 30, ParentID: 26 },

  // Roofing
  { TaskID: 31, TaskName: 'Roofing', StartDate: new Date('07/01/2019'), EndDate: new Date('07/15/2019'), ParentID: null },
  { TaskID: 32, TaskName: 'Roof frame setup', StartDate: new Date('07/01/2019'), Duration: 3, Progress: 20, ParentID: 31 },
  { TaskID: 33, TaskName: 'Sheet installation', StartDate: new Date('07/04/2019'), Duration: 3, Progress: 30, ParentID: 31 },
  { TaskID: 34, TaskName: 'Waterproofing', StartDate: new Date('07/07/2019'), Duration: 2, Progress: 40, ParentID: 31 },
  { TaskID: 35, TaskName: 'Roof inspection', StartDate: new Date('07/09/2019'), Duration: 2, Progress: 50, ParentID: 31 },

  // Interior Work
  { TaskID: 36, TaskName: 'Interior Work', StartDate: new Date('07/16/2019'), EndDate: new Date('08/05/2019'), ParentID: null },
  { TaskID: 37, TaskName: 'Plastering', StartDate: new Date('07/16/2019'), Duration: 4, Progress: 30, ParentID: 36 },
  { TaskID: 38, TaskName: 'Painting', StartDate: new Date('07/20/2019'), Duration: 4, Progress: 40, ParentID: 36 },
  { TaskID: 39, TaskName: 'Flooring', StartDate: new Date('07/24/2019'), Duration: 4, Progress: 50, ParentID: 36 },
  { TaskID: 40, TaskName: 'Electrical fittings', StartDate: new Date('07/28/2019'), Duration: 3, Progress: 60, ParentID: 36 },

  // Final Inspection
  { TaskID: 41, TaskName: 'Final Inspection', StartDate: new Date('08/06/2019'), EndDate: new Date('08/15/2019'), ParentID: null },
  { TaskID: 42, TaskName: 'Safety check', StartDate: new Date('08/06/2019'), Duration: 2, Progress: 70, ParentID: 41 },
  { TaskID: 43, TaskName: 'Compliance review', StartDate: new Date('08/08/2019'), Duration: 2, Progress: 80, ParentID: 41 },
  { TaskID: 44, TaskName: 'Client walkthrough', StartDate: new Date('08/10/2019'), Duration: 2, Progress: 90, ParentID: 41 },
  { TaskID: 45, TaskName: 'Final approval', StartDate: new Date('08/12/2019'), Duration: 2, Progress: 100, ParentID: 41 },

  // Project Closure
  { TaskID: 46, TaskName: 'Project Closure', StartDate: new Date('08/16/2019'), EndDate: new Date('08/25/2019'), ParentID: null },
  { TaskID: 47, TaskName: 'Documentation', StartDate: new Date('08/16/2019'), Duration: 2, Progress: 100, ParentID: 46 },
  { TaskID: 48, TaskName: 'Final billing', StartDate: new Date('08/18/2019'), Duration: 2, Progress: 100, ParentID: 46 },
  { TaskID: 49, TaskName: 'Feedback collection', StartDate: new Date('08/20/2019'), Duration: 2, Progress: 100, ParentID: 46 },
  { TaskID: 50, TaskName: 'Team debrief', StartDate: new Date('08/22/2019'), Duration: 2, Progress: 100, ParentID: 46 }
];
