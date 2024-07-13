import { useSelector } from 'react-redux';
import { countryData } from '../../state/countries.slice';
import { Badge, BarList } from '@tremor/react';
import countryNameToCodeMapping from '@/lib/countryNameToCodeMapping.json';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
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
import { ArrowBigRight, Info, WandSparkles } from 'lucide-react';
import Chart from 'react-google-charts';
import { capitalizeFirstLetterOfEachWord, removeAcrossBrackets } from '@/lib/utils';


interface CountryNameToCodeMapping {
  [key: string]: string;
}

export const Countries = () => {
  var countriesData: countryData = useSelector((state: any) => state.countries.value.payload);
  countriesData = Object.fromEntries(Object.entries(countriesData).map(([key, value]) => [removeAcrossBrackets(key), value]));

  const _individualData = Object.values({
    // First, create an object with all countries set to value 0
    ...Object.entries(countryNameToCodeMapping).reduce((acc, [key]) => {
      acc[key.toLowerCase()] = {
        name: capitalizeFirstLetterOfEachWord(key),
        value: 0,
        icon: function icon() {
          return (
            <div className='overflow-hidden w-6 h-6 rounded-full my-auto mr-2 hover:animate-pulse'>
              <img
                src={`https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[key.toLowerCase()]}.svg`}
                className='object-contain hover:object-scale-down w-full h-full'
                alt={key}
              />
            </div>
          );
        },
      };
      return acc;
    }, {} as { [key: string]: { name: string; value: number; icon: () => JSX.Element } }),

    // Then, update the object with countries that have participants
    ...Object.entries(countriesData).reduce((acc, [key, value]) => {
      acc[key.toLowerCase()] = {
        name: capitalizeFirstLetterOfEachWord(key),
        value: value.numberOfIndividualParticipants,
        icon: function icon() {
          return (
            <div className='overflow-hidden w-6 h-6 rounded-full my-auto mr-2 hover:animate-pulse'>
              <img
                src={`https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[key.toLowerCase()]}.svg`}
                className='object-contain hover:object-scale-down w-full h-full'
                alt={key}
              />
            </div>
          );
        },
      };
      return acc;
    }, {} as { [key: string]: { name: string; value: number; icon: () => JSX.Element } })
  });

  const _groupData = Object.values({
    // First, create an object with all countries set to value 0
    ...Object.entries(countryNameToCodeMapping).reduce((acc, [key]) => {
      acc[key.toLowerCase()] = {
        name: capitalizeFirstLetterOfEachWord(key),
        value: 0,
        icon: function icon() {
          return (
            <div className='overflow-hidden w-6 h-6 rounded-full my-auto mr-2'>
              <img
                src={`https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[key.toLowerCase()]}.svg`}
                className='object-contain hover:object-scale-down w-full h-full'
                alt={key}
              />
            </div>
          );
        },
      };
      return acc;
    }, {} as { [key: string]: { name: string; value: number; icon: () => JSX.Element } }),

    // Then, update the object with countries that have participants
    ...Object.entries(countriesData).reduce((acc, [key, value]) => {
      acc[key.toLowerCase()] = {
        name: capitalizeFirstLetterOfEachWord(key),
        value: value.numberOfGroupParticipants,
        icon: function icon() {
          return (
            <div className='overflow-hidden w-6 h-6 rounded-full my-auto mr-2'>
              <img
                src={`https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[key.toLowerCase()]}.svg`}
                className='object-contain hover:object-scale-down w-full h-full'
                alt={key}
              />
            </div>
          );
        },
      };
      return acc;
    }, {} as { [key: string]: { name: string; value: number; icon: () => JSX.Element } })
  });

  const mapdata = [
    ["Country", "Participants"],
    ...Object.entries(countryNameToCodeMapping).map(([key, _]) => ([capitalizeFirstLetterOfEachWord(key), 0])),

    // @ts-ignore
    ...Object.entries(countriesData).map(([key, value]) => ([capitalizeFirstLetterOfEachWord(key), (value.numberOfGroupParticipants * 4) + value.numberOfIndividualParticipants])),
  ]

  const mapoptions = {
    region: "002", // Africa
    colorAxis: { colors: ["#ffffff", "#8575FA", "#503AF8"] },
    backgroundColor: "transparent",
    datalessRegionColor: "#ffffff",
    defaultColor: "#ffffff",
    is3D: true,
    legend: "none",
    mapsApiKey: ""
  };

  // make the country names lowercase in the hashmap
  const countriesDataLowercase = Object.fromEntries(
    Object.entries(countriesData).map(([key, value]) => [key.toLowerCase(), value])
  );

  // for countries in countryNameToCodeMapping if the country is not in the countriesData or both numberOfIndividualParticipants and numberOfGroupParticipants are 0
  const countriesThatAreNotRepresentedInEitherGroupOrIndividual = Object.entries(
    Object.fromEntries(Object.entries(countryNameToCodeMapping).sort((a, b) => a[0].localeCompare(b[0]))!)
  ).filter(([countryName, _]) => {
    return !countriesDataLowercase[countryName] || (countriesDataLowercase[countryName].numberOfIndividualParticipants === 0 && countriesDataLowercase[countryName].numberOfGroupParticipants === 0)
  });


  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  px-3 md:px-20'>
      <div className="p-2 pt-5 md:pt-10 overflow-hidden h-[calc(100vh-120px)] flex flex-col justify-start m-0" >
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

        <div className=''>
          <div className='text-center md:text-start'>
            <WandSparkles className='inline' />
            <span className="text-2xl mb-5 flex-shrink"> Countries that are not represented </span>
            <ArrowBigRight className='inline' />
            <span className='text-2xl'> {countriesThatAreNotRepresentedInEitherGroupOrIndividual.length} </span>
          </div>

          {/* scrollable list of countries */}
          <ScrollArea className=' pb-3  whitespace-nowrap'>
            {
              Object.entries(countriesThatAreNotRepresentedInEitherGroupOrIndividual).map(([
                _, [countryName]
              ]) => (
                <Badge key={countryName} icon={undefined} className='w-fit p-1 rounded-3xl mx-2'>
                  <div className='overflow-hidden h-6 my-auto mr-2 hover:animate-pulse flex align-middle justify-center gap-2'>
                    <div className="h-6 w-6">
                      <img
                        src={`https://flagcdn.com/${(countryNameToCodeMapping as CountryNameToCodeMapping)[countryName.toLowerCase()]}.svg`}
                        className='object-fit inline rounded-full h-full w-full'
                        alt={countryName} />
                    </div>

                    <span className='inline text-tremor-default text-dark-tremor-content dark:text-tremor-brand-inverted'>
                      {countryName.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  </div>
                </Badge>
              ))
            }
            <ScrollBar orientation="horizontal" asChild={true} className='border border-black bg-dark-tremor-brand-faint'/>
          </ScrollArea>
        </div>
      </div>

      <div className='m-0 flex justify-center align-middle overflow-hidden shadow-sm shadow-slate-200 flex-col'>
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