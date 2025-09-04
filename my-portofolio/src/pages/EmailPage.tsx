
import React, { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import Headline from '../components/Headline'
import emailjs from '@emailjs/browser';


interface EmailForm {
    email: string;
    subject: "work" | "tip" | "any" | "";
    message: string;
}

interface ErrorForm {
    email?:string;
    subject?:string;
    message?:string;
}

const EmailPage : React.FC = () => {

    const form = useRef<HTMLFormElement>(null);

    const [emailData,setEmailData] = useState<EmailForm>({
        email: '',
        subject: '',
        message: ''
    })
    const [error,setError] = useState<ErrorForm>({});
    const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e : ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.currentTarget;

        setEmailData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const validateEmail = (email : string) => {
        const reg = new RegExp(/^[a-z]{1,20}[@][a-z]{1,20}[.][a-z]{1,10}/) 
        return reg.test(email);
    }

    const validateForm = () => {
        const newErrors: ErrorForm = {}
        if(!validateEmail(emailData.email.trim())){
            newErrors.email = 'Enter a valid email';
        }

        if(emailData.message.trim().length > 100){
            newErrors.message = 'Enter a valid message shorter than 100 char.'
        } else if (emailData.message.trim().length < 10){
            newErrors.message = 'Enter a message longer than 10 char.'
        }

        if(emailData.subject === ""){
            setEmailData((prev) => ({
                ...prev,
                subject: "any"
            }))
        }
        setError(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e? : FormEvent) => {
        e?.preventDefault();
        setIsSubmitting(true)

        const isValid = validateForm();

        if (!isValid) {
            setIsSubmitting(false);
            setSubmitStatus("error")
            return;
        }

        try {
            const result = await emailjs.sendForm('service_bw6c2bt',
            'template_y1t4eqg',
            form.current!,
            'wy2vFCtWrKgmo-O_Y')
            console.log("SUCCESS",result.text,result.status)
            setSubmitStatus("success")
        } catch (err) {
            console.log("FAILED..",err)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
            setEmailData({
                email: "",
                subject: "",
                message: ""
            })
            setError({})
        }

        setEmailData({
            email: '',
            subject: '',
            message: ''
        })
        setError({});

    }

    // currently working as expected with status 200 ok, need more styling 

    const subjectOptions = [
    {value:"",name: "Select an option.."},
    {value:'tip',name : "Tip or suggestion"},
    {value:'any',name: "General"},
    {value:'work',name: "Work offer"},
    ]

  return (
    <section className='page' id='email'>
        <Headline text='Email Form' size={32}/>
        <form ref={form}>
            <div className='email-form'>
                <label >Email:</label>
                <input name='email' placeholder='Emailadress@example.com' required id='email-input' type='email' value={emailData.email} onChange={handleChange}/>
                <p>*required</p>
                {error.email && <p style={{color: "red"}}>{error.email}</p>}
            </div>
            <div className='select-form'>
                <label>Subject:</label>
                <select name='subject' value={emailData.subject} id='select-input' onChange={handleChange}>
                    {subjectOptions.map((item) => (
                        <option key={item.name} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='message-form'>
                <label>Message:</label>
                <textarea name='message' onChange={handleChange} value={emailData.message} placeholder='Enter your message..' required rows={6} id='text-input'/>
                <p>*required</p>
                {error.message && <p style={{color: "red"}}>{error.message}</p>}
            </div>
            <button type='submit' disabled={isSubmitting} onClick={handleSubmit}>{isSubmitting ? "Sending.." : "Submit"}</button>

            {submitStatus === "error" && <p>Something went wrong.</p>}
            {submitStatus === "success" &&  <p>Message sent successfully !</p>} 
        </form>
    </section>
  )
}

export default EmailPage