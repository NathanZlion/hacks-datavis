import { useSelector } from 'react-redux';
import { countryData } from '../../state/countries.slice';
import { BarList } from '@tremor/react';
import countryNameToCodeMapping from '@/lib/countryNameToCodeMapping.json';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Info } from 'lucide-react';
import Chart from 'react-google-charts';



interface CountryNameToCodeMapping {
  [key: string]: string;
}

export const Countries = () => {
  const countriesData: countryData = useSelector((state: any) => state.countries.value.payload);

  const _individualData = [
    // @ts-ignore
    ...Object.entries(countriesData).map(([key, value]) => ({
      name: key,
      value: value.numberOfIndividualParticipants,
      icon: function icon() {
        return (
          <div className='overflow-hidden w-6 h-6 rounded-full my-auto mr-2 hover:animate-pulse'>
            <img
              src={`https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[key.toLowerCase()]}.svg`}
              className='object-contain hover:object-scale-down w-full h-full '
              alt={key} />
          </div>
        );
      },
    }))
  ]

  const _groupData = [
    // @ts-ignore
    ...Object.entries(countriesData).map(([key, value]) => ({
      name: key,
      value: value.numberOfGroupParticipants,
      icon: function icon() {
        return (
          <div className='overflow-hidden w-6 h-6 rounded-full my-auto mr-2'>
            <img
              src={`https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[key.toLowerCase()]}.svg`}
              className='object-contain hover:object-scale-down w-full h-full'
              alt={key} />
          </div>
        );
      },
    }))
  ]

  const mapdata = [
    ["Country", "Participants"],
    // @ts-ignore
    ...Object.entries(countriesData).map(([key, value]) => ([key, (value.numberOfGroupParticipants * 4) + value.numberOfIndividualParticipants])),
  ]

  const mapoptions = {
    region: "002", // Africa
    colorAxis: { colors: ["#ededed", "#d0d9ff", "#7e6efa"] },
    backgroundColor: "transparent",
    datalessRegionColor: "#ffffff",
    defaultColor: "#ffffff",
    is3D: true,
    legend: "none",
  };


  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div
        className="p-2 pt-5 md:pt-10 px-3 md:px-20 overflow-hidden h-[calc(100vh-120px)] flex flex-col justify-start m-0"
        id='country_distribution' >
        <div className="text-4xl mb-5 flex-shrink text-center md:text-start">
          Distribution By Country
        </div>

        <Tabs defaultValue="individual" className="overflow-hidden p-0 h-full mx-auto md:ms-0 w-full">
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value="individual">Individual</TabsTrigger>
            <TabsTrigger value="group">Group</TabsTrigger>
          </TabsList>

          <TabsContent value="individual" className='w-full h-full p-0 m-0'>
            <Card className="mx-auto mt-3 h-[85%]">
              <CardHeader>
                <CardTitle>Individual Registrations</CardTitle>
                <CardDescription className='mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content'>
                  <span>Country</span>
                  <span>Registrations</span>
                </CardDescription>
              </CardHeader>
              <CardContent className='overflow-y-scroll h-[65%] m-0 '>
                <BarList data={_individualData} className="h-full" />
              </CardContent>
              <CardFooter className='mt-2 text-tremor-default flex items-center gap-2 justify-start text-tremor-content dark:text-dark-tremor-content'>
                <Info />
                <span className='text-sm'> This is the number of individuals that registered individually.  </span>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="group" className='w-full h-full p-0 m-0'>
            <Card className="mx-auto mt-3 h-[85%]">
              <CardHeader>
                <CardTitle> Group Registrations</CardTitle>
                <CardDescription className='mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content'>
                  <span>Country</span>
                  <span>Registrations</span>
                </CardDescription>
              </CardHeader>
              <CardContent className='overflow-y-scroll h-[65%] m-0 '>
                <BarList data={_groupData} className="h-full" />
              </CardContent>
              <CardFooter className='mt-2 text-tremor-default flex items-center gap-2 justify-start text-tremor-content dark:text-dark-tremor-content'>
                <Info />
                <span className='text-sm'> This is the number of registrants that registered in groups. </span>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className='m-0 flex justify-center align-middle overflow-hidden shadow-sm shadow-slate-200'>
        <div className="my-auto">
          <Chart
            chartType="GeoChart"
            className='my-auto'
            width="100%"
            height="400px"
            data={mapdata}
            options={mapoptions}
          />
        </div>
      </div>
    </div>
  );
}