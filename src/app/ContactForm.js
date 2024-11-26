'use client';
import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ user: '', tel: '' });
    const [fin, setFin] = useState(false);

    function changeData(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    function sendForm(event) {
        event.preventDefault();
        if (formData.user !== '' && formData.tel !== '') {
            setFin(true);
        } else {
            setFin(false);
        }
    }

    return (
        <div>
            <form onSubmit={sendForm}>
                <input 
                    name="user" 
                    value={formData.user} 
                    onChange={changeData} 
                    placeholder="Usuario" 
                    required
                />
                <input 
                    name="tel" 
                    value={formData.tel} 
                    onChange={changeData} 
                    placeholder="Teléfono" 
                    required
                />
                <button type="submit">Enviar</button>
            </form>
            <p>{fin ? 'Formulario completo' : ''}</p>
        </div>
    );
}
