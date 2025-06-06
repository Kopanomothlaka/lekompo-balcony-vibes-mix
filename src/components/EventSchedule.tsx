import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ScheduleItemProps {
  time: string;
  title: string;
  artist: string;
  stage: string;
  className?: string;
  index: number;
}

const ScheduleItem = ({ time, title, artist, stage, className, index }: ScheduleItemProps) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg hover:bg-lekompo-blue/10 transition-all duration-300 animate-fade-in-left",
      className
    )}
    style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-full md:w-24 font-medium text-lekompo-yellow">{time}</div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-gray-300">{artist}</p>
      </div>
      <div className="flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium bg-lekompo-green/20 text-lekompo-green">
        {stage}
      </div>
    </div>
  );
};

const EventSchedule = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const scheduleData = {
    "day1": [
      { time: "2:00 PM", title: "Opening Ceremony", artist: "Host: DJ Spinall", stage: "Main Stage" },
      { time: "3:00 PM", title: "Paint The Town", artist: "Doja Cat", stage: "Main Stage" },
      { time: "4:15 PM", title: "Last Last", artist: "Burna Boy", stage: "Chillas Room" },
      { time: "5:30 PM", title: "Kill Bill", artist: "SZA", stage: "Main Stage" },
      { time: "6:45 PM", title: "Essence", artist: "Wizkid", stage: "Lekompo Arena" },
      { time: "8:00 PM", title: "God's Plan", artist: "Drake", stage: "Main Stage" }
    ],
    "day2": [
      { time: "2:00 PM", title: "Day 2 Kickoff", artist: "Host: Ebuka Obi-Uchendu", stage: "Main Stage" },
      { time: "3:00 PM", title: "Hello", artist: "Adele", stage: "Chillas Room" },
      { time: "4:15 PM", title: "Blinding Lights", artist: "The Weeknd", stage: "Main Stage" },
      { time: "5:30 PM", title: "Crazy In Love", artist: "Beyoncé", stage: "Lekompo Arena" },
      { time: "6:45 PM", title: "Collaborations Set", artist: "Various Artists", stage: "Main Stage" },
      { time: "8:30 PM", title: "Closing Performance", artist: "Surprise Guest", stage: "Main Stage" }
    ],
  };

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-lekompo-yellow/10 rounded-tr-full blur-3xl opacity-20 animate-pulse-gentle" />
      <div className="absolute top-0 right-0 w-2/5 h-2/5 bg-lekompo-green/10 rounded-bl-full blur-3xl opacity-15 animate-pulse-gentle" style={{animationDelay: '1.5s'}} />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(to right, rgba(155, 135, 245, 0.2) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(155, 135, 245, 0.2) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'fadeInUp 1s ease-out forwards'
             }} 
        />
      </div>
      
      {/* Floating music notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-lekompo-purple opacity-20"
            style={{
              fontSize: Math.random() * 20 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['♪', '♫', '♬', '♩'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-lekompo-yellow/30 text-lekompo-blue text-sm font-medium mb-4">
            Plan Your Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Event <span className="gradient-text-alt animate-gradient">Schedule</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out our lineup of performances across multiple stages. Don't miss your favorite artists!
          </p>
        </div>
        
        <Tabs defaultValue="day1" className="max-w-4xl mx-auto animate-fade-in-up delay-200">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-lekompo-dark">
            <TabsTrigger 
              value="day1" 
              className="data-[state=active]:bg-lekompo-blue data-[state=active]:text-white transition-all duration-300"
            >
              <Music2 className="mr-2 h-4 w-4" />
              Day 1 - June 15
            </TabsTrigger>
            <TabsTrigger 
              value="day2"
              className="data-[state=active]:bg-lekompo-blue data-[state=active]:text-white transition-all duration-300"
            >
              <Music2 className="mr-2 h-4 w-4" />
              Day 2 - June 16
            </TabsTrigger>
          </TabsList>
          
          <div className="bg-lekompo-black/50 backdrop-blur-sm rounded-lg p-1 md:p-6 animate-fade-in-up delay-300">
            <TabsContent value="day1" className="space-y-1 mt-0">
              {scheduleData.day1.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  title={item.title}
                  artist={item.artist}
                  stage={item.stage}
                  index={index}
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
                  index={index}
                />
              ))}
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="text-center mt-12 animate-fade-in-up delay-400">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-lekompo-yellow/20 text-lekompo-yellow transition-transform hover:scale-105 duration-300">
            <Music className="mr-2 h-5 w-5 animate-pulse" />
            <span>Schedule subject to change</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
