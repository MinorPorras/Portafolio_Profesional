import { useMemo, useState } from "react";

export function useFilter<T, C extends string>(
  items: T[],
  getItemCategories: (item: T) => C[]
) {
  // Arreglo de categorías seleccionadas. Si está vacío, representa "all" (todos).
  const [selectedCategories, setSelectedCategories] = useState<C[]>([]);

  // Alterna la selección de una categoría
  const toggleCategory = (category: C | "all") => {
    if (category === "all") {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Helper para saber si un botón/badge debe marcarse como activo en la interfaz
  const isCategorySelected = (category: C | "all") => {
    if (category === "all") return selectedCategories.length === 0;
    return selectedCategories.includes(category);
  };

  const filteredItems = useMemo(() => {
    // Si no hay categorías seleccionadas, muestra todo
    if (selectedCategories.length === 0) return items;

    // Retorna los ítems que tengan AL MENOS UNA de las categorías seleccionadas (Lógica OR)
    return items.filter((item) => {
      const itemCategories = getItemCategories(item);
      return itemCategories.some((cat) => selectedCategories.includes(cat));
    });
  }, [items, selectedCategories, getItemCategories]);

  return {
    selectedCategories,
    toggleCategory,
    isCategorySelected,
    resetFilter: () => setSelectedCategories([]),
    filteredItems,
  };
}