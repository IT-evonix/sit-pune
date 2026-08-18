"use client";

import React from "react";
import { FileText, ExternalLink } from "lucide-react";
import Image from "next/image";
import { PDFItem } from "@/data/pdfData";

interface PDFPreviewProps {
  data: PDFItem[];
  heading?: string;
  emptyMessage?: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({
  data,
  heading,
  emptyMessage = "Coming Soon",
}) => {
  const handleOpenPDF = (url?: string) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pdf-preview-section">
      {/* Heading */}

      {heading && <h3 className="pdf-preview-heading">{heading}</h3>}

      {/* Empty */}

      {data.length === 0 ? (
        <div className="pdf-preview-empty">
          <div className="pdf-preview-empty-icon">
            <FileText size={32} />
          </div>

          <h5>{emptyMessage}</h5>
        </div>
      ) : (
        <div className="pdf-preview-grid">
          {data.map((item) => (
            <div className="pdf-preview-card" key={item.id}>
              {/* PDF Preview */}

              <div className="pdf-preview-image-wrapper">
  {item.previewImage ? (
    <Image
      src={item.previewImage}
      alt={`${item.title} preview`}
      width={400}
      height={300}
      className="pdf-preview-image"
    />
  ) : (
    <div className="pdf-preview-no-image">
      <FileText size={50} />
      <span>PDF Preview</span>
    </div>
  )}
</div>

              {/* Content */}

              <div className="pdf-preview-content">
                <div className="pdf-preview-info">
                  <div className="pdf-preview-icon">
                    <FileText size={20} />
                  </div>

                  <div>
                    <h4 className="pdf-preview-title">{item.title}</h4>

                    {item.batch && (
                      <span className="pdf-preview-year">{item.batch}</span>
                    )}
                  </div>
                </div>

                {/* Button */}

                {item.pdfUrl && (
                  <button
                    type="button"
                    className="pdf-view-button"
                    onClick={() => handleOpenPDF(item.pdfUrl)}
                  >
                    <span>View PDF</span>

                    <ExternalLink size={17} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PDFPreview;
