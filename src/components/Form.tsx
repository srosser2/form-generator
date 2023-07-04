import React from 'react';
import { useForm } from 'react-hook-form';
import { IField } from '../types/field';

const Form: React.FC<{
    title: string,
    schema: IField[],
    submitHandler: (data: any) => void
}> = ({ title, schema, submitHandler }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'onChange'});

    const fields = schema.map((field, i) => {
        let element;

        switch (field.type){
            case 'text':
                element = <input id={field.key} type='text' {...register(field.key, { ...field.validation })} />;
                break;
            case 'date':
                element = <input id={field.key} type='date' {...register(field.key, { ...field.validation })} />;
                break;
            case 'select':
                element = <select id={field.key} {...register(field.key, { ...field.validation })}>
                    { field.options!.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>;
                    })
                };
                </select>;
                break;
            case 'textarea':
                element = <textarea id={field.key} {...register(field.key, { ...field.validation })} />
                break;
            default:
                element = <input id={field.key} type='text' {...register(field.key, { ...field.validation })} />;
                break;
        }

        return <div className='form-group' key={i}>
            <label htmlFor={field.key}>{field.label}</label>
            {element}
            {errors[field.key] && <span className='error'>{`${errors[field.key]?.message}`}</span>}
        </div>;
    });

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <h2>{title}</h2>
            {fields}
            <button type='submit' disabled={!isValid}>Submit</button>
        </form>
    );
};

export default Form;
