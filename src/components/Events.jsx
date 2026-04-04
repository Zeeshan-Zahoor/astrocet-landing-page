import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';
import StarBackground from './StarBackground';

const events = [
  {
    id: 1,
    title: "Arduino Workshop",
    description: "Learn basics of Arduino programming and circuit design for rover applications.",
    date: "March 25, 2026",
    month: "MAR",
    day: "25",
    time: "10:00 AM - 4:00 PM",
    location: "CET Trivandrum - Lab 3",
    status: "upcoming", // upcoming, ongoing, past
    attendees: 45,
    image: "🔧", // emoji as placeholder, can replace with actual icon
  },
  {
    id: 2,
    title: "Rover Trial Field Day",
    description: "Test our 6-wheel rover on rough terrain. Open for volunteers to join.",
    date: "April 10, 2026",
    month: "APR",
    day: "10",
    time: "8:00 AM - 5:00 PM",
    location: "Grounds near CET",
    status: "upcoming",
    attendees: 25,
    image: "🚗",
  },
  {
    id: 3,
    title: "Space Tech Hackathon",
    description: "48-hour hackathon focused on space robotics and telemetry solutions.",
    date: "May 5-7, 2026",
    month: "MAY",
    day: "05",
    time: "Starts 9:00 AM",
    location: "Online + Campus",
    status: "upcoming",
    attendees: 120,
    image: "💻",
  },
  {
    id: 4,
    title: "Rocker-Bogie Workshop",
    description: "Build and understand the suspension system used in Mars rovers.",
    date: "January 15, 2026",
    month: "JAN",
    day: "15",
    time: "9:30 AM - 4:00 PM",
    location: "Mechanics Lab",
    status: "past",
    attendees: 60,
    image: "⚙️",
  },
  {
    id: 5,
    title: "Telemetry Dashboard Launch",
    description: "First version of our real-time rover dashboard goes live.",
    date: "February 20, 2026",
    month: "FEB",
    day: "20",
    time: "5:00 PM",
    location: "Online",
    status: "past",
    attendees: 85,
    image: "📊",
  },
];

function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const pastEvents = events.filter(e => e.status === "past");


  function EventCard({ event, index, isInView }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="group relative bg-linear-to-br from-white/5 to-white/0 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />

        {/* Date Badge */}
        <div className="absolute top-4 right-4 flex flex-col items-center justify-center w-16 h-16 bg-linear-to-br from-purple-600/20 to-cyan-600/20 rounded-xl border border-white/10 backdrop-blur-sm">
          <span className="text-xs text-purple-400 font-semibold">{event.month}</span>
          <span className="text-2xl font-bold text-white">{event.day}</span>
        </div>

        <div className="p-6 pr-20">
          {/* Icon/Emoji */}
          <div className="text-4xl mb-4">{event.image}</div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>

          {/* Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Calendar size={12} className="text-purple-400" />
              <span>{event.date}</span>
              <Clock size={12} className="text-cyan-400 ml-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <MapPin size={12} className="text-purple-400" />
              <span>{event.location}</span>
              <Users size={12} className="text-cyan-400 ml-2" />
              <span>{event.attendees} attending</span>
            </div>
          </div>

          {/* Register Button */}
          <button className="group/btn flex items-center gap-2 text-sm text-purple-400 hover:text-cyan-400 transition-colors">
            <span>Register Now</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Status ribbon */}
        <div className="absolute top-4 left-0 px-3 py-1 bg-linear-to-r from-green-500/80 to-emerald-500/80 backdrop-blur-sm rounded-r-full text-xs font-semibold text-white">
          Upcoming
        </div>
      </motion.div>
    );
  }

  function PastEventCard({ event, index, isInView }) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
        className="group relative flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300"
      >
        {/* Date circle */}
        <div className="flex flex-col items-center justify-center min-w-15 h-14 bg-linear-to-br from-white/10 to-white/5 rounded-lg">
          <span className="text-xs text-gray-400">{event.month}</span>
          <span className="text-xl font-bold text-white">{event.day}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
            {event.title}
          </h4>
          <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
            <span>{event.date}</span>
            <span>•</span>
            <span>{event.attendees} attended</span>
          </div>
        </div>

        {/* Watch button */}
        <button className="px-3 py-1 text-xs text-gray-400 hover:text-purple-400 transition-colors">
          Recap →
        </button>
      </motion.div>
    );
  }

  return (
    <section id='events' ref={ref} className='relative py-20 px-4 overflow-hidden'>

      <StarBackground />
      <div className='relative z-10 max-w-6xl mx-auto'>

        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Events & Activities
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us for workshops, field trials, and community meetups
          </p>
        </motion.div>

        {/* upcomming evenrts */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-1 h-6 bg-linear-to-b from-purple-500 to-cyan-500 rounded-full" />
              <h3 className="text-2xl font-semibold text-white">Upcoming Events</h3>
              <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                {upcomingEvents.length}
              </span>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        )}

        {/* past events */}
        {pastEvents.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-1 h-6 bg-linear-to-b from-gray-500 to-gray-600 rounded-full" />
              <h3 className="text-2xl font-semibold text-white/80">Past Events</h3>
              <span className="px-2 py-0.5 text-xs bg-white/10 text-gray-400 rounded-full">
                {pastEvents.length}
              </span>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {pastEvents.map((event, index) => (
                <PastEventCard key={event.id} event={event} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events