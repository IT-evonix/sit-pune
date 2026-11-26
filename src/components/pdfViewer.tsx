import "@/components/css/PDFViewer.css";

interface PDFViewerProps {
  src: string;
  title?: string;
  height?: number;
  className?: string;
}

export default function PDFViewer({
  src,
  title = "PDF Preview",
  height = 650,
  className = "",
}: PDFViewerProps) {
  return (
    <div className={`pdf_viewer_main ${className}`}>
      <iframe
        src={src}
        title={title}
        className="pdf_viewer_frame"
        style={{ height: `${height}px` }}
      />
    </div>
  );
}
