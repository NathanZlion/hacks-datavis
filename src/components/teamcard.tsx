import { Team } from '@/data/quarterfinalsData';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const TeamCard = ({ team, btn }: { team: Team, btn: React.ReactNode }) => {
    return (
        <Card className='hover:shadow-2xl'>
            <CardHeader>
                <CardTitle>{team.TeamName}</CardTitle>
                <CardDescription>{team.category}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none"> Team Members </p>
                        <ul className="text-sm text-muted-foreground">
                            {team.TeamMembers.map(
                                (memberName, index) => (
                                    <li key={index} className="text-sm text-muted-foreground list-disc">  {memberName}</li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                {btn}
            </CardFooter>
        </Card>
    );
};

export default TeamCard;
