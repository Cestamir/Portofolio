import Button from "./components/Button"



const ContactPage = () => {
  return (
    <section className="page" id="contact">
        <div id="contact-grid" className="grid-page-layout">
            <div className="grid-item">
                <h1 className="contact-headline">GITHUB</h1>
                <Button text="Connect"/>
            </div>
            <div className="grid-item">
                <h1 className="contact-headline">EMAIL</h1>
                <Button text="Connect"/>
            </div>
            <div className="grid-item">
                <h1 className="contact-headline">LINKEDLN</h1>
                <Button text="Connect"/>
            </div>
            <div className="grid-item">
                <h1 className="contact-headline">GITHUB</h1>
                <Button text="Connect"/>
            </div>
            {/* consider clicking the grid-item to link to the adress */}
        </div>
    </section>
  )
}

export default ContactPage