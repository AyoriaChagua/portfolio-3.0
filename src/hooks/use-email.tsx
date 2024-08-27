import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

export const useEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [result, setResult] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const templateParams = {
            name,
            email,
            message: message + " " + "From: " + email,
        };
        try {
            setIsLoading(true);
            const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID!;
            const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID!;
            const emailTempplateParams = import.meta.env.VITE_EMAIL_TEMPLATE_PARAMS!;
    
            const response = await emailjs.send(emailServiceId, emailTemplateId, templateParams, emailTempplateParams);
    
            if (response.status === 200) {
                setName('');
                setEmail('');
                setMessage('');
                setSuccess(true);
                setResult('');
    
                // Establecer el estado `success` a false después de 2 segundos
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            } else {
                throw new Error("Email could not be sent");
            }
        } catch (error) {
            setSuccess(false);
            if (error instanceof Error) {
                setResult(error.message);
            } else {
                setResult('An unknown error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(false);
        setSuccess(false);
    }, [])
    

    return {
        name,
        email,
        message,
        success,
        result,
        setEmail,
        setMessage,
        setSuccess,
        setResult,
        handleSubmit,
        setName,
        isLoading
    }
}