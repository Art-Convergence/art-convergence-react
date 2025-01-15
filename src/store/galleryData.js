export const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: '/Media/watermark/p1.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 2,
    type: 'image',
    src: '/Media/watermark/p2.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 3,
    type: 'image',
    src: '/Media/watermark/p3.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 4,
    type: 'image',
    src: '/Media/watermark/p4.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 5,
    type: 'image',
    src: '/Media/watermark/p5.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 6,
    type: 'image',
    src: '/Media/watermark/p6.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 7,
    type: 'image',
    src: '/Media/watermark/p7.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 8,
    type: 'image',
    src: '/Media/watermark/p8.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 9,
    type: 'image',
    src: '/Media/watermark/p9.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 10,
    type: 'image',
    src: '/Media/watermark/p10.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },


  {
    id: 11,
    type: 'image',
    src: '/Media/watermark/p11.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 12,
    type: 'image',
    src: '/Media/watermark/p12.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 13,
    type: 'image',
    src: '/Media/watermark/p13.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 14,
    type: 'image',
    src: '/Media/watermark/p14.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 15,
    type: 'image',
    src: '/Media/watermark/p15.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 16,
    type: 'image',
    src: '/Media/watermark/p16.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 17,
    type: 'image',
    src: '/Media/watermark/p17.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 18,
    type: 'image',
    src: '/Media/watermark/p18.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 19,
    type: 'image',
    src: '/Media/watermark/p19.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 20,
    type: 'image',
    src: '/Media/watermark/p20.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 21,
    type: 'image',
    src: '/Media/watermark/p21.jpeg',
    title: 'Project 1',
    category: 'Art/Design',
    description: 'Beautiful landscape photography'
  },
  {
    id: 22,
    type: 'video',
    src: '/Media/watermark/v1.mp4',
    title: 'Project 2',
    category: 'Video/Art',
    description: 'Corporate event coverage'
  },
  {
    id: 23,
    type: 'video',
    src: '/Media/watermark/v2.mp4',
    title: 'Project 2',
    category: 'Video/Art',
    description: 'Corporate event coverage'
  },
  {
    id: 24,
    type: 'video',
    src: '/Media/watermark/v3.mp4',
    title: 'Project 2',
    category: 'Video/Art',
    description: 'Corporate event coverage'
  },
  {
    id: 25,
    type: 'video',
    src: '/Media/watermark/v4.mp4',
    title: 'Project 2',
     category: 'Video/Art',
    description: 'Corporate event coverage'
  },
];

export const getGalleryByCategory = (category) => {
  return galleryItems.filter(item => item.category === category);
};

export const getFeaturedGallery = () => {
  return galleryItems.filter(item => item.featured);
}; 