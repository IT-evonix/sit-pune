// // import { PDFItem } from "@/types/pdf";

// export interface PDFItem {
//   id: number;
//   title: string;
//   batch?: string;
//   pdfUrl?: string;
//   pending?: boolean;
// }

// export const AIMLBrochurePDF: PDFItem[] = [
//   {
//     id: 1,
//     title: "AIML Brochure",
//     batch: "2026",
//     pdfUrl:
//       "/pdf/programmes/btech-AI/AIML-Dispatch/Brochure/AIML-Brochure-2026.pdf",
//   },
// ];

// export const AIMLNewsletterPDF: PDFItem[] = [
//   {
//     id: 1,
//     title: "AIML July Dec",
//     batch: "2025",
//     pdfUrl:
//       "/pdf/programmes/btech-AI/AIML-Dispatch/Newsletter/AIML_JULY_DEC_2025_NEWSLETTER.pdf",
//   },
// ];

export interface PDFItem {
  id: number;
  title: string;
  batch?: string;
  pdfUrl?: string;
  previewImage?: string;
  pending?: boolean;
}

// ========== AIML BROCHURE ========== //

export const AIMLBrochurePDF: PDFItem[] = [
  {
    id: 1,
    title: "AIML Brochure",
    batch: "2026",
    pdfUrl:
      "/pdf/programmes/btech-AI/AIML-Dispatch/Brochure/AIML-Brochure-2026.pdf",
    previewImage:
      "/images/innerpages/programe/aiml/aimldispatch/AIML-Brochure-2026.webp",
  },
];

// ========== AIML MAGAZINE ==========//

export const AIMLMagazinePDF: PDFItem[] = [
  {
    id: 1,
    title: "AIML Brochure",
    batch: "2026",
    pdfUrl:
      "/pdf/programmes/btech-AI/AIML-Dispatch/Brochure/AIML-Brochure-2026.pdf",
    previewImage:
      "/images/innerpages/programe/aiml/aimldispatch/AIML-Brochure-2026.webp",
  },
];

// Example for future:
//
// export const AIMLMagazinePDF: PDFItem[] = [
//   {
//     id: 1,
//     title: "AIML Magazine",
//     batch: "2026",
//     pdfUrl:
//       "/pdf/programmes/btech-AI/AIML-Dispatch/Magazine/AIML-Magazine-2026.pdf",
//     previewImage:
//       "/pdf/programmes/btech-AI/AIML-Dispatch/Magazine/AIML-Magazine-2026.jpg",
//   },
// ];

// ================================
// AIML NEWSLETTER
// ================================

export const AIMLNewsletterPDF: PDFItem[] = [
  {
    id: 1,
    title: "AIML July Dec",
    batch: "2025",
    pdfUrl:
      "/pdf/programmes/btech-AI/AIML-Dispatch/Newsletter/AIML_JULY_DEC_2025_NEWSLETTER.pdf",
  },
];
