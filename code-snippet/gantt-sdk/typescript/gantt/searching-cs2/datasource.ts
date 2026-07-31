export const data: object[] = [
    { TaskID: 1, TaskName: 'Pröduct Concept', StartDate: new Date('2019-04-02'), EndDate: new Date('2019-04-21') },
    { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('2019-04-02'), Duration: 3, Progress: 30, ParentID: 1 },
    { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('2019-04-02'), Duration: 3, ParentID: 1 },
    { TaskID: 4, TaskName: 'Prepare pröduct skëtch and notes', StartDate: new Date('2019-04-02'), Duration: 2, Predecessor: '2', Progress: 30, ParentID: 1 },
    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('2019-04-02'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '2019-04-10', name: '#briefing', title: 'Product concept breifing' }] },
    { TaskID: 6, TaskName: 'Market Research', StartDate: new Date('2019-04-02'), EndDate: new Date('2019-04-21') },
    { TaskID: 7, TaskName: 'Demand Analysis', StartDate: new Date('2019-04-04'), EndDate: new Date('2019-04-21'), ParentID: 6 },
    { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '5', Progress: 30, ParentID: 7 },
    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '5', ParentID: 7 },
    { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '7, 8', Progress: 30, ParentID: 6 },
    { TaskID: 11, TaskName: 'Product strength ànalsysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '9', ParentID: 6 },
    { TaskID: 12, TaskName: 'Resëarch complete', StartDate: new Date('2019-04-04'), Duration: 0, Predecessor: '10', Indicators: [{ date: '2019-04-20', name: '#meeting', title: '1st board of directors meeting' }], ParentID: 6 }
];