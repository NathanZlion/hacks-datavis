import { cn } from '@/lib/utils';
import BackDrop from './ui/backdrop';
import { IoClose, IoLogoLinkedin } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import countryNameToCodeMapping from '@/lib/countryNameToCodeMapping.json';
import { CountryNameToCodeMapping } from '@/components/Countries/countries.component';
import { Team } from '@/data/teamData';
import { useTheme } from 'next-themes';
  
type TeamCardProps = {
    team: Team;
    layoutId: string,
    className?: string;
    handleClose: () => void;
    dragConstraints : any;
};

const TeamCardModal = ({
    team,
    layoutId,
    handleClose,
    className,
    dragConstraints
}: TeamCardProps) => {

    const { theme } = useTheme();
    console.log(theme);

    return (
        <BackDrop onClick={handleClose}>
            {/* card */}
            <motion.div
                // drag
                dragConstraints={dragConstraints}
                onClick={(e) => e.stopPropagation()}
                layoutId={layoutId}
                className={cn("m-auto bg-white dark:bg-black  shadow-lg backdrop-blur-lg \
                w-11/12 lg:w-2/3 min-h-[60%] rounded-3xl flex flex-col lg:flex-row max-h-[80%]",
                    className)}
            >

                {/* grid content 1 */}
                <motion.div className={"flex flex-1 flex-col overflow-hidden rounded-l-3xl rounded-r-4xl p-3 px-5 h-fit"} >

                    {/* Close Button */}
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            cursor: 'pointer',
                            transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className='absolute right-0 top-0 m-5 outline outline-1 outline-emerald-400 rounded-full bg-transparent hover:bg-[#ff000019] p-1 backdrop-blur-xl'
                        onClick={handleClose} >
                        <IoClose className='size-5 text-white dark:text-emerald-500'/>
                    </motion.div >
                    {/* // Close Button */}

                    <motion.div className='flex flex-col gap-3 mt-3 mb-8'>
                        <motion.div className='p-0 m-0 row-auto flex flex-col lg:flex-row gap-4 rouded-tl-3xl'>
                            <motion.div className='text-nowrap flex-1 outline-double outline-offset-1 outline-secondary-foreground p-3 rounded-lg'>
                                <h1 className="text-xl font-medium leading-none text-accent-foreground "> Team Name </h1>
                                <h2 className='text-2xl font-bold'>{team.TeamName}</h2>
                            </motion.div>

                            <motion.div className='text-nowrap flex-1 outline-double outline-offset-1 outline-secondary-foreground p-3 rounded-lg'>
                                <h1 className="text-xl font-medium leading-none text-accent-foreground "> Project Name </h1>
                                <h2 className='text-2xl font-bold'>{"BitbyBit"}</h2>
                            </motion.div>
                        </motion.div>
                        {
                            team.category ?
                                <Badge variant="secondary" className='w-fit'>{team.category}</Badge> :
                                <Badge variant="outline" className='w-fit'>{"Not Categorised"}</Badge>
                        }

                    </motion.div>

                    <motion.div className='text-secondary-foreground'>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Problem Statement</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>Proposed Solution</AccordionTrigger>
                                <AccordionContent className='w-full text-wrap'>
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>Some things else</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you can disable it if you
                                    prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </motion.div>

                </motion.div>
                {/* // grid content 1 */}


                {/* grid content 2 */}
                <motion.div className='bg-dark-tremor-brand-muted dark:bg-accent p-3 rounded-r-3xl flex-1'>
                    <h1 className="text-xl font-medium leading-none text-white dark:text-accent-foreground my-5"> Team Members </h1>

                    <motion.div className="flex flex-col gap-4 overflow-y-scroll stylish-scrollbar">
                        {team.TeamMembers.map((memberName: string, index: number) => (
                            <motion.div key={index} className="flex align-middle rounded-l-2xl h-20 p-4 "
                                style={{
                                    background: theme === "light" ?
                                        `linear-gradient(to right, rgba(100, 100, 170, 0.3), rgba(25, 25, 15, 0.2)), \
                                    url(https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[team.Countries[index].toLowerCase()]}.svg)` :

                                        // dark
                                        `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), \
                                    url(https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[team.Countries[index].toLowerCase()]}.svg)`,

                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPositionX: "100%"
                                }}
                            >
                                <motion.h2 className='my-auto  text-white dark:text-accent-foreground text-lg backdrop-blur-[1px] font-bold'> {memberName} </motion.h2>

                                <motion.a
                                    whileHover={{ scale: 1.2, transitionDuration: '1s' }}
                                    className=' text-lime-50 dark:text-foreground hover:underline hover:text-blue-400 backdrop-blur-4 my-auto mx-1 h-[100%] duration-100 hover:cursor-pointer'
                                >
                                    <IoLogoLinkedin className='h-full w-7 ' />
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                {/* //  grid content 2 */}

            </motion.div>
        </BackDrop>
    );
};


export default TeamCardModal;
