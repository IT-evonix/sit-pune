"use client";
import Tabs, { TabItem } from "@/components/ui/Tabs";
import PDFList from "@/components/ui/PDFList";
import { AIMLBrochurePDF, AIMLNewsletterPDF } from "@/data/pdfData";

const AIMLDispatch = () => {
  const tabsData: TabItem[] = [
    {
      id: "Brochure",
      title: "Brochure",
      content: (
        <PDFList data={AIMLBrochurePDF} heading="" />
      ),
    },
    {
      id: "Magazine",
      title: "Magazine",
      content: (
        <div>
            <p className="mt-4">Coming Soon</p>
        </div>
      ),
    },
    {
      id: "Newsletter",
      title: "Newsletter",
      content: (
        <div>
          <PDFList data={AIMLNewsletterPDF} heading="" />
        </div>
      ),
    },
  ];
  return (
    <div className="main_content">
      <Tabs tabs={tabsData} />
    </div>
  );
};
export default AIMLDispatch;
