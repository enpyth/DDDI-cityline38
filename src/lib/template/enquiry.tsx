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
        <h2
          style={{
            margin: '0 0 20px',
            color: '#0B1C33',
            borderBottom: '2px solid #FCE6C8',
            paddingBottom: '10px',
          }}
        >
          New Website Enquiry
        </h2>
        <p style={{ margin: '0 0 24px', fontSize: '16px' }}>
          You have received a new enquiry from the <strong>Cityline 38</strong> website.
        </p>
        <table
          cellPadding={0}
          cellSpacing={0}
          style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}
        >
          <tbody>
            <tr>
              <td style={labelStyle}>Name</td>
              <td style={valueStyle}>
                {firstName} {lastName}
              </td>
            </tr>
            <tr>
              <td style={labelStyle}>Email</td>
              <td style={valueStyle}>
                <a href={`mailto:${email}`} style={{ color: '#0B1C33' }}>
                  {email}
                </a>
              </td>
            </tr>
            {mobile && (
              <tr>
                <td style={labelStyle}>Mobile</td>
                <td style={valueStyle}>{mobile}</td>
              </tr>
            )}
            {suburb && (
              <tr>
                <td style={labelStyle}>Suburb</td>
                <td style={valueStyle}>{suburb}</td>
              </tr>
            )}
            {postcode && (
              <tr>
                <td style={labelStyle}>Postcode</td>
                <td style={valueStyle}>{postcode}</td>
              </tr>
            )}
          </tbody>
        </table>

        {message && (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '16px', margin: '0 0 10px', color: '#555' }}>Message:</h3>
            <div
              style={{
                backgroundColor: '#f5f5f5',
                padding: '15px',
                borderRadius: '4px',
                whiteSpace: 'pre-wrap',
                fontSize: '14px',
                color: '#333',
              }}
            >
              {message}
            </div>
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#888' }}>
        <p>© {new Date().getFullYear()} Cityline 38. All rights reserved.</p>
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
