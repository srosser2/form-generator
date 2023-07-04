export const generateEnquiryEmailBody = (enquiryType: string): string => {
    return `<!doctype html>
    <html>
        <head>
        </head>
        <body>
            <h1>Thank you for your enquiry into ${enquiryType}</h1>
            <p>We will review your request and respond to you within 5 days.</p>
        </body>
    </html>
    `;
};