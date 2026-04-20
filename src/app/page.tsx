import { Masthead } from "@/components/Masthead";
import { HeroNeverColonized } from "@/components/HeroNeverColonized";
import { EditorialIntro } from "@/components/EditorialIntro";
import { ConceptWeb } from "@/components/ConceptWeb";
import { PassageReel } from "@/components/PassageReel";
import { ThirteenSmiles } from "@/components/ThirteenSmiles";
import { StatBand } from "@/components/StatBand";
import { AuthorNote } from "@/components/AuthorNote";
import { WhatYoullLearn } from "@/components/WhatYoullLearn";
import { BuyCard } from "@/components/BuyCard";
import { SampleChapterGate } from "@/components/SampleChapterGate";
import { SeriesContext } from "@/components/SeriesContext";
import { FAQ } from "@/components/FAQ";
import { FooterEditorial } from "@/components/FooterEditorial";

export default function Home() {
  return (
    <main className="relative">
      <Masthead />
      <HeroNeverColonized />
      <EditorialIntro />
      <StatBand />
      <ConceptWeb />
      <PassageReel />
      <ThirteenSmiles />
      <AuthorNote />
      <WhatYoullLearn />
      <BuyCard />
      <SampleChapterGate />
      <SeriesContext />
      <FAQ />
      <FooterEditorial />
    </main>
  );
}
