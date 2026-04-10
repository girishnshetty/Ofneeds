import { ArrowRight } from "lucide-react";

interface Category {
  name: string;
  slug: string;
  description: string;
  image?: string;
  exampleItems: string[];
}

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card text-left transition-all hover:border-accent/50 hover:shadow-xl w-full"
    >
      {category.image && (
        <div className="aspect-square overflow-hidden bg-muted/30">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold group-hover:text-accent">
          {category.name}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {category.description}
        </p>
        <div className="flex items-center text-sm font-medium text-accent">
          Explore
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}
