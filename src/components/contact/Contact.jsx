import { useState } from "react"
import "./Contact.scss"

const Contact = () => {
    const [ send, setSend ] = useState( '' )
    const [ email, setEmail ] = useState( "" )
    const [ message, setMessage ] = useState( "" )

    // handle the submission of form and send email
    const handleSubmit = ( e ) => {
        e.preventDefault()

        fetch( "/send-email", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { email, message } )
        } )
            .then( response => response.json() )
            .then( data => {
                if ( data.success ) {
                    setSend( "Email sent successfully" )
                }
                else {
                    setSend( "Email could not be sent" )
                }
            } )
            .catch( error => {
                console.error( error )
                setSend( 'An error occurred' )
            } )
    }

    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src="/src/assets/contact.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={ handleSubmit }>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        required
                    />
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        value={ message }
                        onChange={ ( e ) => setMessage( e.target.value ) }
                        required
                    ></textarea>
                    <button type="submit" >Send</button>
                    { send.length > 0 && <span>Thanks, I&#39;ll respond ASAP</span> }
                </form>
            </div>
        </div>
    )
}

export default Contact