import CountCard from "@/components/Card/card.component";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from "@tremor/react";
import { Teams } from "@/data/teamData";
import TeamCardModal from "@/components/teamCardModal";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CardDescription  } from "@/components/ui/card";

export default function Quarterfinals() {

    const dataFormatter = (number: number) =>
        Intl.NumberFormat('us').format(number).toString();
    

    // Initialize an empty object to count category occurrences
    const categoryCounts: { [key: string]: number } = {};

    // Iterate over each team and count occurrences of each category
    Teams.forEach((team) => {
        if (categoryCounts[team.category]) {
            categoryCounts[team.category] += 1;
        } else {
            categoryCounts[team.category] = 1;
        }
    });

    // Create the final data format
    const chartData = [
        ...(
            Object.keys(categoryCounts).map((category) => {
                return {
                    name: category,
                    "Number Of Projects": categoryCounts[category],
                }
            })
        )
    ];

    console.log(chartData)

    const CATEGORIES = [
        "AI Driven Artistry and Innovation",
        "Legal",
        "Communication and Accessibility",
        "Data Analysis and Desicion Making",
        "Healthcare",
        "Agriculture and Farming",
        "Education and Learning",
        "Personalized Assistance",
        "Environmental Monitoring and Conservation",
        "Other"
    ];

    const [_selectedId, _setSelectedId] = useState<number | null>(null);
    const closeModal = () => {
        _setSelectedId(null)
    };
    const openModal = (index: number) => {
        _setSelectedId(index)
    };

    const modalDragConstraintsRef = useRef(null)

    return (
        <div className="p-0 lg:container flex flex-col gap-0">
            <h1 className="text-4xl p-3">Quarterfinals Teams Statistics</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-20">
                <div className="col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-1 justify-start md:justify-center gap-3 text-center mx-auto m-auto w-full px-auto">
                    {/* Total registration plus, idea submission without registering */}
                    <CountCard cardTitle={"Team"} cardValue={Teams.length} cardIcon={faUserGroup} />

                    {/* Total registration plus, idea submission without registering */}
                    <CountCard cardTitle={"Individual"} cardValue={'692'} cardIcon={faUserGroup} />
                </div>

                {/* category information */}
                <div className="col-span-1 md:col-span-3 lg:col-span-9" >
                    <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        Number of projects per category
                    </h3>

                    <BarChart
                        index="name"
                        data={chartData}
                        categories={["Number Of Projects"]}
                        valueFormatter={dataFormatter}
                        customTooltip={customTooltip}
                        yAxisWidth={48}
                        className="w-full"
                        showAnimation={true}
                        allowDecimals={false}
                        barCategoryGap={5}
                        colors={["blue"]}
                    />
                </div>
            </div>


            <div className="mt-16 mb-10 lg:mb-0 lg:p-10">
                <h1 className="text-3xl">Teams</h1>
                {/* Team Stat */}
                <div
                    className="shadow shadow-gray-900 p-4 flex flex-col flex-wrap gap-x-4 overflow-x-scroll \
                    h-[50vh] lg:h-[70vh] bg-primary-foreground dark:bg-[#0004] rounded-2xl my-5 stylish-scrollbar"
                    ref={modalDragConstraintsRef}
                >
                    {/* Teams */}
                    {Teams.map((team, index) => (
                        <motion.div
                            key={index}
                            layoutId={index.toString()}
                            onClick={() => openModal(index)}
                            whileHover={{ scale: 1.05 }}
                            whileDrag={{ scale: 1.05 }}
                            exit={{ scale: 0 }}
                            className="p-5 border lg:container h-full lg:h-1/2  max-w-full w-2/3 \
                            lg:w-1/3 hover:cursor-pointer hover:shadow-sm backdrop-blur-sm hover:shadow-secondary hover:z-50 rounded-lg"
                        >
                            {/* Card */}
                            <motion.div
                                className={"p-1 flex flex-col justify-center align-middle overflow-hidden"}
                            >

                                {/* CardHeader */}
                                <motion.div className='p-0 m-0 row-auto' >
                                    <motion.div className='text-nowrap'>
                                        <h1 className="underline text-2xl font-bold">{team.TeamName}</h1>
                                        <CardDescription>{team.category}</CardDescription>
                                    </motion.div>
                                </motion.div>

                                {/* CardContent */}
                                <motion.div className="py-4 grid gap-4 flex-1 overflow-x-hidden row-span-6 " >
                                    <div className=" flex items-center space-x-4 rounded-md p-0 h-full">
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none"> Team Members </p>
                                            <ul className="text-sm text-muted-foreground ml-5">
                                                {team.TeamMembers.map(
                                                    (memberName, index) => (
                                                        <li key={index} className="text-sm text-muted-foreground list-disc">  {memberName}</li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                    <AnimatePresence
                        // Disable initial animation
                        initial={false}
                        // only render one modal at a time
                        mode="wait"
                        >
                        {_selectedId !== null && (
                            <TeamCardModal
                                team={Teams[_selectedId]}
                                handleClose={closeModal}
                                layoutId={_selectedId.toString()}
                                dragConstraints={modalDragConstraintsRef}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

type CustomTooltipTypeBar = {
    payload: any;
    active: boolean | undefined;
    label: any;
};

const customTooltip = (props: CustomTooltipTypeBar) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
        <div className="w-56 rounded-tremor-default border border-secondary-foreground bg-secondary dark:bg-primary-foreground p-2 text-tremor-default shadow-tremor-dropdown">
            {payload.map((category: any, idx: number) => (
                <div key={idx} className="flex flex-1 space-x-2.5">
                    <div
                        className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
                    />
                    <div className="space-y-1">
                        <p className="text-accent-foreground">{category.dataKey}    </p>
                        <p className="font-medium text-accent-foreground"> {category.value} </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
