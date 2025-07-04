
import React from 'react';
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: Array<{ id: string; name: string }>;
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <section className="py-8 bg-coolBlue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Filter className="h-5 w-5 text-coolBlue-700" />
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-2 rounded-full font-medium font-poppins transition-all duration-300 ease-out transform hover:scale-102 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 active:translate-y-0 ${
                selectedCategory === category.id
                  ? 'bg-coolBlue-600 text-white shadow-lg scale-102'
                  : 'bg-white text-coolBlue-700 hover:bg-coolBlue-600 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
