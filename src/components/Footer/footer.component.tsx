import { IoLogoGithub } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row align-center justify-center text-center m-0 bg-secondary dark:text-white p-2 px-5">
            <a href="https://github.com/NathanZlion/hacks-datavis"
                target="_blank"
                className="flex flex-1 text-primary align-center w-fill gap-2 justify-center order-2">
                <IoLogoGithub className="text-accent-foreground animate animate-pulse h-full w-5 " />
            </a>
            <div className="container mx-auto flex-auto content-start align-center">
                <p>&copy; 2024 A2SV All rights reserved.</p>
            </div>
        </footer>
    );
}
