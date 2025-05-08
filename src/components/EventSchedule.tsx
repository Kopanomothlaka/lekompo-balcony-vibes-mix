
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScheduleItemProps {
  time: string;
  title: string;
  artist: string;
  stage: string;
  className?: string;
}

const ScheduleItem = ({ time, title, artist, stage, className }: ScheduleItemProps) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg hover:bg-lekompo-purple/10 transition-all duration-200",
      className
    )}>
      <div className="w-full md:w-24 font-medium text-lekompo-orange">{time}</div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-gray-300">{artist}</p>
      </div>
      <div className="flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium bg-lekompo-purple/20 text-lekompo-purple">
        {stage}
      </div>
    </div>
  );
};

const EventSchedule = () => {
  const scheduleData = {
    "day1": [
      { time: "2:00 PM", title: "Opening Ceremony", artist: "Host: DJ Spinall", stage: "Main Stage" },
      { time: "3:00 PM", title: "Paint The Town", artist: "Doja Cat", stage: "Balcony 1" },
      { time: "4:15 PM", title: "Last Last", artist: "Burna Boy", stage: "Balcony 2" },
      { time: "5:30 PM", title: "Kill Bill", artist: "SZA", stage: "Main Stage" },
      { time: "6:45 PM", title: "Essence", artist: "Wizkid", stage: "Balcony 3" },
      { time: "8:00 PM", title: "God's Plan", artist: "Drake", stage: "Main Stage" }
    ],
    "day2": [
      { time: "2:00 PM", title: "Day 2 Kickoff", artist: "Host: Ebuka Obi-Uchendu", stage: "Main Stage" },
      { time: "3:00 PM", title: "Hello", artist: "Adele", stage: "Balcony 1" },
      { time: "4:15 PM", title: "Blinding Lights", artist: "The Weeknd", stage: "Main Stage" },
      { time: "5:30 PM", title: "Crazy In Love", artist: "Beyoncé", stage: "Balcony 2" },
      { time: "6:45 PM", title: "Collaborations Set", artist: "Various Artists", stage: "Main Stage" },
      { time: "8:30 PM", title: "Closing Performance", artist: "Surprise Guest", stage: "Main Stage" }
    ],
  };

  return (
    <section id="schedule" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-lekompo-orange/10 rounded-tr-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-lekompo-orange/30 text-lekompo-purple text-sm font-medium mb-4">
            Plan Your Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Event <span className="gradient-text">Schedule</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out our lineup of performances across multiple stages. Don't miss your favorite artists!
          </p>
        </div>
        
        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-lekompo-dark">
            <TabsTrigger 
              value="day1" 
              className="data-[state=active]:bg-lekompo-purple data-[state=active]:text-white"
            >
              <Music2 className="mr-2 h-4 w-4" />
              Day 1 - June 15
            </TabsTrigger>
            <TabsTrigger 
              value="day2"
              className="data-[state=active]:bg-lekompo-purple data-[state=active]:text-white"
            >
              <Music2 className="mr-2 h-4 w-4" />
              Day 2 - June 16
            </TabsTrigger>
          </TabsList>
          
          <div className="bg-lekompo-dark/50 backdrop-blur-sm rounded-lg p-1 md:p-6">
            <TabsContent value="day1" className="space-y-1 mt-0">
              {scheduleData.day1.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  title={item.title}
                  artist={item.artist}
                  stage={item.stage}
                />
              ))}
            </TabsContent>
            
            <TabsContent value="day2" className="space-y-1 mt-0">
              {scheduleData.day2.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  title={item.title}
                  artist={item.artist}
                  stage={item.stage}
                />
              ))}
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-lekompo-orange/20 text-lekompo-orange">
            <Music className="mr-2 h-5 w-5" />
            <span>Schedule subject to change</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
