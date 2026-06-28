const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-2xl border border-[#c8a96e]/20 bg-[#0f2030]/95 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
