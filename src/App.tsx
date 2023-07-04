import React from 'react';
import formSchema from '../formSchema.json';
import Form from './components/Form';
import { generateEnquiryEmailBody } from './lib/generateEnquiryEmailBody';

const App: React.FC = () => {
    const handleSubmit = (data: { enquiryType: string }) => {
        const email = generateEnquiryEmailBody(data.enquiryType);
        console.log(email);
    };

    return <main>
        <div className='container'>
            <Form title='Payroll Enquiry' schema={formSchema} submitHandler={handleSubmit}/>
        </div>
    </main>;
};

export default App;
