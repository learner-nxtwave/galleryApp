// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChangeImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const chaneImage = () => {
    onChangeImage(id)
  }

  return (
    <li>
      <button className="imageItem" type="button" onClick={chaneImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
