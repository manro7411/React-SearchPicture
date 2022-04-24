/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// public >> /
// thumbnailUrl
import './App.css';
import AppHeader from './Components/AppHeader';
import Picture from './Components/Picture';
import images from './data/pics';
import PicturePost from './Components/PicturePost';
import Pic from './data/pics';
import { useState } from 'react';
import AppSearch from './Components/AppSearch';

function App() {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [searchText, setSearchText] = useState('');
  // const [ , ] = userState(images[0]);

  function onPictureOpenClick() {
    setSelectedPicture(images)
  }
  function onPictureCloseClick() {
    setSelectedPicture(null);
  }
  const imageElements = images.filter((image) => {
    return image.title.includes(searchText);
  }).map((image, index) => {
    return <Picture key={index} image={image} onPictureClick={onPictureOpenClick} />
  });
  let picturePost = null;
  if (!!selectedPicture) {
    picturePost = <PicturePost image={selectedPicture} onBgClick={onPictureCloseClick} />
  }
  return (
    <div className="App">
      <AppHeader />
      <section className='app-section'>
        <AppSearch value={searchText} onValueChange={setSearchText} />
        <div className='app-grid'>
          {imageElements}
        </div>
      </section>
      {picturePost}
    </div>
  );
}
export default App;
