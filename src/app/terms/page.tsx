'use client'

import { Container, Typography, Box, Paper, Divider } from '@mui/material'

export default function TermsPage() {
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
                        Terms & Conditions
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
                        Please read these terms carefully before using our website.
                    </Typography>
                </Container>
            </Box>

            {/* Content Section */}
            <Container maxWidth="md" sx={{ mt: -4, mb: 10, position: 'relative', zIndex: 2 }}>
                <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: 2 }}>
                    <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Welcome to the Cityline 38 website (“the Website”).
                        This Website is operated by Cyberate Project Management (CPM) and DDDI Group (“we”, “us”, “our”).
                        By accessing, browsing or using this Website, you agree to be bound by the following Terms & Conditions.
                        If you do not agree with these terms, you should immediately discontinue use of the Website.
                    </Typography>

                    <Divider sx={{ my: 6 }} />

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            1. Website Content
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>1.1</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    The information, images, floorplans, renders, pricing and descriptions on this Website are provided for general information purposes only. While we make reasonable efforts to ensure accuracy, we do not guarantee that all content is complete, current or free from error.
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>1.2</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    All illustrations, floorplans, façade images, materials, fittings and finishes are artistic impressions and may differ from the final built form. Actual specifications and inclusions are subject to change without notice.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>1.3</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    Nothing on this Website constitutes legal, financial or property advice. Users should seek independent professional advice before making any purchasing decisions.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            2. Property Information & Availability
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>2.1</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    Property availability, pricing, dimensions and specifications are indicative only and may be varied by the developer at any time without notice.
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>2.2</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    The Website does not guarantee that any particular property will remain available. Properties may be sold, withdrawn or modified at any time.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>2.3</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    All sales are subject to formal contracts and applicable legislation. Website content does not form part of any contract.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            3. Intellectual Property
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>3.1</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    All content on this Website—including text, images, graphics, logos, renders, layout and design—is owned or licensed by us and is protected by copyright and trademark laws.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>3.2</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    You may browse the Website for personal information purposes only. You must not copy, distribute, reproduce, publish, transmit or adapt any content without prior written permission.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            4. Third-Party Links
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>4.1</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    This Website may contain links to third-party websites for convenience. We do not endorse, control or assume responsibility for any third-party content or policies.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>4.2</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    Users access third-party websites at their own risk.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            5. Disclaimer & Limitation of Liability
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>5.1</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    To the fullest extent permitted by law, we disclaim all liability for any direct, indirect or consequential loss arising from:
                                </Typography>
                                <Box component="ul" sx={{ mt: 1, pl: 2, color: '#444' }}>
                                    <li>reliance on Website information,</li>
                                    <li>inaccuracy or incompleteness,</li>
                                    <li>temporary unavailability,</li>
                                    <li>or third-party actions.</li>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>5.2</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    Your use of this Website is at your own risk.
                                    No warranties are given regarding uninterrupted access, error-free operation or immunity from viruses.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            6. Website Access & Use
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>6.1</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    You agree not to:
                                </Typography>
                                <Box component="ul" sx={{ mt: 1, pl: 2, color: '#444' }}>
                                    <li>use the Website for unlawful purposes;</li>
                                    <li>attempt to breach security or interfere with Website functionality;</li>
                                    <li>transmit harmful code, malware or spam.</li>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>6.2</Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                    We reserve the right to restrict or refuse Website access at any time without notice.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            7. Privacy
                        </Typography>
                        <Box sx={{ pl: 2, borderLeft: '4px solid #FCE6C8' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>7.1</Typography>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                                We may collect personal information submitted through forms or enquiries. All personal information is handled in accordance with our Privacy Policy.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            8. Changes to Terms
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                            We may update these Terms & Conditions from time to time. Continued use of the Website constitutes acceptance of updated terms.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'serif', mb: 3, color: '#0B1C33', fontWeight: 600 }}>
                            9. Governing Law
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                            These Terms are governed by the laws of South Australia.
                            Any disputes arising from the use of this Website will be subject to the exclusive jurisdiction of the South Australian courts.
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </main>
    )
}
