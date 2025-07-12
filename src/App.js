import React, { useState } from "react";
import {
  Heart,
  Music,
  PenLine,
  Camera,
  BedDouble,
  ListChecks,
  Sun,
  MapPin,
  Lock,
  Star,
  Flame,
  BookOpen,
  Compass,
} from "lucide-react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./components/ui/dialog";

function ActivityCard({ activity, toggle }) {
  const Icon = activity.icon;
  return (
    <Card
      onClick={toggle}
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg p-4 flex flex-col items-center gap-2 rounded-2xl border ${activity.selected ? "ring-2 ring-offset-2 ring-primary" : ""}`}
    >
      {Icon && <Icon className="w-8 h-8" />}
      <h3 className="text-lg font-semibold text-center leading-snug">{activity.title}</h3>
      <p className="text-sm text-gray-500 text-center leading-tight">
        {activity.description}
      </p>
    </Card>
  );
}

function Section({ title, activities, setActivities }) {
  const toggle = (index) => {
    setActivities((prev) =>
      prev.map((act, i) => (i === index ? { ...act, selected: !act.selected } : act))
    );
  };

  const selected = activities.filter((a) => a.selected);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {activities.map((activity, idx) => (
          <ActivityCard key={idx} activity={activity} toggle={() => toggle(idx)} />
        ))}
      </div>
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map((s, i) => (
            <span
              key={i}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {s.title}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

export default function RomanticTripPlanner() {
  const [busActs, setBusActs] = useState([
    {
      title: "Shared Earbuds Playlist",
      icon: Music,
      description: "Listen to our playlist together and sing softly.",
      selected: false,
    },
    {
      title: "Kiss",
      icon: Heart,
      description: "I am gonna kiss you",
      selected: false,
    },
    {
      title: "Selfies",
      icon: Camera,
      description: "Snap instant photos to start a trip scrapbook.",
      selected: false,
    },
    {
      title: "Shoulder Nap",
      icon: BedDouble,
      description: "Rest our head on each other and relax to the road hum.",
      selected: false,
    },
    {
      title: "Window-Watching Hand Hold",
      icon: Heart,
      description: "Hold hands and point out cute sights passing by.",
      selected: false,
    },
    {
      title: "Couple Quiz Game",
      icon: ListChecks,
      description: "See how well you know each other with fun questions.",
      selected: false,
    },
  ]);

  const [destActs, setDestActs] = useState([
    {
      title: "Sunrise",
      icon: Sun,
      description: "Watching sunrise and looking in your eyes",
      selected: false,
    },
    {
      title: "Kiss Spot",
      icon: Heart,
      description: "Maybe a kiss🤭",
      selected: false,
    },
    {
      title: "Couple Photoshoot",
      icon: Camera,
      description: "Capture candid moments against historic backdrops.",
      selected: false,
    },
    {
      title: "Dancing",
      icon: Lock,
      description: "Lets dance together.",
      selected: false,
    },
    {
      title: "Pick",
      icon: Star,
      description: "Pick you up i am gonna pick you up.",
      selected: false,
    },
    {
      title: "Picnic",
      icon: Flame,
      description: "Maybe we can have a picnic.",
      selected: false,
    },
    {
      title: "Stories",
      icon: BookOpen,
      description: "hold hands and share stories.",
      selected: false,
    },
    {
      title: "Hide and seek",
      icon: Compass,
      description: "Play hide and seek.",
      selected: false,
    },
  ]);

  const selectedAll = [...busActs.filter((a) => a.selected), ...destActs.filter((a) => a.selected)];

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10 font-sans">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
        Our Romantic Trip Planner
      </h1>

      <Section title="Romance on the Road" activities={busActs} setActivities={setBusActs} />

      <Section
        title="Moments at the Destination"
        activities={destActs}
        setActivities={setDestActs}
      />

      {selectedAll.length > 0 && (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mx-auto block mt-6">Share Our Plan</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogTitle className="text-lg font-bold mb-2 text-center">
              Our Hand-Picked Moments
            </DialogTitle>
            <ul className="list-disc list-inside space-y-1">
              {selectedAll.map((s, i) => (
                <li key={i}>{s.title}</li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}