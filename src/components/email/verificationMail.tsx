// verificationMail.tsx

import React from 'react';

interface VerificationMailProps {
    confirmLink: string;
}

const VerificationMail: React.FC<VerificationMailProps> = ({ confirmLink }) => {
    const verificationLink = confirmLink;

    const containerStyle: React.CSSProperties = {
        backgroundColor: '#000000',
        padding: '16px',
    };

    const innerContainerStyle: React.CSSProperties = {
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '16px',
    };

    const paragraphStyle: React.CSSProperties = {
        color: '#4b5563',
        marginBottom: '24px',
    };

    const linkStyle: React.CSSProperties = {
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '14px 28px',
        borderRadius: '4px',
        textAlign: 'center',
        width: '100%',
        textDecoration: 'none',
    };

    const centerLink: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const noteStyle: React.CSSProperties = {
        color: '#6b7280',
        fontSize: '0.875rem',
        marginTop: '24px',
        opacity: 70,
    };

    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <h2 style={headingStyle}>Hesabınızı Doğrulayın</h2>
                <p style={paragraphStyle}>Merhaba, hesabınızı doğrulamak için aşağıdaki bağlantıya tıklayın:</p>
                <div style={centerLink}>
                    <a href={verificationLink} style={linkStyle}>
                        Hesabımı Doğrula
                    </a>
                </div>
                <p style={noteStyle}>
                    Bu bağlantı 24 saat boyunca geçerlidir. Eğer bu e-postayı beklemiyorsanız, lütfen görmezden gelin.
                </p>
            </div>
        </div>
    );
};

export default VerificationMail;