import { useState } from "react"
import "./Contact.scss"

const Contact = () => {
    const [ message, setMessage ] = useState( false )

    const handleSubmit = ( e ) => {
        e.preventDefault()
        setMessage( true )
    }

    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src="/src/assets/contact.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={ handleSubmit }>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <button type="submit" >Send</button>
                    {message && <span>Thanks, I&#39;ll respond ASAP</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact