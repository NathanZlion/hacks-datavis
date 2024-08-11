import { motion } from "framer-motion";

const BackDrop = ({
    children,
    onClick
}: {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return (
        <motion.div
            key={"backdrop"}
            className="fixed inset-0 top-0 left-0 h-screen w-full bg-[#00000099] dark:bg-[#43434399] z-50 flex justify-center align-middle backdrop-blur-[2px]"
            id="backdrop"
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    );

}

export default BackDrop;
