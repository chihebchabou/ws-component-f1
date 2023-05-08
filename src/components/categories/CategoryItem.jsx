import React from 'react';
// import stay from './stay.jpg';

const CategoryItem = props => {
  const { category } = props;
  const { categoryName, description, image } = category;

  console.log(props);
  //   const category = {
  //     categoryName: 'Stays',
  //     description: 'Homes, Boutique & more',
  //     image: stay,
  //   };
  return (
    <div className="col-md-3">
      <div className="card mb-4">
        <img
          style={{ height: 200, objectFit: 'cover' }}
          src={image}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="text-primary">{categoryName}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
