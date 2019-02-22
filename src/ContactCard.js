import React from "react"

// props arg passes ContactCard args to this component
// - i.e. in App.js we pass name, imgUrl, phone, and email in as props
function ContactCard(props) {
    console.log(props)
    return (
            <div className="contact-card">
                <img src={props.contact.imgUrl}/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
    )
}

export default ContactCard