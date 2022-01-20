import React from 'react';
import { ContactTitleContainer, ContactTitle, ContactContainer, ContactItem, ContactLink, ContactSub } from './ContactElements';


const Contact = () => {
    return (
        <>
        <ContactTitleContainer>
            <ContactTitle className="font-face-bbo">Contact</ContactTitle>
        </ContactTitleContainer> 
        <ContactContainer>
            <ContactSub className="font-face-bb">Say Hi</ContactSub>
            <ContactItem className="font-link">madisonkelly888@gmail.com</ContactItem>
            <ContactItem className="font-link">314-402-2769</ContactItem>
            <ContactLink className="font-link"><a href="https://github.com/mkelly88">Github</a></ContactLink>
            <ContactLink className="font-link"><a href="https://www.linkedin.com/in/madison-kelly-2455b6160/">LinkedIn</a></ContactLink>
        </ContactContainer> 
        </>
    )
}

export default Contact;
