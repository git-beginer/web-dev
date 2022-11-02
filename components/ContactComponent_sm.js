import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactComponent_sm = () => {
    return (
        <div className="flex flex-wrap p-3">
            <ContactInfo />
            <ContactForm />
        </div>
    )
}

export default ContactComponent_sm;