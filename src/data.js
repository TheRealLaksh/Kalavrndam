export const CONTENT = {
  brand: {
    name: "Kalavrindam",
    subtitle: "Art Collective",
    contact: {
      email: "hello@cirs.com",
      instagram: "@cirs",
      location: "Art School Gallery"
    }
  },
  nav: [
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "About", href: "#about" },
    { label: "Mentors", href: "#mentors" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: "Kalavrindam",
    subtitle: "A showcase of creativity and artistic expression.",
    cta: "Explore Gallery"
  },
  gallery: {
    title: "Art Gallery",
    subtitle: "Discover the creative vision of our artists.",
    items: [
      { id: 1, title: "Sunlit Forest", artist: "Aarav Mehra", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=500&fit=crop" },
      { id: 2, title: "Dreamscape", artist: "Priya Singh", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=500&fit=crop" },
      { id: 3, title: "City Lights", artist: "Riya Kapoor", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=500&fit=crop" },
      { id: 4, title: "Blossom Path", artist: "Kabir Rao", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=500&fit=crop" }
    ]
  },
  events: {
    title: "Events",
    subtitle: "Workshops, sessions, and creative happenings.",
    items: [
      { id: 1, title: "Color Theory", audience: "5th & 6th Graders", desc: "A fun session exploring color theory and its use in fashion design.", upcoming: false },
      { id: 2, title: "Painting Starry Night", audience: "8th Graders", desc: "Students painted Vincent van Gogh's Starry Night, breaking down the masterpiece.", upcoming: false },
      { id: 3, title: "Sculpting Basics", audience: "11th Graders", desc: "A hands-on session introducing the basics of sculpting and 3D art.", upcoming: false },
      { id: 4, title: "Graffiti Art", audience: "12th Graders", desc: "A creative session on graffiti and street art techniques.", upcoming: true },
      { id: 5, title: "Schoolwide Piece", audience: "All Grades", desc: "We're making a kilometer-long collaborative art piece with contributions from every grade!", upcoming: false },
      { id: 6, title: "Bracelet Making", audience: "7th Graders", desc: "A crafty session making bracelets with handmade clay beads.", upcoming: false }
    ]
  },
  about: {
    title: "About Kalavrindam",
    text: "Kalavrindam is a vibrant art collective showcasing the creative talents of students and artists. Our mission is to celebrate artistic expression and foster a community of young creators.",
    stats: [
      { number: "50+", label: "Artworks" },
      { number: "25+", label: "Artists" },
      { number: "10+", label: "Exhibitions" }
    ]
  },
  mentors: {
    title: "Our Mentors",
    items: [
      { id: 1, name: "Mentor One", role: "Art Director" },
      { id: 2, name: "Mentor Two", role: "Sculpture Lead" },
      { id: 3, name: "Mentor Three", role: "Visual Arts" },
      { id: 4, name: "Mentor Four", role: "Design Head" }
    ]
  },
  founders: {
    title: "The Founders",
    subtitle: "The visionaries behind the collective.",
    items: [
      { 
        id: 1, 
        name: "Founder One", 
        role: "Creative Director", 
        bio: "Visionary artist with a passion for integrating traditional forms with modern digital expression." 
      },
      { 
        id: 2, 
        name: "Founder Two", 
        role: "Operations Lead", 
        bio: "Orchestrating the chaos of creativity into structured, impactful community events." 
      },
      { 
        id: 3, 
        name: "Founder Three", 
        role: "Community Manager", 
        bio: "Building bridges between young artists and established mentors to foster growth." 
      }
    ]
  }
};