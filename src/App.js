import './App.css';
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos.js"

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>The
        </p>
        <h1 className="queen">
          Queen
        </h1>
        <p>
          Of Temescal
        </p>
        <div className="gallery" >
          <Gallery photos={photos} onClick={openLightbox} margin={5} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4213364808193!2d-122.26454218429805!3d37.827020979750024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857dfc53b0f777%3A0x1dbbe78ed014cfcc!2s446%2038th%20St%2C%20Oakland%2C%20CA%2094609!5e0!3m2!1sen!2sus!4v1608840011493!5m2!1sen!2sus" width="90%" height="600" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <div className="story">
          <h1>The story</h1>
          <p>The journey started with flight to San Francisco.
          We saw this house on 10/26/2020 after looking at 12 houses and then continuing to look at 14 more.
          When we first saw it we liked it. But as we saw more and more houses we kept comparing everything to this house.
          Soon the indoor outdoor floorplan became a requirement.
          After we saw all the potential houses in Oakland, we decided to put in a less than list price offer since this had been on the market for over 60 days.
          The Listing agent did not like the lowball offer and rejected.
          We decided to play the waiting game.
          The day before we left we were informed there was an offer placed. We swopped in with a offer a bit over listing but with some contingencies.
          We lost the house that day and we were sad our house search turned out bad.
          When we got home, we were told that the previous offer fell through! So we put in an offer at cost and they accepted it!
          Just when we thought we had the house in the bag, drama hit.
          The listing agent was apparently rude to the appraiser and they refused to appraise the property.
          This put our loan at risk, we had a backup lender but it was a fully online lender so we are not sure how legit it is.
          Three days before closing we were finally approved! But we were not done yet, we had to sign the closing documents.
          After we sent the documents it turns out some of the pages were blank. Someone had put X's on some of the places we needed to actually sign.
          We rushed to our scanner & printer downstairs and sent the remaining documents.
          On 12/11/2020 we finally closed! On to our adventures in Oakland!!!!
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
