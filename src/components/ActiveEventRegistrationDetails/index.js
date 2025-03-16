// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {imageUrl, altText} = props

  return (
    <div className="registration-details">
      <img src={imageUrl} alt={altText} className="registration-image" />
    </div>
  )
}

export default ActiveEventRegistrationDetails
