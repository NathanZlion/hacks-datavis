import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { grandStateEnum } from "@/state/grandstate.slice";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons/faEarthAfrica';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

interface props {
  cardTitle: string,
  cardValue: string,
  cardMutedValue?: string,
  // a font awesome icon definition
  cardIcon?: IconDefinition,
  className?: string
}


export default function CountCard({ cardTitle, cardIcon = faEarthAfrica, cardValue, cardMutedValue, className: _className = "" }: props) {
  const grandstate: string = useSelector((state: any) => state.grandState.value);

  return (
    <Card className={_className + ""}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
        <CardTitle className="text-sm font-medium">{cardTitle}</CardTitle>
        <FontAwesomeIcon icon={cardIcon} className="h-8 w-8 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {
          !(grandstate === grandStateEnum.Loaded) &&
          <div className="bg-slate-700 h-10 w-24 rounded animate-pulse"></div>
        }

        {
          (grandstate === grandStateEnum.Loaded) &&
          <div className="text-4xl md:text-5xl font-bold text-start">{cardValue}</div>
        }

        <p className="text-xs text-muted-foreground">{cardMutedValue}</p>
      </CardContent>
    </Card>
  )
}
