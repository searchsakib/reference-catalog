import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import { contentSections, toc } from "./data/references";

export default function App() {
  const [expanded, setExpanded] = useState({ quran: true, hadith: true });
  const [downloading, setDownloading] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleSection = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const downloadStaticFile = (filename) => {
    const link = document.createElement("a");
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPDF = async () => {
    setDownloading("pdf");

    const staticFile = "/downloads/ঘুম-ইসলামিক-রেফারেন্স.pdf";

    try {
      const response = await fetch(staticFile, { method: "HEAD" });
      if (response.ok) {
        downloadStaticFile("ঘুম-ইসলামিক-রেফারেন্স.pdf");
        setDownloading(null);
        return;
      }
    } catch {
      // No-op: the buttons are intended to download the uploaded files.
    }

    setDownloading(null);
    window.alert("PDF ফাইলটি এখনও আপলোড করা হয়নি।");
  };

  const downloadDOCX = async () => {
    setDownloading("docx");

    const staticFile = "/downloads/ঘুম-ইসলামিক-রেফারেন্স.docx";

    try {
      const response = await fetch(staticFile, { method: "HEAD" });
      if (response.ok) {
        downloadStaticFile("ঘুম-ইসলামিক-রেফারেন্স.docx");
        setDownloading(null);
        return;
      }
    } catch {
      // No-op: the buttons are intended to download the uploaded files.
    }

    setDownloading(null);
    window.alert("DOCX ফাইলটি এখনও আপলোড করা হয়নি।");
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

        <main className="flex-1 lg:ml-[320px]">
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

              <div className="space-y-6">
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
