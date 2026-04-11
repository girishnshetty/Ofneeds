export function TrustedBySection() {
  const logos = [
    {
      name: "Amazon",
      src: "/assets/clients/amazon-logo.png",
    },
    {
      name: "Antstack",
      src: "/assets/clients/antstact.png",
    },
    {
      name: "AVO",
      src: "/assets/clients/AVO.jpg",
    },
    {
      name: "Infor",
      src: "/assets/clients/infor.png",
    },
    {
      name: "Valzy",
      src: "/assets/clients/Valzy.png",
    },
    {
      name: "Sri Value Tech",
      src: "/assets/clients/Sri Value Tech.png",
    },
  ];
  return (
    <section
      id="trusted-by"
      aria-label="Trusted by global leaders"
      className="bg-gray-50 py-16 lg:py-24"
    >
      <div className="w-full px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
            Trusted by Global Leaders
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
            Powering gifting programs at leading organizations across India
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {logos.map((logo, idx) => (
            <div
              key={logo.name}
              data-ocid={`trusted.item.${idx + 1}`}
              className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
                className="h-24 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
