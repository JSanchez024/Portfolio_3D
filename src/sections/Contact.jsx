import React from 'react'
import  emailjs  from '@emailjs/browser'
import { useRef, useState } from 'react'

export const Contact = () => {
    const formRef = useRef();
    
    const [loading, setLoading] = useState(false);
    const [form, setFform] = useState({
        name: '',
        email: '',
        message: '',
    });  

    const handleChange = ({target: {name, value}}) => {
        setFform({...form, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {  
             await emailjs.send(
                'service_ygp141v',
                'template_yz9z1yo',
                {
                    from_name: form.name,
                    to_name: 'Joaquin Sanchez',
                    from_email: form.email,
                    to_email: 'joaquin.sanchez.suazo@gmail.com',
                    message: form.message,
                },
                'YggqgZ621nBmdxS8C'
            ) 

            setLoading(false);
            alert('Email enviado con exito!');

            setFform({
                name: '',
                email: '',
                message: '',
            });

        } catch (error) {
            setLoading(false);
            alert('Algo salio mal, intenta de nuevo');
        }
    }   
                                                                      


  return (
    <section className='c-space my-20'>

        <div className='relative min-h-max flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal" className='absolute h-230' />

            <div className='z-10 px-5 mt-20 '>
                <h3 className='head-text text-white pt-6 text-center'>Contactame</h3>
                <p className='text-lg text-white mt-20 mx-3'>Para ponerte en contacto conmigo solo
                    llena el formulario y me pondré en contacto contigo a la brevedad posible.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 mx-4 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label '>Nombre</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='Ej. Juan Perez Morales'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input 
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='Ej. ejemplo@ejemplo.com'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Mensaje</span>
                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className='field-input'
                            placeholder='Ej. Hola! ¿En que te puedo ayudar? Gracias por tu mensaje :)'
                        />
                    </label>

                    <button type='submit' className='field-btn cursor-pointer' disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar'}
                        <img src="/assets/arrow-up.png" alt="flecha arriba" className='field-btn_arrow' />
                    </button>

                </form>
                

            </div>
        </div>

    </section>
  )
}
