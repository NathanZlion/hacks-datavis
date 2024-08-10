import { Countries } from "@/components/Countries/countries.component";
import { HeardAboutUs } from "@/components/Hear-About-Us/hear.component";
import { Hero } from "@/components/Hero/hero.component";
import { PrevHackathonPartcipation } from "@/components/PrevHackathonParticipation/prevHackathonParticipation.component";

export default function Overview() {
    return (
        <div className="p-0 lg:container flex flex-col gap-0 mb-16">
            <h1 className="text-4xl p-3">Hackathon Overview</h1>

            <Hero />
            <Countries />
            <div className="flex flex-col lg:flex-row">
                <HeardAboutUs />
                <PrevHackathonPartcipation />
            </div>
        </div>
    );
}
