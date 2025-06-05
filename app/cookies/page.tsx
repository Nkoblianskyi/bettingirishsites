import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-pure-white">
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-green/10 via-pure-white/50 to-gaelic-orange/10"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-stone-black mb-6">🍪 Cookie Policy</h1>
                        <p className="text-xl text-stone-black/70 mb-8">
                            How we use cookies to improve your experience on BettingIrishSites.com
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
                                <CardTitle className="text-2xl text-stone-black">What Are Cookies?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    Cookies are small text files that are placed on your computer or mobile device when you visit a
                                    website. They are widely used to make websites work more efficiently and to provide information to
                                    website owners.
                                </p>
                                <p className="text-stone-black/80 leading-relaxed">
                                    At BettingIrishSites.com, we use cookies to enhance your browsing experience, analyze site traffic,
                                    and understand where our visitors are coming from.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Types of Cookies We Use</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-emerald-green mb-3">🔧 Essential Cookies</h3>
                                    <p className="text-stone-black/80 leading-relaxed mb-2">
                                        These cookies are necessary for the website to function properly. They enable basic functions like
                                        page navigation and access to secure areas of the website.
                                    </p>
                                    <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                        <li>Session management</li>
                                        <li>Security features</li>
                                        <li>Cookie consent preferences</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-emerald-green mb-3">📊 Analytics Cookies</h3>
                                    <p className="text-stone-black/80 leading-relaxed mb-2">
                                        These cookies help us understand how visitors interact with our website by collecting and reporting
                                        information anonymously.
                                    </p>
                                    <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                        <li>Google Analytics (traffic analysis)</li>
                                        <li>Page view tracking</li>
                                        <li>User behavior patterns</li>
                                        <li>Site performance monitoring</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-emerald-green mb-3">🎯 Marketing Cookies</h3>
                                    <p className="text-stone-black/80 leading-relaxed mb-2">
                                        These cookies track visitors across websites to display relevant advertisements and measure the
                                        effectiveness of advertising campaigns.
                                    </p>
                                    <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                        <li>Affiliate tracking</li>
                                        <li>Advertising personalization</li>
                                        <li>Conversion tracking</li>
                                        <li>Retargeting campaigns</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-emerald-green mb-3">⚙️ Functional Cookies</h3>
                                    <p className="text-stone-black/80 leading-relaxed mb-2">
                                        These cookies enable enhanced functionality and personalization, such as remembering your
                                        preferences and settings.
                                    </p>
                                    <ul className="list-disc list-inside text-stone-black/70 space-y-1">
                                        <li>Language preferences</li>
                                        <li>Theme settings</li>
                                        <li>User interface customization</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Third-Party Cookies</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    We work with trusted third-party services that may place cookies on your device:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">🔍 Google Analytics</h4>
                                        <p className="text-sm text-stone-black/70">
                                            Helps us understand website traffic and user behavior to improve our services.
                                        </p>
                                    </div>
                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">📱 Social Media</h4>
                                        <p className="text-sm text-stone-black/70">
                                            Enables social sharing features and tracks engagement with our content.
                                        </p>
                                    </div>
                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">🎯 Advertising Partners</h4>
                                        <p className="text-sm text-stone-black/70">
                                            Helps deliver relevant advertisements and measure campaign effectiveness.
                                        </p>
                                    </div>
                                    <div className="bg-fog-gray rounded-lg p-4">
                                        <h4 className="font-bold text-stone-black mb-2">🔗 Affiliate Networks</h4>
                                        <p className="text-sm text-stone-black/70">
                                            Tracks referrals to betting sites to ensure proper commission attribution.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Managing Your Cookie Preferences</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">You have several options for managing cookies:</p>

                                <div className="space-y-4">
                                    <div className="bg-emerald-green/5 rounded-lg p-4 border border-emerald-green/20">
                                        <h4 className="font-bold text-emerald-green mb-2">🍪 Cookie Banner</h4>
                                        <p className="text-stone-black/70 text-sm">
                                            Use our cookie banner to accept or decline non-essential cookies when you first visit our site.
                                        </p>
                                    </div>

                                    <div className="bg-emerald-green/5 rounded-lg p-4 border border-emerald-green/20">
                                        <h4 className="font-bold text-emerald-green mb-2">🌐 Browser Settings</h4>
                                        <p className="text-stone-black/70 text-sm">
                                            Most browsers allow you to control cookies through their settings. You can block or delete
                                            cookies, but this may affect website functionality.
                                        </p>
                                    </div>

                                    <div className="bg-emerald-green/5 rounded-lg p-4 border border-emerald-green/20">
                                        <h4 className="font-bold text-emerald-green mb-2">🚫 Opt-Out Tools</h4>
                                        <p className="text-stone-black/70 text-sm">
                                            Use industry opt-out tools like the Digital Advertising Alliance's opt-out page to control
                                            advertising cookies across multiple websites.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gaelic-orange/10 rounded-lg p-4 border border-gaelic-orange/20">
                                    <h4 className="font-bold text-gaelic-orange mb-2">⚠️ Important Note</h4>
                                    <p className="text-stone-black/70 text-sm">
                                        Disabling certain cookies may impact your experience on our website. Essential cookies cannot be
                                        disabled as they are necessary for the site to function properly.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Cookie Retention</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">Different cookies have different lifespans:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-stone-black mb-2">⏱️ Session Cookies</h4>
                                        <p className="text-stone-black/70 text-sm">Deleted when you close your browser</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-black mb-2">📅 Persistent Cookies</h4>
                                        <p className="text-stone-black/70 text-sm">Remain for a set period (typically 1-24 months)</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Contact Us</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    If you have any questions about our use of cookies, please contact us:
                                </p>
                                <div className="bg-fog-gray rounded-lg p-4">
                                    <p className="text-stone-black/70 text-sm">
                                        <strong>Email:</strong> privacy@bettingirishsites.com
                                        <br />
                                        <strong>Subject:</strong> Cookie Policy Inquiry
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-green/20">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-black">Updates to This Policy</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-stone-black/80 leading-relaxed">
                                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                                    operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                                    updated policy on this page.
                                </p>
                                <p className="text-stone-black/80 leading-relaxed">
                                    We encourage you to review this policy periodically to stay informed about how we use cookies.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-emerald-green text-pure-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Explore Irish Betting?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Now that you understand our cookie policy, discover the best Irish betting sites with exclusive bonuses.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-pure-white text-emerald-green hover:bg-fog-gray px-8 py-3 rounded-lg font-bold text-lg transition-colors"
                    >
                        View Top Irish Sportsbooks
                    </Link>
                </div>
            </section>
        </div>
    )
}
