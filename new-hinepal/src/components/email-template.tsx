import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  message?: string;
  contactNumber?: string;
}

export function EmailTemplate({ firstName, email, message, contactNumber }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#16a34a', fontSize: '24px', marginBottom: '20px' }}>
        New Inquiry from {firstName}
      </h1>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#374151', fontSize: '18px', marginBottom: '15px' }}>Contact Information:</h2>
        <p style={{ margin: '5px 0', color: '#6b7280' }}>
          <strong>Name:</strong> {firstName}
        </p>
        {email && (
          <p style={{ margin: '5px 0', color: '#6b7280' }}>
            <strong>Email:</strong> {email}
          </p>
        )}
        {contactNumber && (
          <p style={{ margin: '5px 0', color: '#6b7280' }}>
            <strong>Contact Number:</strong> {contactNumber}
          </p>
        )}
      </div>

      {message && (
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ color: '#374151', fontSize: '18px', marginBottom: '15px' }}>Message:</h2>
          <p style={{ color: '#4b5563', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {message}
          </p>
        </div>
      )}

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
        <p style={{ color: '#166534', margin: '0', fontSize: '14px' }}>
          This inquiry was sent from the Hi Nepal Treks website contact form.
        </p>
      </div>
    </div>
  );
}