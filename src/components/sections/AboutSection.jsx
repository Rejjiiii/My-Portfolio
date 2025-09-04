import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text=3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary"> 私</span>について
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">情熱を持つウェブ開発者兼ソフトウェアエンジニアです。</h3>

                        <p className="text-muted-foreground">
                            2年間の経験があり、ウェブ開発とソフトウェア開発に強い自信を持っています。
                            常に新しい技術を学び、効率的かつ創造的なソリューションを提供し、
                            様々なプロジェクトへの参加を通して実世界の課題を解決するスキルを身につけてきました。
                        </p>

                        <p className="text-muted-foreground">
                            チームワークとコミュニケーションを大切にし、高品質なプロダクトの開発に取り組んでいます。
                            クライアントのニーズに合わせた開発を実行し、顧客満足を最優先にしています。
                            今後さらなる成長とイノベーションを目指しています。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                連絡する
                            </a>

                            <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                CVをダウンロード
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">ウェブ開発</h4>
                                    <p className="text-muted-foreground">
                                        モダンなフレームワークを活用し、レスポンシブで使いやすいウェブサイトやアプリケーションを開発しています。
                                        パフォーマンス、アクセシビリティ、スケーラビリティに重点を置き、効率的で信頼性の高い開発を実現します。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Yūai / Yūekkusu dezainā</h4>
                                    <p className="text-muted-foreground">
                                        ユーザー体験とユーザーインターフェースを最優先に、シンプルで使いやすいデザインを創り出します。
                                        モダンなインターフェースと創造的なアイデアを組み合わせ、快適なビジュアルと効果的なナビゲーションを提供します。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">品質保証</h4>
                                    <p className="text-muted-foreground">
                                        テストプロセスを確立し、バグや問題を素早く検出・解決します。
                                        ソフトウェアの品質を保証し、安定したユーザー体験を提供します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}