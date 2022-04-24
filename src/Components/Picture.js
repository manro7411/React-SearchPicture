/* eslint-disable jsx-a11y/alt-text */
// props >> import any file or img in the web page
/* eslint-disable jsx-a11y/alt-text */
import "./Picture.css";
function Picture(props) {
    const { image ,onPictureClick} = props;
    return (
        <div className="tattoo-item">
            <img src={image.thumbnailUrl} onClick={() => {onPictureClick(Picture)}} />
            <h4>{image.title}</h4>
        </div>
    );
}
export default Picture;