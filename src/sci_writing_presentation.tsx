import { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { presentations } from './slidesData';
import { SlideRenderer } from './SlideRenderer';

const getInitialPresentationIndex = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (id) {
    const index = presentations.findIndex(p => p.id === id);
    if (index !== -1) {
      return index;
    }
  }
  return 0;
};

const getInitialSlide = () => {
  const params = new URLSearchParams(window.location.search);
  const slideParam = params.get('slide');
  if (slideParam) {
    const slideIndex = parseInt(slideParam, 10) - 1; // Convert to 0-based index
    if (!isNaN(slideIndex) && slideIndex >= 0) {
      return slideIndex;
    }
  }
  return 0;
};

const Presentation = () => {
  const [currentPresentationIndex, setCurrentPresentationIndex] = useState(getInitialPresentationIndex);
  const [currentSlide, setCurrentSlide] = useState(getInitialSlide);
  const [showMenu, setShowMenu] = useState(false);

  // Update URL when presentation changes
  const updateURL = (presIndex: number, slideIndex: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('id', presentations[presIndex].id);
    url.searchParams.set('slide', String(slideIndex + 1));
    window.history.replaceState({}, '', url.toString());
  };

  const currentPresentation = presentations[currentPresentationIndex];
  const slides = currentPresentation.slides;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      updateURL(currentPresentationIndex, newSlide);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      updateURL(currentPresentationIndex, newSlide);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    updateURL(currentPresentationIndex, index);
  };

  const selectPresentation = (index: number) => {
    setCurrentPresentationIndex(index);
    setCurrentSlide(0);
    setShowMenu(false);
    updateURL(index, 0);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Presentation Selector */}
        <div className="mb-4 relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Menu className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-800">{currentPresentation.name}</span>
          </button>
          
          {showMenu && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 min-w-64">
              <div className="p-2">
                <p className="text-xs text-gray-500 uppercase font-semibold px-3 py-2">Select Presentation</p>
                {presentations.map((pres, index) => (
                  <button
                    key={pres.id}
                    onClick={() => selectPresentation(index)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      index === currentPresentationIndex
                        ? 'bg-blue-100 text-blue-800'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <p className="font-medium">{pres.name}</p>
                    {pres.description && (
                      <p className="text-xs text-gray-500">{pres.description}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="h-150 p-12 overflow-y-auto">
            <SlideRenderer slide={slides[currentSlide]} />
          </div>
          
          <div className="bg-gray-100 p-6 flex items-center justify-between border-t-2 border-gray-300">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">
                Slide {currentSlide + 1} of {slides.length}
              </p>
              <div className="flex space-x-1">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>Use the navigation buttons or keyboard arrows to navigate through slides</p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;