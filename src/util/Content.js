import homeIcon from "../assets/Icons/SVGs/Home.svg";
import recordIcon from "../assets/Icons/SVGs/records.svg";
import musicIcon from "../assets/Icons/SVGs/music.svg";
import artistIcon from "../assets/Icons/SVGs/artists.svg";
import concertIcon from "../assets/Icons/SVGs/concerts.svg";
import playIcon from "../assets/Icons/SVGs/playbutton.svg";
import leftController from "../assets/Icons/SVGs/left_controller.svg";
import albumArt from "../assets/Images/image4.png";

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
    header: "A.M. Paradox",
    description:
      "Christopher Brent Wood, better known by his stage name Brent Faiyaz, is an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.",
    playIcon: playIcon,
    watchVideo: "Watch Video",
  },

  artist: {
    header: "Brent Faiyaz, So Far Gone",
    bio: `Faiyaz began uploading his music onto SoundCloud in 2014 and moved from his hometown Columbia, Maryland to Charlotte, North Carolina before ultimately settling in Los Angeles, California to further his music career. On January 19, 2015, he released his debut single "Allure".[4] On June 1, 2016, Faiyaz released "Invite Me", the lead single from his upcoming debut EP. On September 19, 2016, his 21st birthday, the EP entitled A.M. Paradox was released and received with positive reviews from music critics.  On January 26, 2017, Sonder released their debut EP Into.`,
    learnMore: "Learn More",
  },

  newRelease: {
    header: "New Release",
    subHeader:
      "New albums every single month, check out the newest & best from Snyder Recording artist, now available on Apple Music & Spotify.",
    release: [
      {
        id: 0,
        album: "Trapsoul",
        artist: "Bryson Tiller",
        description:
          "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. ",
        albumArt: albumArt,
      },
      {
        id: 1,
        album: "Trapsoul",
        artist: "Bryson Tiller",
        description:
          "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. ",
        albumArt: albumArt,
      },
      {
        id: 2,
        album: "Trapsoul",
        artist: "Bryson Tiller",
        description:
          "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. ",
        albumArt: albumArt,
      },
    ],
    playIcon: leftController,
  },

  contactForm: {
    header: "Get in Touch",
    subHeader:
      "New albums every single month, check out the newest & best from Snyder Recording artist, now available on Apple Music & Spotify.",
    send: "Send Message",
  },
};
