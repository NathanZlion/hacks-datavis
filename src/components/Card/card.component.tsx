import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { grandStateEnum } from "@/state/grandstate.slice";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons/faEarthAfrica';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import CountUp from 'react-countup';


interface props {
  cardTitle: string,
  cardValue: string | number,
  cardMutedValue?: string,
  // a font awesome icon definition
  cardIcon?: IconDefinition,
  className?: string
  showAnimation?: boolean,
  animationDuration?: number
}


export default function CountCard({
  cardTitle,
  cardIcon = faEarthAfrica,
  cardValue, cardMutedValue,
  className: _className = "",
  showAnimation = true,
  animationDuration = 2
}: props) {
  const grandstate: string = useSelector((state: any) => state.grandState.value);

  return (
    <Card className={cn(_className, "flex flex-col justify-between align-top p-0")}>
      <CardHeader className="flex flex-row items-center justify-between py-5 space-0 p-2 px-4">
        <CardTitle className="text-base text-start font-medium text-wrap">{cardTitle}</CardTitle>
        <FontAwesomeIcon icon={cardIcon} className="h-8 w-8 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-0">
        {
          !(grandstate === grandStateEnum.Loaded) &&
          <div className="bg-slate-700 h-10 w-24 rounded animate-pulse"></div>
        }

        {
          (grandstate === grandStateEnum.Loaded) &&
          (
            showAnimation ?
              <CountUp
                end={parseInt(cardValue.toString())}
                duration={animationDuration}
                className="text-3xl md:text-4xl font-bold text-start block m-0"
                /> :
              <div className="text-3xl md:text-4xl font-bold text-start">{cardValue}</div>
          )
        }

        <p className="text-xs text-muted-foreground">{cardMutedValue}</p>
      </CardContent>
    </Card>
  )
}
