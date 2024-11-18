const getAllProductCategories = () => {
  return [
    {
      id: 'MC',
      slug: 'main-course',
      name: 'Main Course',
    },
    {
      id: 'APP',
      slug: 'appetizer',
      name: 'Appetizer',
    },
    {
      id: 'SAL',
      slug: 'salad',
      name: 'Salad',
    },
    {
      id: 'DES',
      slug: 'dessert',
      name: 'Dessert',
    },
  ];
};

export default getAllProductCategories;
