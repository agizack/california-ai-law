const lawsData = [
  {
    "Bill": "Status",
    "AB 2013": "Passed",
    "SB 813": "Not yet passed; reconsideration in 2026",
    "SB 579": "Not yet passed; pending committee approval",
    // ... keep going with all entries from your JSON
  },
  {
    "Bill": "Effective",
    "AB 2013": "Effective January 1, 2026. Applies retroactively to generative models trained from 2022 onward",
    "SB 813": "On or after Janurary 1st, 2026",
    "SB 579": "N/A",
    // ... all the way to "SB 53"
  },
  {
    "Bill": "Summary",
    "AB 2013": "AB 2013 is a new California law going into effect January 1, 2026, requiring developers of generative AI models to disclose...",
    "SB 813": "SB 813 establishes Multistakeholder Regulatory Organizations...",
    // ... and so on
  },
  // ... include the rest of the rows: Link, Can apply to, etc.
];

export default lawsData;
