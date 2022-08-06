import React, { useId, useState } from 'react';
import { sendMessage } from '../actions/api';
import { HOME_ROUTE } from '../utils/routeNames';
import { useNavigate } from "react-router-dom";
import useAsyncAction from '../hooks/useAsyncAction';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    await sendMessage(email, text);
    navigate(HOME_ROUTE);
  };

  const [saveData, isSubmitting] = useAsyncAction(onFormSubmit);

  const emailInputId = useId();
  const contentInputId = useId();

  return (
    <section>
      <form
        onSubmit={saveData}
        className='d-flex flex-column pb-2'
      >
        <h3>Kontakt</h3>

        <div className='form-group'>
          <label htmlFor={emailInputId}>
            Email
          </label>
          <input
            id={emailInputId}
            className='form-control'
            type='email'
            required
            value={email}
            onChange={onEmailChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor={contentInputId}>
            Treść
          </label>
          <textarea
            id={contentInputId}
            className='form-control'
            rows={5}
            required
            value={text}
            onChange={onTextChange}
          />
        </div>

        <div className='mt-2'>
          <button
            className='btn btn-primary d-inline-block'
            type='submit'
            disabled={isSubmitting}
          >
            Wyślij
          </button>
        </div>

      </form>
    </section>
  );
}
