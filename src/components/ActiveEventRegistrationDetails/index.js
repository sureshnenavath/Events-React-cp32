import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {imageUrl, altText, status} = props

  const renderContent = () => {
    switch (status) {
      case 'YET_TO_REGISTER':
        return (
          <>
            <img src={imageUrl} alt={altText} className="registration-image" />
            <p className="registration-text">
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you fall totally in love with
              this beautiful art form.
            </p>
            <button type="button" className="register-button">
              Register Here
            </button>
          </>
        )
      case 'REGISTERED':
        return (
          <>
            <img src={imageUrl} alt={altText} className="registration-image" />
            <h1 className="registered-heading">
              You have already registered for the event
            </h1>
          </>
        )
      case 'REGISTRATIONS_CLOSED':
        return (
          <>
            <img src={imageUrl} alt={altText} className="registration-image" />
            <h1 className="closed-heading">Registrations Are Closed Now!</h1>
            <p className="registration-text">
              Stay tuned. We will reopen the registrations soon!
            </p>
          </>
        )
      default:
        return null
    }
  }

  return <div className="registration-details">{renderContent()}</div>
}

export default ActiveEventRegistrationDetails
