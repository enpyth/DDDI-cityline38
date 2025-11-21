'use client'

export default function SectionSeparator() {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#0B1C33',
                padding: 0
            }}
        >
            <div
                style={{
                    width: '70%',
                    height: '1px',
                    backgroundColor: '#FCE6C8',
                    opacity: 0.5
                }}
            />
        </div>
    )
}
