import type { CategoryFilterProps } from "../../types";

export function CategoryFilter<T extends string>({
  options,
  isCategorySelected,
  onToggleCategory,
}: CategoryFilterProps<T>) {
  return (
    <div
      className="filter-container"
      role="group"
      aria-label="Filtros de categoría"
    >
      {options.map((option) => {
        const isActive = isCategorySelected(option.id);
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={isActive}
            className={`filter-btn ${isActive ? "filter-btn-active" : ""}`}
            onClick={() => onToggleCategory(option.id)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
