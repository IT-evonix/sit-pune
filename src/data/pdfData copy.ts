
export interface PDFItem {
  id: number;
  title: string;
  src: string;
  description?: string;
}

export const pdfData: PDFItem[] = [
  {
    id: 1,
    title: "Entrepreneurs of SIT",
    src: "/pdf/placement/placement_brochure.pdf",
    description: "Entrepreneurs of SIT PDF document",
  },
];