import Button from "../components/Button"
import Headline from "../components/Headline"

// need to be responsive

const ContactPage = () => {
  return (
    <section className="page" id="contact">
        <Headline text="Contact me!"/>
        <div id="contact-grid" className="grid-page-layout">
            <div className="grid-item">
                <h1 className="contact-headline">GITHUB</h1>
                <Button url="https://github.com/Cestamir" text="Connect"/>
            </div>
            <div className="grid-item">
                <h1 className="contact-headline">EMAIL</h1>
                <Button url="#email" text="Connect"/>
            </div>
            <div className="grid-item">
                <h1 className="contact-headline">LINKEDIN</h1>
                <Button url="www.linkedin.com/in/cestmir-pavlasek-4bb741382

" text="Connect"/>
            </div>
            <div className="grid-item">
                <h1 className="contact-headline">X</h1>
                <Button url="https://x.com/Cestmirdev" text="Connect"/>
            </div>
        </div>
    </section>
  )
}

export default ContactPage