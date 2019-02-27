const request = {
  audienceGroups: [
    {
      name: "GROUP 1",
      join: "AND",
      metrics: [
        { label: "Q4", options: [2, 4, 6], answers: [3, 4] },
        { label: "Q2", options: [2, 6], answers: [4] }
      ]
    },
    {
      name: "GROUP 2",
      join: "OR",
      metrics: [{ label: "Q4", options: [2, 4, 6], answers: [3, 4] }]
    },
    {
      name: "GROUP 3",
      join: "OR",
      metrics: [
        { label: "Q2", options: [2, 6], answers: [4] },
        { label: "Q8", answers: [3, 4] },
        { label: "Q10", answers: [3, 4, 8, 9, 10] }
      ]
    }
  ],
  filters: [
    { label: "Q5", options: [2, 4, 6], answers: [3, 4] },
    { label: "Age", type: "range", answers: [13, 45] }
  ],
  profiling: [
    { label: "Q7", options: [2, 4, 6], answers: [3, 4] },
    { label: "Q8", options: [2, 4, 6], answers: [3, 4] }
  ]
};
