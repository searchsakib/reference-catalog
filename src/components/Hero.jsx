const Hero = ({ downloading, onDownloadPDF, onDownloadDOCX }) => (
  <section className="relative overflow-hidden border-b border-[#d8c8a3] bg-[linear-gradient(135deg,_#fff8eb_0%,_#f6efe2_50%,_#f1e3cb_100%)] px-4 py-16 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 text-center text-[1.7rem] leading-[1.8] text-[#8a6f40]">
        النوم في القرآن والسنة
      </div>
      <h1 className="text-center text-4xl font-bold text-[#7a5728] sm:text-[2.6rem]">
        ঘুম — ইসলামিক রেফারেন্স
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-[1rem] leading-8 text-[#4d4d4d]">
        কুরআন ও হাদিসে ঘুমের বিষয়ে সম্পূর্ণ নির্দেশিকা। প্রতিটি রেফারেন্স বাংলা
        অনুবাদ, ব্যাখ্যা এবং উৎসের লিংকসহ উপস্থাপন করা হয়েছে।
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#c0392b] to-[#922b21] px-5 py-3 text-[0.9rem] font-semibold text-white shadow-lg shadow-[#c0392b]/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onDownloadPDF}
          disabled={!!downloading}
        >
          {downloading === "pdf" ? "⏳ তৈরি হচ্ছে..." : "📄 PDF ডাউনলোড"}
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1a6a9a] to-[#0f4a6a] px-5 py-3 text-[0.9rem] font-semibold text-white shadow-lg shadow-[#1a6a9a]/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onDownloadDOCX}
          disabled={!!downloading}
        >
          {downloading === "docx" ? "⏳ তৈরি হচ্ছে..." : "📝 DOCX ডাউনলোড"}
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
