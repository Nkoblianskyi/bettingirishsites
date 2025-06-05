import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-pure-white">
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-green/10 via-pure-white/50 to-gaelic-orange/10"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-stone-black mb-6">🔒 Privacy Policy</h1>
                        <p className="text-xl text-stone-black/70 mb-8">
                            How we collect, use, and protect your personal information at BettingIrishSites.com
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Introduction</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    BettingIrishSites.com ("we," "our," or "us") is committed to protecting your privacy and personal
                                    data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                                    you visit our website and use our services.
                                </p>
                                <p className="text-stone-black/80 leading-relaxed">
                                    We are an independent comparison website that helps Irish users find the best sports betting
                                    platforms. We do not operate as a bookmaker or gambling operator ourselves.
                                </p>
                                <div className="bg-emerald-green/5 rounded-lg p-4 border border-emerald-green/20">
                                    <p className="text-emerald-green font-medium text-sm">
                                        🇮🇪 This policy complies with Irish and EU data protection laws, including GDPR.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Information We Collect</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-emerald-green mb-3">📝 Information You Provide</h3>
                                    <p className="text-stone-black/80 leading-relaxed mb-2">
                                        We may collect information you voluntarily provide to us:
                                    </p>
                                    <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                        <li>Contact information (email address, name) when you contact us</li>
                                        <li>Feedback and comments you submit</li>
                                        <li>Newsletter subscription information</li>
                                        <li>Survey responses and quiz answers</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-emerald-green mb-3">🔍 Information We Collect Automatically</h3>
                                    <p className="text-stone-black/80 leading-relaxed mb-2">
                                        When you visit our website, we automatically collect certain information:
                                    </p>
                                    <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                        <li>IP address and location data</li>
                                        <li>Browser type and version</li>
                                        <li>Device information (mobile, desktop, tablet)</li>
                                        <li>Pages visited and time spent on site</li>
                                        <li>Referring website information</li>
                                        <li>Click-through data on external links</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-emerald-green mb-3">🍪 Cookies and Tracking Technologies</h3>
                                    <p className="text-stone-black/80 leading-relaxed mb-2">
                                        We use cookies and similar technologies to enhance your experience:
                                    </p>
                                    <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                        <li>Essential cookies for website functionality</li>
                                        <li>Analytics cookies to understand user behavior</li>
                                        <li>Marketing cookies for advertising and affiliate tracking</li>
                                        <li>Preference cookies to remember your settings</li>
                                    </ul>
                                    <p className="text-sm text-stone-black/60 mt-2">
                                        For detailed information about our cookie usage, please see our{" "}
                                        <Link href="/cookies" className="text-emerald-green hover:underline">
                                            Cookie Policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">How We Use Your Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    We use the collected information for the following purposes:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">🌐 Website Operation</h4>
                                        <ul className="text-sm text-stone-black/70 space-y-1">
                                            <li>• Provide and maintain our services</li>
                                            <li>• Improve website functionality</li>
                                            <li>• Ensure website security</li>
                                            <li>• Troubleshoot technical issues</li>
                                        </ul>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">📊 Analytics & Improvement</h4>
                                        <ul className="text-sm text-stone-black/70 space-y-1">
                                            <li>• Analyze user behavior and preferences</li>
                                            <li>• Improve content and user experience</li>
                                            <li>• Generate usage statistics</li>
                                            <li>• Optimize website performance</li>
                                        </ul>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">📧 Communication</h4>
                                        <ul className="text-sm text-stone-black/70 space-y-1">
                                            <li>• Respond to your inquiries</li>
                                            <li>• Send newsletters (with consent)</li>
                                            <li>• Provide customer support</li>
                                            <li>• Send important updates</li>
                                        </ul>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">💰 Business Operations</h4>
                                        <ul className="text-sm text-stone-black/70 space-y-1">
                                            <li>• Track affiliate referrals</li>
                                            <li>• Measure advertising effectiveness</li>
                                            <li>• Comply with legal obligations</li>
                                            <li>• Prevent fraud and abuse</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Legal Basis for Processing (GDPR)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    Under GDPR, we process your personal data based on the following legal grounds:
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-emerald-green text-pure-white flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                            ✓
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-black">Consent</h4>
                                            <p className="text-stone-black/70 text-sm">
                                                For marketing communications and non-essential cookies
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-emerald-green text-pure-white flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                            ✓
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-black">Legitimate Interest</h4>
                                            <p className="text-stone-black/70 text-sm">
                                                For website analytics, security, and business operations
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-emerald-green text-pure-white flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                            ✓
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-black">Legal Obligation</h4>
                                            <p className="text-stone-black/70 text-sm">For compliance with applicable laws and regulations</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Information Sharing and Disclosure</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    We may share your information in the following circumstances:
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-emerald-green/5 rounded-lg p-4 border border-emerald-green/20">
                                        <h4 className="font-bold text-emerald-green mb-2">🤝 Business Partners</h4>
                                        <p className="text-stone-black/70 text-sm">
                                            We share anonymized data with affiliate partners and advertising networks to track referrals and
                                            measure campaign effectiveness.
                                        </p>
                                    </div>

                                    <div className="bg-emerald-green/5 rounded-lg p-4 border border-emerald-green/20">
                                        <h4 className="font-bold text-emerald-green mb-2">🔧 Service Providers</h4>
                                        <p className="text-stone-black/70 text-sm">
                                            We work with trusted third-party services for analytics (Google Analytics), hosting, email
                                            services, and other business operations.
                                        </p>
                                    </div>

                                    <div className="bg-emerald-green/5 rounded-lg p-4 border border-emerald-green/20">
                                        <h4 className="font-bold text-emerald-green mb-2">⚖️ Legal Requirements</h4>
                                        <p className="text-stone-black/70 text-sm">
                                            We may disclose information when required by law, court order, or to protect our rights and the
                                            safety of our users.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gaelic-orange/10 rounded-lg p-4 border border-gaelic-orange/20">
                                    <h4 className="font-bold text-gaelic-orange mb-2">🚫 What We Don't Do</h4>
                                    <p className="text-stone-black/70 text-sm">
                                        We do not sell, rent, or trade your personal information to third parties for their marketing
                                        purposes.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Your Rights Under GDPR</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    As an EU/Irish resident, you have the following rights regarding your personal data:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">👁️ Right to Access</h4>
                                        <p className="text-stone-black/70 text-sm">Request a copy of the personal data we hold about you</p>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">✏️ Right to Rectification</h4>
                                        <p className="text-stone-black/70 text-sm">Request correction of inaccurate or incomplete data</p>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">🗑️ Right to Erasure</h4>
                                        <p className="text-stone-black/70 text-sm">
                                            Request deletion of your personal data ("right to be forgotten")
                                        </p>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">⏸️ Right to Restrict Processing</h4>
                                        <p className="text-stone-black/70 text-sm">Request limitation of how we process your data</p>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">📦 Right to Data Portability</h4>
                                        <p className="text-stone-black/70 text-sm">Request your data in a portable format</p>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">🚫 Right to Object</h4>
                                        <p className="text-stone-black/70 text-sm">Object to processing based on legitimate interests</p>
                                    </div>
                                </div>

                                <div className="bg-emerald-green/5 rounded-lg p-4 border border-emerald-green/20">
                                    <h4 className="font-bold text-emerald-green mb-2">📧 How to Exercise Your Rights</h4>
                                    <p className="text-stone-black/70 text-sm">
                                        To exercise any of these rights, contact us at: <strong>privacy@bettingirishsites.com</strong>
                                        <br />
                                        We will respond to your request within 30 days.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Data Security</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your personal data:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">🔒 Technical Measures</h4>
                                        <ul className="text-stone-black/70 text-sm space-y-1">
                                            <li>• SSL encryption for data transmission</li>
                                            <li>• Secure hosting infrastructure</li>
                                            <li>• Regular security updates</li>
                                            <li>• Access controls and authentication</li>
                                        </ul>
                                    </div>

                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">👥 Organizational Measures</h4>
                                        <ul className="text-stone-black/70 text-sm space-y-1">
                                            <li>• Staff training on data protection</li>
                                            <li>• Limited access to personal data</li>
                                            <li>• Regular security assessments</li>
                                            <li>• Incident response procedures</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gaelic-orange/10 rounded-lg p-4 border border-gaelic-orange/20">
                                    <p className="text-stone-black/70 text-sm">
                                        <strong>Important:</strong> While we strive to protect your data, no method of transmission over the
                                        internet is 100% secure. We cannot guarantee absolute security.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Data Retention</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
                                    policy:
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-emerald-green rounded-full mr-3"></div>
                                        <span className="text-stone-black/70 text-sm">
                                            <strong>Analytics data:</strong> 26 months (Google Analytics default)
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-emerald-green rounded-full mr-3"></div>
                                        <span className="text-stone-black/70 text-sm">
                                            <strong>Contact information:</strong> Until you request deletion or unsubscribe
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-emerald-green rounded-full mr-3"></div>
                                        <span className="text-stone-black/70 text-sm">
                                            <strong>Legal compliance data:</strong> As required by applicable laws
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">International Data Transfers</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    Some of our service providers may be located outside the EU/EEA. When we transfer your data
                                    internationally, we ensure appropriate safeguards are in place:
                                </p>

                                <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                    <li>Adequacy decisions by the European Commission</li>
                                    <li>Standard Contractual Clauses (SCCs)</li>
                                    <li>Certification schemes and codes of conduct</li>
                                    <li>Binding corporate rules for multinational companies</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Children's Privacy</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    Our website is intended for users aged 18 and over. We do not knowingly collect personal information
                                    from children under 18. If you are under 18, please do not use our website or provide any personal
                                    information.
                                </p>

                                <div className="bg-gaelic-orange/10 rounded-lg p-4 border border-gaelic-orange/20">
                                    <p className="text-gaelic-orange font-medium text-sm">
                                        🔞 Gambling is restricted to adults aged 18 and over. Please gamble responsibly.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                                </p>

                                <div className="bg-fog-gray rounded-lg p-4">
                                    <div className="space-y-2 text-stone-black/70">
                                        <p>
                                            <strong>Email:</strong> privacy@bettingirishsites.com
                                        </p>
                                        <p>
                                            <strong>Subject Line:</strong> Privacy Policy Inquiry
                                        </p>
                                        <p>
                                            <strong>Response Time:</strong> Within 30 days
                                        </p>
                                    </div>
                                </div>

                                <p className="text-stone-black/80 leading-relaxed text-sm">
                                    You also have the right to lodge a complaint with the Irish Data Protection Commission (DPC) if you
                                    believe we have not handled your personal data in accordance with data protection law.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Changes to This Policy</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                                    legal requirements, or other factors. When we make material changes, we will:
                                </p>

                                <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                    <li>Post the updated policy on this page</li>
                                    <li>Update the "Last updated" date</li>
                                    <li>Notify you via email if you have subscribed to our communications</li>
                                    <li>Provide prominent notice on our website for significant changes</li>
                                </ul>

                                <p className="text-stone-black/80 leading-relaxed">
                                    We encourage you to review this policy periodically to stay informed about how we protect your
                                    privacy.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-emerald-green text-pure-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Your Privacy Matters to Us</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We're committed to protecting your data while helping you find the best Irish betting experiences.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-pure-white text-emerald-green hover:bg-fog-gray px-8 py-3 rounded-lg font-bold text-lg transition-colors"
                    >
                        Explore Trusted Irish Sportsbooks
                    </Link>
                </div>
            </section>
        </div>
    )
}
