import html2pdf from "html2pdf.js";

export default function DownloadButton() {
  const downloadPDF = () => {
    const element = document.getElementById("resume");
    html2pdf().from(element).save("Resume.pdf");
  };

  return (
    <button onClick={downloadPDF} className="download-btn">
      Download as PDF
    </button>
  );
}
