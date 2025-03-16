import React, { useState } from 'react';
import './Portfolio.css';

const portfolioItems = [
  // PNG Images
  'Flawless.png',
  'Foof-Boutique.png',
  'Fortune-Kit.png',
  'Fresh-Corner.png',
  'Fries-Kingdom.png',
  'Fun-Out.png',
  'Fun-Pack-Cafe.png',
  'Future-Leaders.png',
  'Ghazal-Fashion-House.png',
  'H-Town.png',
  'Honey-Yard.png',
  'Iconic-Beauty.png',
  'IRIS.png',
  'Ivy.png',
  'Joie.png',
  'Just-Modest.png',
  'Karak-w-Harak.png',
  'Kids-Motel.png',
  'KLC.png',
  'Le-Rouge-Chocolat.png',
  'letoile-catering.png',
  'Lexi.png',
  'Libra-Farms-1.png',
  'Little-Miracles.png',
  'Little-ones.png',
  'Lock.png',
  'Lokapele.png',
  'Loqia-events.png',
  'Majesty-Jewelry.png',
  'Melia.png',
  'Melolime.png',
  'Mustamer.png',
  'N-Burger.png',
  'Natural-Salon.png',
  'Novista.png',
  'Off-White.png',
  'Offlimits.png',
  'Passion-Sip.png',
  'Potachii.png',
  'Recharge-cafe.png',
  'Roots-Beauty-salon.png',
  'Rose-Museum.png',
  'Roze-Quartz.png',
  'Serenity-Corner.png',
  'Shapes-Colors.png',
  'Shift-Co.png',
  'Shipping-Web.png',
  'Shutter-Photograhy.png',
  'Smart-Park.png',
  'Spaces.png',
  'Suburger.png',
  'Sugar-Rush-Cafe.png',
  'Super-Bowl.png',
  'Tap-974.png',
  'Tartine.png',
  'Tasweer.png',
  'Tayser.png',
  'The-Closet.png',
  'The-Dollhouse.png',
  'The-Expo.png',
  'The-Kitty-Box.png',
  'The-Mouse-Box.png',
  'The-Sadaf.png',
  'Tidy-Kids.png',
  'Tnatesh.png',
  'Trim-more.png',
  'Tujjar.png',
  'Twisted.png',
  'W-station.png',
  'World-Cup-Cafe.png',
  // JPG Images
  '15-cups-cafe.jpg',
  'Adela-Fashion.jpg',
  'Agua.jpg',
  'Al-Ghalia.jpg',
  'Al-Ghalia-NEW.jpg',
  'Allure.jpg',
  'Al-Reef.jpg',
  'Atbaqi.jpg',
  'Aurora.jpg',
  'Bait-Spa.jpg',
  'Barbos.jpg',
  'Barista.jpg',
  'Bashra.jpg',
  'Batool.jpg',
  'Bazaar-Celine.jpg',
  'Bdeef-Sky.jpg',
  'Beauty-Book.jpg',
  'Beauty-Essence.jpg',
  'Belly-Full.jpg',
  'Beyond-Action.jpg',
  'Bianco.jpg',
  'Black-Roast-Cafe.jpg',
  'Blanc-Beauty-Lounge.jpg',
  'Blank.jpg',
  'Blue-Wheel.jpg',
  'Eggnation.jpg',
  'Elegant-Princess.jpg',
  'Fete.jpg',
  'Fruition.jpg',
  'Gahwa.jpg',
  'Hama.jpg',
  'Home.jpg',
  'MFB.jpg',
  'MPF.jpg',
  'N22.jpg',
  'RO.jpg',
  'Sky.jpg',
  'VV.jpg',
  'Veganstore-150x150.jpg',
  'Little-Helpers-Nursery.jpg'
].map(filename => ({
  image: `/images/Portfolio/${filename}`
}));

const Portfolio = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex(prev => 
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(prev => 
      prev === portfolioItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className='portfolio'>
      <div className="container">
        <h2>{language ? "Gallery of our work" : "معرض أعمالنا"}</h2>
        
        <div className="portfolio-slideshow">
          <div className="main-image-container">
            <button className="nav-button prev" onClick={handlePrevClick}>
              {language ? "❮" : "❮"}
            </button>
            
            <div className="main-image">
              <img 
                src={portfolioItems[currentIndex].image}
                alt=""
                className={!loadedImages[currentIndex] ? 'loading' : ''}
                onLoad={() => handleImageLoad(currentIndex)}
              />
            </div>

            <button className="nav-button next" onClick={handleNextClick}>
              {language ? "❯" : "❯"}
            </button>
          </div>

          <div className="thumbnails-container">
            <div className="thumbnails-scroll">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img 
                    src={item.image}
                    alt=""
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
