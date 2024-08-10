import CountCard from "@/components/Card/card.component";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from "@tremor/react";
import { Teams } from "@/data/quarterfinalsData";
import TeamCardModal from "@/components/teamCardModal";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CardDescription, CardTitle } from "@/components/ui/card";

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
    const chartData = [{
        name: 'team data',
        ...categoryCounts
    }];

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
        <div className="container flex flex-col gap-0">
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
                    <BarChart index="name" data={chartData} categories={CATEGORIES} colors={['blue', 'red', 'green', 'orange', 'purple', 'biege', 'violet', 'yellow', 'indigo']}
                        valueFormatter={dataFormatter}
                        yAxisWidth={48}
                        className="w-full"
                    />
                </div>
            </div>


            <div className="mt-16 mb-5 lg:p-10">
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
                            whileHover={{ scale: 1.05, zIndex: 30 }}
                            whileDrag={{ scale: 1.05 }}
                            className="p-5 border container h-full lg:h-1/2  max-w-full w-2/3 \
                            lg:w-1/3 hover:cursor-pointer hover:shadow-sm backdrop-blur-sm hover:shadow-secondary hover:z-50 rounded-lg"
                        >
                            {/* Card */}
                            <motion.div
                                className={"p-1 flex flex-col justify-center align-middle overflow-hidden"}
                            >

                                {/* CardHeader */}
                                <motion.div className='p-0 m-0 row-auto' >
                                    <motion.div className='text-nowrap'>
                                        <CardTitle className="underline">{team.TeamName}</CardTitle>
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
                                className="rounded"
                                dragConstraints={modalDragConstraintsRef}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
