import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text=3xl md:text-4xl font-bold mb-12 text-center">
                    あばうと <span className="text-primary"> みー</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">ぱっしょねーと うぇぶ でべろっぱー & そふとうぇあ えんじにあ</h3>

                        <p className="text-muted-foreground">
                            にねんかんの けいけんを もち、うぇぶ かいはつ と そふとうぇあ かいはつに つよい じしんがある。
                            しんこうてきな ぎじゅつを まなびつづけ、こうりつてきで くりえいてぃぶな かいけつさくを ていきょうできる。
                            さまざまな ぷろじぇくとに さんかし、げんじつてきな もんだいを かいけつする すきるを みにつけた。
                        </p>

                        <p className="text-muted-foreground">
                            ちいむわーく と こうりゅうを たいせつにし、たかい しつの ぷろだくとを つくりだすことに じゅうじする。
                            にーずに あわせた かいはつを じっこうし、くらいあんと の まんぞくを さいゆうせんに かんがえる。
                            みらいにむけて、さらなる せいちょう と いのべーしょんを こころざしている。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                げっと いん たっち
                            </a>

                            <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                だうんろーど しーぶい
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
                                    <h4 className="font-semibold text-lg">うぇぶ でべろっぷめんと</h4>
                                    <p className="text-muted-foreground">
                                        もだんふれーむわーくを かつようし、れすぽんしぶで ゆーざーふれんどりーな うぇぶさいと と あぷりけーしょんを さくせいする。
                                        ぱふぉーまんす、あくせしびりてぃ、そして すけーらびりてぃを じゅうしし、こうりつてきで しんらいできる かいはつを じつげんする。
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
                                        ゆーざーえきすぺりえんすと ゆーざーいんたーふぇーすを じゅうしし、しんぷるで つかいやすい でざいんを さくせいする。
                                        もだんないんたーふぇーす と くりえいてぃぶな あいであを くみあわせ、ここちよい びじゅある と こうかてきな なびげーしょんを じつげんする。
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
                                    <h4 className="font-semibold text-lg">くおりてぃ あしゅあらんす</h4>
                                    <p className="text-muted-foreground">
                                        てすとぷろせすを せいびし、ばぐや もんだいを はやく けんしゅつして かいぜんする。
                                        そふとうぇあの ひんしつを ほしょうし、ゆーざーに あんていした えきすぺりえんすを とどける。
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