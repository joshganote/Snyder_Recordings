import homeIcon from "../assets/Icons/SVGs/Home.svg";
import recordIcon from "../assets/Icons/SVGs/records.svg";
import musicIcon from "../assets/Icons/SVGs/music.svg";
import artistIcon from "../assets/Icons/SVGs/artists.svg";
import concertIcon from "../assets/Icons/SVGs/concerts.svg";

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
};
