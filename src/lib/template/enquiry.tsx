import React from 'react'

export type EnquiryEmailProps = {
  firstName: string
  lastName: string
  email: string
  mobile?: string
  suburb?: string
  postcode?: string
  message?: string
}

export function EnquiryEmail({
  firstName,
  lastName,
  email,
  mobile,
  suburb,
  postcode,
  message,
}: EnquiryEmailProps) {
  return (
    <div
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        color: '#333',
        lineHeight: 1.6,
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <p style={{ margin: '0 0 16px', fontSize: '16px' }}>Hello Admin,</p>
        <p style={{ margin: '0 0 16px', fontSize: '16px' }}>
          You got a new message from {firstName} {lastName}
        </p>
        {message && (
          <div style={{ margin: '0 0 24px', fontSize: '16px', whiteSpace: 'pre-wrap' }}>
            {message}
          </div>
        )}
        <div style={{ margin: '0 0 24px' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 'bold' }}>Contact Details:</p>
          <p style={{ margin: '0 0 8px', fontSize: '16px' }}>Email: {email}</p>
          <p style={{ margin: '0 0 8px', fontSize: '16px' }}>Phone: {mobile || 'Not provided'}</p>
          <p style={{ margin: '0 0 8px', fontSize: '16px' }}>Suburb: {suburb || 'Not provided'}</p>
          <p style={{ margin: '0 0 16px', fontSize: '16px' }}>Postcode: {postcode || 'Not provided'}</p>
        </div>
        <p style={{ margin: '0 0 16px', fontSize: '16px' }}>Preference: cityline38</p>
        <p style={{ margin: '0 0 24px', fontSize: '16px' }}>From page: `https://cityline38.com.au/`</p>
        <p style={{ margin: '0 0 0', fontSize: '16px' }}>Best wishes,</p>
        <p style={{ margin: '0 0 0', fontSize: '16px', fontWeight: 'bold' }}>Cyberate Notification</p>
      </div>
    </div>
  )
}

const labelStyle = {
  fontWeight: 600,
  padding: '12px 0',
  width: '140px',
  color: '#555',
  borderBottom: '1px solid #eee',
}

const valueStyle = {
  padding: '12px 0',
  color: '#111',
  borderBottom: '1px solid #eee',
}

export default EnquiryEmail
