import React from "react";
import PageTitle from "../common/PageTitle";
import Bannner from "./Bannner";
import Global from "./Global";
import Summary from "./Summary";
import Typewriter from "typewriter-effect";
import NewsLetter from "./NewsLetter/NewsLetter";
import Reviews from "./Reviews";
import Parts from "./PartsComponent/Parts/Parts";
import auth from "../../firebase.init";

import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  console.log(user,'gfytghyg');

if(user?.email == 'yyy@yyy.yyy'){
console.log('thhi is');
}

  return (
    <div className="my-5">
      
      <h1 className="mb-5 text-5xl font-serif font-semibold text-zinc-900">
        Welcome To Our Site
      </h1>

      {/* animation  */}

      <h2 className="mb-5 mt-2 font-semiBold text-4xl font-serif  text-slate-600">
        <Typewriter
          options={{
            strings: [
              "Hardware Design",
              "Nano Developer",
              "VR Manufacturer",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 1500,
          }}
        />
      </h2>

      <PageTitle title="Home"></PageTitle>
      <Bannner></Bannner>
      <Parts />
      <Summary />
      <Global></Global>
      <Reviews />
      <NewsLetter />
    </div>
  );
}
