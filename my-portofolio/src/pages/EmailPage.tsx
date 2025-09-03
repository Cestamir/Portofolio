
import React, { useState, type ChangeEvent } from 'react'
import Headline from '../components/Headline'

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

    const [emailData,setEmailData] = useState<EmailForm>({
        email: '',
        subject: '',
        message: ''
    })
    const [error,setError] = useState<ErrorForm>({});
    const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
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

    const handleSubmit = () => {
        setIsSubmitting(true)
        try {
        if(!validateEmail(emailData.email.trim())){
            console.log("enter a valid email")
            return;
        }

        if(emailData.message.trim().length > 100){
            console.log("please enter a meesage shorter than 100 characters")
            return;
        } else if (emailData.message.trim().length < 10){
            console.log("Enter a message longer than 10 characters")
            return;
        }

        if(emailData.subject === ""){
            setEmailData((prev) => ({
                ...prev,
                subject: "any"
            }))
        }
        console.log("email is sending..")
        setSubmitStatus("success")

        } catch(err) {
            console.log(err)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
            if (submitStatus === "success") {
                console.log("Email sent successfully !")
                setEmailData({
                email: '',
                subject: '',
                message: ''
                })
            }

        }

    }

    // make a validateform function where the validation process take place, than call that function in the handlesubmit, in handlesubmit try section apply the email js await function, move the statusemail to the try block ot leave it here as it is, make the error object using the console logs from the validation to make it display on the page - check the notes for more info

    const subjectOptions = [
    {value:"",name: "Select an option.."},
    {value:'tip',name : "Tip or suggestion"},
    {value:'any',name: "General"},
    {value:'work',name: "Work offer"},
    ]

  return (
    <section className='page' id='email'>
        <Headline text='Email Form' size={32}/>
        <div className='email-form'>
            <label >Email:</label>
            <input name='email' placeholder='Emailadress@example.com' required id='email-input' type='email' value={emailData.email} onChange={handleChange}/>
            <p>*required</p>
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
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </section>
  )
}

export default EmailPage