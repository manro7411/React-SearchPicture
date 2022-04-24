/* eslint-disable jsx-a11y/alt-text */
import "./PicturePost.css";
function PicturePost(props) {
    const{ image,onBgClick} = props
    return (
        <div className="picture-post">
            <div className="picture-post-bg" onClick={onBgClick}>
                <div className="picture-post-content">
                    <img src={image.thumbnaiUrl} />
                    <h4>{image.title}</h4>
                </div>
            </div>
        </div>
    );
}
export default PicturePost;