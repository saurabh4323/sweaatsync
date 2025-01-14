import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Heropart2 from "@/components/Heropart2";
import Heropart3 from "@/components/Heropart3";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Heropart2></Heropart2>
      <Heropart3></Heropart3>
    </div>
  );
}
