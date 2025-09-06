import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "メッセージが送信されました！",
                description: "できるだけ早く返信します。",
            });
            setIsSubmitting(false);
        }, 1500);
    }

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
                            <h4 className="font-medium">つながろう</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">メッセージを送る</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 font-medium">
                                    あなたの名前
                                </label>
                                <input type="text" id="name" name="name" required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Regienald Jacinto..." />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 font-medium">
                                    あなたのメール
                                </label>
                                <input type="email" id="email" name="email" required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 font-medium">
                                    あなたのメッセージ
                                </label>
                                <input id="message" name="message" required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="こんにちは、〜について話したいです。" />
                            </div>

                            <button type="submit" className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}>
                                {isSubmitting ? "送信中..." : "メッセージを送信"}
                                < Send size={16} />
                            </button>

                        </form>
                    </div>
                </div>
            </div >

        </section >
    )
}