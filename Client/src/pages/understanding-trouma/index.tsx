import ReadAllArticles from "@/components/home/readAllArticles"
import CallToAction2 from "@/components/understanding-trouma/callToAction2"
import Hero from "@/components/understanding-trouma/hero"
import TroumaInfo from "@/components/understanding-trouma/trouma-info"
import TroumaBanner from "../../assets/understanding-trouma-banner.png"

const UnderstandingTrouma = () => {
  return (
    <div>
        <Hero image={TroumaBanner} info={"Understanding trauma is the first step toward healing and reclaiming your sense of safety and peace."}/>
        <TroumaInfo/>
        <ReadAllArticles/>
        <CallToAction2/>
    </div>
  )
}

export default UnderstandingTrouma
