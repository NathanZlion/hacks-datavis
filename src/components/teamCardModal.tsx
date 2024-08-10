import { Team } from '@/data/quarterfinalsData';
import { CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import BackDrop from './ui/backdrop';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

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
return (
    <BackDrop onClick={handleClose}>
        <motion.div
            drag
            dragConstraints={dragConstraints}
            onClick={(e) => e.stopPropagation()}
            layoutId={layoutId}
            className={cn("m-auto border p-5 bg-secondary border-gray-400 shadow-lg backdrop-blur-lg w-1/2 min-h-[40%]", className)}
        >

            {/* Now we build the card below with motion components */}
            {/* Card */}
            <motion.div className={"p-1 flex flex-col justify-center align-middle overflow-hidden  "} >

                {/* CardHeader */}
                <motion.div className=' p-0 m-0 row-auto flex flex-row relative'>
                    <motion.div className='text-nowrap flex-1'>
                        <CardTitle>{team.TeamName}</CardTitle>
                        <CardDescription>{team.category}</CardDescription>
                    </motion.div>

                    {/* close icon */}
                    <motion.div
                        whileHover={{ scale: 1.5, cursor: 'pointer', color: 'secondary', transition: { duration: 0.5 } }}
                        whileTap={{ scale: 0.9 }}
                        className='absolute right-0 top-0' onClick={handleClose}>
                        <IoClose />
                    </motion.div>
                </motion.div>

                {/* CardContent */}
                <motion.div className="py-4 grid gap-4 flex-1 overflow-x-hidden row-span-6 stylish-scrollbar" >
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
    </BackDrop>
    );
};

export default TeamCardModal;
