import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { bool, func } from 'prop-types';
import './contact-form.css'

const RequiredCaracter = () => {
  return <span id='required'>*</span>
}

const checkEmptyField = field => !!(!field || field.length <= 0);


const ContactForm = ({ renderForm, setRenderForm }) => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [mail, setMail] = useState('')
  const [addr, setAddr] = useState('')
  const [city, setCity] = useState('')
  const [cp, setCp] = useState('')
  const [message, setMessage] = useState('')

  const formDisabled = checkEmptyField(name) || checkEmptyField(tel) || checkEmptyField(mail) || checkEmptyField(addr) || checkEmptyField(city) || checkEmptyField(cp) || checkEmptyField(message);

  const onSubmit = async (data) => {
    if(formDisabled) {
      console.error("El formulario no se encuentra completo")
    }
    setRenderForm(false);
    const a = await emailjs.send('service_8t8ipds', 'template_cia7qsh', data, 'SmlRoLGA2X5baeW0I');
    console.log(a)
  };

  return renderForm ?
      <form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre y Apellido <RequiredCaracter/></label>
          <input
            {...register('client_name')}
            required
            type='text'
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Teléfono {'(Con código de área)'} <RequiredCaracter/></label>
          <input
            placeholder='123 1523456789'
            {...register('tel')}
            required
            type='tel'
            onChange={e => setTel(e.target.value)}
          />
        </div>
        <div>
          <label>Mail <RequiredCaracter/></label>
          <input
            placeholder='example@mail.com'
            {...register('mail')}
            required
            type='email'
            onChange={e => setMail(e.target.value)}
            />
        </div>
        <div>
          <label>Dirección del Evento <RequiredCaracter/></label>
          <input
            {...register('address')}
            required
            type='text'
            onChange={e => setAddr(e.target.value)}
            />
        </div>
        <div>
          <label>Ciudad del Evento <RequiredCaracter/></label>
          <input
            {...register('city')}
            required
            type='text'
            onChange={e => setCity(e.target.value)}
            />
        </div>
        <div>
          <label>Código Postal del Evento <RequiredCaracter/></label>
          <input
            {...register('postal_code')}
            required
            type='text'
            onChange={e => setCp(e.target.value)}
            />
        </div>
        <div id='textAreaContainer'>
          <label>Consulta <RequiredCaracter/></label>
          <textarea id='textArea' {...register('message')} minLength={20} onChange={e => setMessage(e.target.value)} required></textarea>
        </div>
        <input id='submit' disabled={formDisabled} type="submit" />
      </form>
      :
      null;
};

ContactForm.propTypes = {
  renderForm: bool.isRequired,
  setRenderForm: func.isRequired
}

export default ContactForm;
