export function TrustBar() {
  const items = [
    "50+ Companies Served",
    "Pan-India Delivery",
    "8+ Years Experience",
  ];
  return (
    <div className="border-b border-white/10 bg-primary/90 backdrop-blur-md">
      <div className="flex w-full items-center justify-center gap-0 overflow-x-auto px-6 py-2.5">
        {items.map((item, i) => (
          <div key={item} className="flex items-center">
            {i > 0 && <span className="mx-4 select-none text-white/20">|</span>}
            <span className="whitespace-nowrap text-xs font-semibold text-white/70">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
