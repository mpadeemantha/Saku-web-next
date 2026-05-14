import { Metadata } from "next";
import HomePageWrapper from "./HomePageWrapper";

export const metadata: Metadata = {
  title: "Saku Japanese Language School | Sri Lanka",
  description: "Learn Japanese | Build Skills | Achieve Japan Dreams",
};

export default function Page() {
  return <HomePageWrapper />;
}
