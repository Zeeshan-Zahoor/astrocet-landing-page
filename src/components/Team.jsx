import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Users, Code, Camera, PenTool, Calendar, Megaphone } from 'lucide-react';
import StarBackground from './StarBackground';
import { useState } from 'react';

const teamData = [
    {
        id: "ecom",
        name: "ECOM (Executive Committee)",
        icon: Users,
        color: "from-purple-500 to-pink-500",
        members: [
            {
                name: "NAVEEN VARMA",
                role: "Chairperson",
                bio: "Full-stack developer bridging software and hardware for rover systems.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/execom/NAVEEN.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "SAURAV",
                role: "Vice Chairperson/Tech Lead",
                bio: "Leading recruitment and community building initiatives.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/execom/SAURAV%20S%20(1).jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "FIDHA V",
                role: "Vice Chairperson",
                bio: "Overseeing rover development and technical strategy.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/execom/FIDHA%20V.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ABHIRAMI PS",
                role: "Finance Officer",
                bio: "Managing timelines, resources, and team coordination.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/execom/ABHIRAMI.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "DURGA M",
                role: "Secretary",
                bio: "Managing timelines, resources, and team coordination.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/execom/DURGA.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
        ],
    },
    {
        id: "web",
        name: "Web Design Team",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        members: [
            {
                name: "ABHINAV.M.V",
                role: "WEB LEAD",
                bio: "Building responsive and animated landing pages.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/web/ABHINAV.WEB.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "SUHAIL",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/web/SUHAIL.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "SRAVAN",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/web/SHRAVAN.PNG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "JAYALAKSHMI",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/web/JAYALAKSHMI.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ALTHAF",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/web/K%20F%20Muhammed%20Althaf.PNG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ASWIN KRISHNA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/web/ASWIN.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
        ],
    },
    {
        id: "media",
        name: "Media Team",
        icon: Camera,
        color: "from-green-500 to-emerald-500",
        members: [
            {
                name: "ANEENA",
                role: "MEDIA LEAD",
                bio: "Capturing rover trials and event moments.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/ANEENA.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "SUVEDHA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/SUVEDHA.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "RIZANA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/rizana.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "VISMAYA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/VISMAYA.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "NIHA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/NIHA.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "AJINA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/AJINA.PNG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "HIBA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/HIBA.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ELENA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/ELENA.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "JITHIN",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/JITHIN.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "VIGNESH",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/VIGNESH.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "HARISHANKAR",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/media/HARISHANKAR.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
        ],
    },
    {
        id: "content",
        name: "Content Team",
        icon: PenTool,
        color: "from-orange-500 to-red-500",
        members: [
            {
                name: "NEELASHRI",
                role: "CONTENT LEAD",
                bio: "Writing technical blogs and social media posts.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/S%20NEELASHRI.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ABHINANDHA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/ABHINANDANA%20S%20R.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ANAMIKA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/ANAMIKA%20S.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ANURAGH",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/ANURAGH.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ASHFAAQ",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/ASHFAAQ.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "RENJITH",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/RENJITH.jpeg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "LINTO",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/LINTO.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "NEHA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/NEHA.jpeg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "SREEHARI",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/SREEHARI%20R.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ADITHYAN",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/ADITHYAN.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "SREEVARDHAN",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/content/SREEVARDHAN.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
        ],
    },
    {
        id: "events",
        name: "Events and Outreach Team",
        icon: Calendar,
        color: "from-yellow-500 to-amber-500",
        members: [
            {
                name: "SARAH ABRAHAM",
                role: "EVENT LEAD",
                bio: "Organizing workshops, hackathons, and meetups.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/events/sarah.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "AJITH JEEJO",
                role: "OUTREACH LEAD",
                bio: "Building partnerships with other clubs and colleges.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/events/Ajith%20jeejo.JPEG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "MALAVIKA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/events/MALAVIKA.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ASWIN",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/events/ASWIN.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ARAVIND",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/events/ARAVIND.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "AKSHAY",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/events/AKSHAY.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "AKHILJITH",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/events/AKHILJITH%20P%20.JPG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
        ],
    },
    {
        id: "marketing",
        name: "Marketing Team",
        icon: Megaphone,
        color: "from-pink-500 to-rose-500",
        members: [
            {
                name: "KENZ ES",
                role: "MARKETING LEAD",
                bio: "Managing Instagram, LinkedIn, and community engagement.",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/marketing/kens.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ABHIJITH S",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/marketing/ABHIJITH.webp",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ASLAM",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/marketing/ASLAM.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "ARJUN",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/marketing/ARJUN%20M%20B.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "NAYANA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/marketing/NAYANA.PNG",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "NIHALA",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/marketing/NIHALA%20SHERIN%20.jpg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
            {
                name: "NITHU",
                role: "",
                bio: "",
                avatar: "https://astrocet.vercel.app/images/astroteam/current/marketing/NEETHU.jpeg",
                github: "#",
                linkedin: "#",
                email: "#",
            },
        ],
    },
];

function MemberCard({ member, index, teamColor }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            className="group relative bg-linear-to-br from-white/5 to-white/0 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 p-4 text-center"
        >
            <div className={`absolute inset-0 bg-linear-to-r ${teamColor}/0 via-transparent to-transparent group-hover:${teamColor}/10 rounded-xl transition-all duration-500`} />

            <div className="text-4xl w-full mb-3 inline-block p-3 bg-white/5 rounded-lg group-hover:scale-105 transition-transform duration-300">
                <img className='rounded-lg w-full h-50 object-cover' src={member.avatar} alt="" />
            </div>

            <h3 className="text-lg font-semibold text-white mb-0.5">
                {member.name}
            </h3>

            <p className="text-xs text-purple-400 mb-2">
                {member.role}
            </p>

            <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                {member.bio}
            </p>

            <div className="flex justify-center gap-2">
                <a href={member.github} className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300">
                    <FaGithub size={12} />
                </a>
                <a href={member.linkedin} className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300">
                    <FaLinkedin size={12} />
                </a>
                <a href={member.email} className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300">
                    <Mail size={12} />
                </a>
            </div>
        </motion.div>
    )
}

function TeamSection({ team, index, isInView }) {
    const [showAll, setShowAll] = useState(false);
    const displayedMembers = showAll ? team.members : team.members.slice(0, 3);
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12"
        >
            {/* Team Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-linear-to-r ${team.color} bg-opacity-20`}>
                    <team.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                    {team.name}
                </h3>
                <div className="flex-1 h-px bg-linear-to-r from-white/20 to-transparent" />
                <span className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                    {team.members.length}
                </span>
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {displayedMembers.map((member, memberIndex) => (
                    <MemberCard
                        key={member.name}
                        member={member}
                        index={memberIndex}
                        teamColor={team.color.split(' ')[1]} // Extract color for glow
                    />
                ))}
            </div>

            {team.members.length > 3 && !showAll && (
                <button 
                    onClick={() => setShowAll(true)}
                    className='mt-3 text-xs text-purple-400 hover:text-cyan-400 transition-colors'>
                    + View all {team.members.length} members
                </button>
            )}
        </motion.div>
    );
}

function Team() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="team" ref={ref} className="relative py-20 px-4 overflow-hidden">
            <StarBackground />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Our Team
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Meet the passionate minds behind AstroCET, working together to explore beyond boundaries
                    </p>
                </motion.div>

                {/* All Teams */}
                {teamData.map((team, index) => (
                    <TeamSection
                        key={team.id}
                        team={team}
                        index={index}
                        isInView={isInView}
                    />
                ))}

                {/* Join Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-8 pt-4 border-t border-white/10"
                >
                    <p className="text-gray-400 text-sm">
                        Want to join a team? <button className="text-purple-400 hover:text-cyan-400 transition-colors">Contact us</button>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Team;