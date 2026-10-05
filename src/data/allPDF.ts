export interface AllPDFItem {
  id: number;
  title: string;
  batch?: string;
  pdfUrl: string;
  pending?: boolean;
}

export const allPDF: AllPDFItem[] = [
  {
    id: 1,
    title: "B.Tech AIML Program Structure (Provisional)",
    batch: "2026-30",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2026-30-Program-Structure-Provisional.pdf",
  },
  {
    id: 2,
    title: "B.Tech AIML Program Structure.pdf",
    batch: "2025-2029",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2025-29-Program-Structure.pdf",
  },
  {
    id: 3,
    title: "B.Tech AIML Program Structure.pdf",
    batch: "2024-2028",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2024-28-Program-Structure.pdf",
  },
  {
    id: 4,
    title: "B.Tech AIML Program Structure",
    batch: "2023-2027",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2023-27-Program-Structure.pdf",
  },
  {
    id: 5,
    title: "B.Tech AIML Program Structure",
    batch: "2022-2026",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2022-26-Program-Structure.pdf",
  },
];
