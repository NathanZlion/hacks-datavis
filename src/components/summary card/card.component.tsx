import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
    title : string
    icon : IconDefinition // a font awesome icon
    value : number
    className? : string
}

export const Card = ({title, icon, value, className}: props) => {
    const classes = `card-wrapper flex flex-row h-24 gap-2 justify-center align-middle w-fit md:mx-auto p-3  shadow-cyan-500/50 hover:shadow-indigo-500/40 shadow-md hover:shadow-3xl ${className}`;

    return (
        <div className={classes}>
            <div className="icon p-3  bg-slate-700 rounded-lg w-16 h-16  shadow-cyan-500/50 hover:shadow-indigo-500/40 shadow-md hover:shadow-3xl">
                <FontAwesomeIcon icon={icon}  className="w-full h-full"/>
            </div>
            <div className="flex flex-col align-middle justify-center gap-0 m-auto">
                <div className="text-base text-slate-300 ">{title}</div>
                <div className=" title text-6xl bold" >{value}</div>
            </div>
        </div>
    );
}