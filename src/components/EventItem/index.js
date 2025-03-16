// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickEventItem = () => {
    onClickEvent(id)
  }

  const eventClassName = isActive ? 'event-item active' : 'event-item'

  return (
    <li className={eventClassName}>
      <button type="button" className="event-button" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
