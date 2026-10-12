"use client";

import Tabs, { TabItem } from "@/components/ui/Tabs";
import PDFPreview from "@/components/ui/PDFPreview";

import { CSBrochurePDF, CSMagazinePDF, CSNewsletterPDF } from "@/data/pdfData";

const CSDispatch = () => {
  const tabsData: TabItem[] = [
    {
      id: "Brochure",
      title: "Brochure",
      content: <PDFPreview data={CSBrochurePDF} />,
    },

    {
      id: "Magazine",
      title: "Magazine",
      content: <PDFPreview data={CSMagazinePDF} />,
    },

    {
      id: "Newsletter",
      title: "Newsletter",
      content: <PDFPreview data={CSNewsletterPDF} heading="" />,
    },
  ];

  return (
    <div className="main_content">
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default CSDispatch;
