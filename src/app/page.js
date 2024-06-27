import Advantages from "@/components/Home/Advantages";
import Contact from "@/components/Home/Contact";
import HomeBanner from "@/components/Home/HomeBanner";
import Solutions from "@/components/Home/Solutions";
import Research from '@/components/Home/Research'

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Research />
      <Solutions />
      <Advantages />
      <Contact />
    </>
  );
}
