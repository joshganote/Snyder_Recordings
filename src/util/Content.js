import homeIcon from "../assets/Icons/SVGs/Home.svg";
import recordIcon from "../assets/Icons/SVGs/records.svg";
import musicIcon from "../assets/Icons/SVGs/music.svg";
import artistIcon from "../assets/Icons/SVGs/artists.svg";
import concertIcon from "../assets/Icons/SVGs/concerts.svg";
import playIcon from "../assets/Icons/SVGs/playbutton.svg";

export const Content = {
  navbar: {
    route: [
      { path: "/home", name: "Home", icon: homeIcon },
      { path: "/records", name: "Records", icon: recordIcon },
      { path: "/music", name: "Music", icon: musicIcon },
      { path: "/artists", name: "Artists", icon: artistIcon },
      { path: "/concerts", name: "Concerts", icon: concertIcon },
    ],
    signUp: { path: "/sign-up", name: "Sign Up" },
  },

  hero: {
    header: { name: "A.M. Paradox" },
    description: {
      description:
        "Christopher Brent Wood, better known by his stage name Brent Faiyaz, is an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.",
    },
    playIcon: playIcon,
    watchVideo: { watch: "Watch Video" },
  },
};
