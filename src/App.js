import './App.css';
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
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
          Will we get the house? Who knows.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
