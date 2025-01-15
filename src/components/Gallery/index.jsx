import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Dialog } from '@headlessui/react';
import { galleryItems, getGalleryByCategory } from '../../store/galleryData';
import './Gallery.css';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : getGalleryByCategory(selectedCategory);

  const breakpointColumns = {
    default: 3,
    1200: 3,
    992: 2,
    768: 2,
    576: 1
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setSelectedItem(filteredItems[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedItem(filteredItems[nextIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          setIsModalOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, selectedItem]);

  return (
    <div className="page-padding">
      <section className="gallery">
        <div className="gallery-header">
          <span className="subtitle">Our Work</span>
          <h2>Gallery</h2>
          <div className="gallery-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            {['Art/Design', 'Video/Art'].map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="gallery-grid"
          columnClassName="gallery-grid-column"
        >
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => handleItemClick(item)}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.title}
                  loading="lazy"
                  className="gallery-media"
                />
              ) : (
                <video 
                  className="gallery-media"
                  controls
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </Masonry>

        {/* Modal */}
        <Dialog 
          open={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          className="modal-container"
        >
          <div className="modal-backdrop" onClick={() => setIsModalOpen(false)} />
          
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <button 
              className="modal-nav modal-prev"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button 
              className="modal-nav modal-next"
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="modal-grid">
              {/* Main content */}
              <div className="modal-main">
                {selectedItem?.type === 'image' ? (
                  <img 
                    src={selectedItem.src} 
                    alt={selectedItem.title}
                    className="modal-media"
                  />
                ) : (
                  <video 
                    controls
                    autoPlay
                    className="modal-media"
                  >
                    <source src={selectedItem?.src} type="video/mp4" />
                  </video>
                )}
              </div>

              {/* Details sidebar */}
              <div className="modal-details">
                <h3>{selectedItem?.title}</h3>
                <p className="category">{selectedItem?.category}</p>
                <p className="description">{selectedItem?.description}</p>
              </div>
            </div>
          </div>
        </Dialog>
      </section>
    </div>
  );
}

export default Gallery;