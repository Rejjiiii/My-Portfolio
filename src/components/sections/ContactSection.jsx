import { Mail, MapPin, Phone } from "lucide-react"

export const ContactSection = () => {
    return (
        <section className="py-24 px-4 relative bg-secondary/30"
            id="contact">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    連絡 <span className="text-primary"> する</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    プロジェクトのアイデアやコラボレーションに興味がありますか？
                    ぜひお気軽にご連絡ください。
                    新しいチャンスについてお話しできることを、いつでも楽しみにしています。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">
                            連絡先
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:iamregie29@gmail.com"
                                        className="text-muted-foregound hover:text-primary transition-colors">
                                        iamregie29@gmail..com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:09933678478"
                                        className="text-muted-foregound hover:text-primary transition-colors">
                                        (+63) 993-367-8478
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foregound hover:text-primary transition-colors">
                                        Pandi, Bulacan
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4>つながろう</h4>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}