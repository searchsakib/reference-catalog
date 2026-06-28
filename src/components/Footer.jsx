const Footer = () => (
  <footer className="border-t border-[#e7dec8] bg-[#fcfbf7] px-4 py-8 text-center text-[0.9rem] text-[#6f6758] sm:px-8">
    <p>
      সংকলিত: ইসলামিক রেফারেন্স টেক্সট — ঘুম | প্রস্তুতি: AI-সহায়তায় সংকলিত
    </p>
    <p className="mt-1.5">
      যেকোনো তথ্য চূড়ান্ত গ্রহণের পূর্বে মূল কিতাব থেকে যাচাই করা আবশ্যক।
    </p>
    <div className="mt-4 flex flex-wrap justify-center gap-3">
      <a
        href="https://quran.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.85rem] text-[#2f7a67]"
      >
        Quran.com
      </a>
      <a
        href="https://ihadis.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.85rem] text-[#5b7ea8]"
      >
        iHadith
      </a>
      <a
        href="https://sunnah.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.85rem] text-[#8a6f40]"
      >
        Sunnah.com
      </a>
    </div>
  </footer>
);

export default Footer;
