// Write your code here
import './index.css'

const DestinationItem = props => {
    const { name, imgUrl, subject, date } = props
    return ( <
        li className = "image-container" >
        <
        img className = "place-image"
        src = { imgUrl }
        alt = { name }
        />

        <
        p className = "place-name" > { name } < /p>

        <
        p className = "place-subject" > { subject } < /p> <
        p className = "place-date" > { date } <
        /p>< /
        li >
    )
}

export default DestinationItem;