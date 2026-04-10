import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(
        `meta[property="${prop}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setProp("og:title", title);
    setProp("og:description", description);
    setProp("og:url", `https://ofneeds.com${canonicalPath}`);

    let canonical = document.querySelector(
      `link[rel="canonical"]`,
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://ofneeds.com${canonicalPath}`;

    return () => {
      document.title =
        "OfNeeds | Corporate Gifts India | Welcome Kits | Lanyards | Trophies | Customized T-Shirts";
    };
  }, [title, description, keywords, canonicalPath]);

  return null;
}
