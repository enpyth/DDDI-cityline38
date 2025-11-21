import { Container, Typography, Box, Paper, Divider } from '@mui/material'

export default function PrivacyPage() {
    return (
        <main style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            {/* Header Section */}
            <Box sx={{ bgcolor: '#0B1C33', py: 8 }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontFamily: 'serif',
                            color: '#FCE6C8',
                            textAlign: 'center',
                            mb: 2
                        }}
                    >
                        Privacy Policy
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#fff',
                            textAlign: 'center',
                            fontWeight: 300,
                            opacity: 0.9
                        }}
                    >
                        How we collect, store, use and disclose your personal information.
                    </Typography>
                </Container>
            </Box>

            {/* Content Section */}
            <Container maxWidth="md" sx={{ mt: -4, mb: 10, position: 'relative', zIndex: 2 }}>
                <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: 2 }}>
                    <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Cyberate Project Management (CPM) and DDDI Group (“we”, “us”, “our”) are committed to protecting your privacy.
                        This Privacy Policy explains how we collect, store, use and disclose your personal information when you visit the Cityline 38 Website (“the Website”). Your use of the Website indicates your acceptance of this Policy.
                    </Typography>

                    <Divider sx={{ my: 6 }} />

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            1. Information We Collect
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Typography variant="body1" paragraph sx={{ color: '#444', lineHeight: 1.7 }}>
                                We may collect the following types of personal information:
                            </Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>1.1 Information you voluntarily provide</Typography>
                                <Box component="ul" sx={{ mt: 1, pl: 2, color: '#444' }}>
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Property enquiry details</li>
                                    <li>Any information submitted via online forms</li>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>1.2 Automatically collected information</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    When you visit the Website, analytics tools (such as Google Analytics) may automatically collect:
                                </Typography>
                                <Box component="ul" sx={{ mt: 1, pl: 2, color: '#444', mb: 2 }}>
                                    <li>IP address</li>
                                    <li>Device type, browser type & operating system</li>
                                    <li>Website usage behaviour (pages visited, time on page, clicks)</li>
                                    <li>Referring website or advertisement</li>
                                </Box>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    Cookies may be used to enhance your browsing experience.
                                    You may disable cookies in your browser settings, but some Website functions may be affected.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            2. How We Use Your Information
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Typography variant="body1" paragraph sx={{ color: '#444', lineHeight: 1.7 }}>
                                We may use your personal information for the following purposes:
                            </Typography>
                            <Box component="ul" sx={{ mt: 1, pl: 2, color: '#444', mb: 2 }}>
                                <li>Responding to your enquiries</li>
                                <li>Providing project updates or marketing materials</li>
                                <li>Sharing property information relevant to your interests</li>
                                <li>Maintaining internal administrative or data management processes</li>
                                <li>Improving Website functionality and user experience</li>
                                <li>Conducting analytics and performance reporting</li>
                                <li>Complying with legal or regulatory obligations</li>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7, fontWeight: 500 }}>
                                We do not sell, trade or rent your personal information.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            3. Disclosure to Third Parties
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Typography variant="body1" paragraph sx={{ color: '#444', lineHeight: 1.7 }}>
                                We may disclose your information to:
                            </Typography>
                            <Box component="ul" sx={{ mt: 1, pl: 2, color: '#444', mb: 2 }}>
                                <li>Real estate agents engaged to sell Cityline 38</li>
                                <li>Marketing service providers assisting with advertising or email campaigns</li>
                                <li>IT service providers and website hosting partners</li>
                                <li>Regulatory bodies if legally required</li>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                All third parties are required to handle your information securely and in accordance with Australian privacy law.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            4. Direct Marketing
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                By submitting your details, you consent to receiving email updates, project information and marketing materials.
                                You may unsubscribe at any time using the link provided in emails or by contacting us.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            5. Data Security
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Typography variant="body1" paragraph sx={{ color: '#444', lineHeight: 1.7 }}>
                                We take reasonable steps to protect your information from loss, misuse or unauthorised access, including:
                            </Typography>
                            <Box component="ul" sx={{ mt: 1, pl: 2, color: '#444', mb: 2 }}>
                                <li>Secure hosting environments</li>
                                <li>Access controls and user authentication</li>
                                <li>Regular system monitoring</li>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                However, no online transmission is completely secure, and we cannot guarantee absolute data security.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            6. Access & Correction
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Typography variant="body1" paragraph sx={{ color: '#444', lineHeight: 1.7 }}>
                                You may request:
                            </Typography>
                            <Box component="ul" sx={{ mt: 1, pl: 2, color: '#444', mb: 2 }}>
                                <li>Access to the personal information we hold</li>
                                <li>Correction of inaccurate or outdated information</li>
                                <li>Removal of your details from our marketing database</li>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                Requests can be made via email: <a href="mailto:info@dddi.com.au" style={{ color: 'inherit', textDecoration: 'underline' }}>info@dddi.com.au</a>
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            7. Third-Party Links
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                This Website may link to external websites.
                                We are not responsible for their privacy practices or content.
                                We recommend reviewing third-party privacy policies before providing personal information.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            8. Changes to This Policy
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                            We may update this Privacy Policy periodically.
                            The updated version will be published on this page with the “Last updated” date.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            9. Contact Us
                        </Typography>
                        <Box sx={{ bgcolor: '#f8f9fa', p: 3, borderRadius: 1, border: '1px solid #eee' }}>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                If you have questions about this Policy or how your information is handled, please contact:
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#0B1C33' }}>DDDI Group</Typography>
                                <Typography variant="body1" sx={{ color: '#444' }}>
                                    Email: <a href="mailto:info@dddi.com.au" style={{ color: 'inherit', textDecoration: 'underline' }}>info@dddi.com.au</a>
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444' }}>
                                    Address: 1204/147 Pirie Street, Adelaide SA 5000
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </main>
    )
}
