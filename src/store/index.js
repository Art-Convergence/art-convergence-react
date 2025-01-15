export * from './galleryData';
export * from './servicesData';
export * from './categoryData';

// You can also add combined helper functions here
export const getAllMedia = () => {
  return [...galleryItems];
};

export const searchItems = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return galleryItems.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.category.toLowerCase().includes(lowercaseQuery)
  );
}; 