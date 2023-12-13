import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1015/1000/600",
      thumbnail: "https://picsum.photos/id/1015/250/150",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600",
      thumbnail: "https://picsum.photos/id/1019/250/150",
    },
    {
      original: "https://picsum.photos/id/1/1000/600",
      thumbnail: "https://picsum.photos/id/1/250/150",
    },
  ];
  return (
    <div style={{ width: "70vw", margin: "auto" }}>
      <ImageGallery
        items={images}
        // showPlayButton={false}
        // showFullscreenButton={false}
        // showNav={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={2000}
        slideDuration={1000}
        showThumbnails={true}
        thumbnailPosition="left"
      />
    </div>
  );
}

export default App;
// https://www.npmjs.com/package/react-image-gallery
// npm install react-image-gallery

// Fotos de prueba
// https://picsum.photos/
