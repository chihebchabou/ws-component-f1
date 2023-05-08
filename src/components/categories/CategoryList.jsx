import React from 'react';
import CategoryItem from './CategoryItem';
import stay from './stay.jpg';
import adventure from './adventure.jpg';
import experience from './experience.jpg';
import restaurant from './restaurant.jpg';

const CategoryList = () => {
  const categoryList = [
    {
      id: 1,
      categoryName: 'Stays',
      description: 'Homes, Boutique & more',
      image: stay,
    },
    {
      id: 2,
      categoryName: 'Experiences',
      description: 'Activities hosted by locals',
      image: experience,
    },
    {
      id: 3,
      categoryName: 'Adventures',
      description: 'Hosted trips including lodging',
      image: adventure,
    },
    {
      id: 4,
      categoryName: 'Restaurants',
      description: 'Popular spots to eat & drink',
      image: restaurant,
    },
  ];
  return (
    <div className="container pt-4">
      <div className="row">
        {categoryList.map((category, i) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
