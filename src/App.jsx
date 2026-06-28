import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import { contentSections, toc } from "./data/references";

export default function App() {
  const [expanded, setExpanded] = useState({ quran: true, hadith: true });
  const [downloading, setDownloading] = useState(null);
  const contentRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleSection = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const downloadPDF = async () => {
    setDownloading("pdf");
    const { jsPDF } =
      await import("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
    const html2canvas = (
      await import("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js")
    ).default;

    const canvas = await html2canvas(contentRef.current, {
      scale: 1.5,
      useCORS: true,
      backgroundColor: "#0f1923",
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.85);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const ratio = canvas.width / canvas.height;
    const imgH = pageW / ratio;

    let position = 0;
    let remaining = imgH;

    while (remaining > 0) {
      pdf.addImage(imgData, "JPEG", 0, -position, pageW, imgH);
      remaining -= pageH;
      position += pageH;
      if (remaining > 0) pdf.addPage();
    }

    pdf.save("ঘুম-ইসলামিক-রেফারেন্স.pdf");
    setDownloading(null);
  };

  const downloadDOCX = async () => {
    setDownloading("docx");
    const content = contentRef.current.innerHTML;
    const html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>
      <head><meta charset='utf-8'>
      <style>
        body { font-family: 'SutonnyMJ', Arial, sans-serif; direction: ltr; }
        .arabic-text { font-size: 20pt; text-align: right; direction: rtl; font-family: 'Traditional Arabic', serif; color: #c8a96e; }
        .bangla-text { font-size: 12pt; color: #333; margin: 8pt 0; }
        .explanation { font-size: 11pt; color: #555; font-style: italic; }
        h1 { color: #1a3a5c; font-size: 24pt; }
        h2 { color: #1a4a7c; font-size: 16pt; border-bottom: 1pt solid #c8a96e; }
        h3 { color: #2a5a8c; font-size: 13pt; }
        .ayah-card, .hadith-card { border: 1pt solid #c8a96e; padding: 10pt; margin: 10pt 0; }
        .source-link { color: #1a6a3a; font-size: 10pt; }
      </style></head><body>${content}</body></html>`;

    const blob = new Blob(["\ufeff", html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ঘুম-ইসলামিক-রেফারেন্স.doc";
    link.click();
    URL.revokeObjectURL(url);
    setDownloading(null);
  };

  return (
    <div className="min-h-screen bg-[#f7f3ea] px-0 py-0 text-[#243447] sm:px-2 lg:px-4 lg:py-4">
      <div className="mx-auto flex max-w-full flex-col overflow-hidden bg-[#ffffff] shadow-[0_25px_80px_rgba(15,23,42,0.12)] lg:flex-row lg:rounded-4xl">
        <Sidebar
          toc={toc}
          expanded={expanded}
          toggleSection={toggleSection}
          scrollTo={scrollTo}
        />

        <main className="flex-1">
          <Hero
            downloading={downloading}
            onDownloadPDF={downloadPDF}
            onDownloadDOCX={downloadDOCX}
          />

          <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 rounded-2xl border border-[#e7dec8] bg-[#fffdf9] p-4 text-[0.95rem] leading-8 text-[#5f5f5f] shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <strong className="text-[#8a6f40]">নোট:</strong> এই পৃষ্ঠাটি
                কুরআন-হাদিসের রেফারেন্সসহ ঘুমের বিষয়গুলোকে সাজিয়ে উপস্থাপন
                করে। প্রতিটি আইটেমের সাথে উৎস ও ব্যাখ্যা দেওয়া হয়েছে।
              </div>

              <div ref={contentRef} className="space-y-6">
                {contentSections.map((section) => (
                  <ContentSection key={section.id} section={section} />
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
