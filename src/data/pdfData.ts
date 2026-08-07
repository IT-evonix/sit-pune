// import { PDFItem } from "@/types/pdf";


export interface PDFItem {
  id: number;
  title: string;
  batch?: string;
  pdfUrl?: string;
  pending?: boolean;
}


export const AIMLBrochurePDF: PDFItem[] = [
  {
    id: 1,
    title: "AIML Brochure",
    batch: "2026",
    pdfUrl:
      "/pdf/programmes/btech-AI/AIML-Dispatch/Brochure/AIML-Brochure-2026.pdf",
  },
];

export const AIMLNewsletterPDF: PDFItem[] = [
  {
    id: 1,
    title: "AIML July Dec",
    batch: "2025",
    pdfUrl:
      "/pdf/programmes/btech-AI/AIML-Dispatch/Newsletter/AIML_JULY_DEC_2025_NEWSLETTER.pdf",
  },
];
