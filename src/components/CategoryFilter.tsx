
interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) => {
    return (
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <button
                onClick={() => onSelectCategory('All')}
                className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${activeCategory === 'All'
                        ? 'bg-purple-600 border-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                        : 'bg-transparent border-white/10 text-gray-400 hover:border-purple-400 hover:text-white'
                    }`}
            >
                TODOS
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${activeCategory === category
                            ? 'bg-purple-600 border-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                            : 'bg-transparent border-white/10 text-gray-400 hover:border-purple-400 hover:text-white'
                        }`}
                >
                    {category.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
