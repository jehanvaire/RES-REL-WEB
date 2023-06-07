import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfPreview({ lien }: any) {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setCurrentPage((prevPage) => prevPage + offset);
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer as HTMLElement;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  return (
    <div>
      <div>
        <button onClick={() => changePage(-1)} disabled={currentPage <= 1}>
          Previous
        </button>
        <button
          onClick={() => changePage(1)}
          disabled={currentPage >= numPages}
        >
          Next
        </button>
      </div>
      <p>
        Page {currentPage} of {numPages}
      </p>
      <Document
        file={lien}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Page onLoadSuccess={removeTextLayerOffset} pageNumber={currentPage} />
      </Document>
    </div>
  );
}
