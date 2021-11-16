import matter from "gray-matter";
import BlogPost from "../components/Blog/BlogPost";
import Banner from "../components/Banner/Banner";
import Image from "next/image";
import profilepic from "../public/profilepic.png";

export default function Home(props) {
 

  return (
    <div>
      <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
        <div className="pt-6">
          <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
          I love technologies that we can learn once
           and then write tailored experiences. 
           PWA, React, React Native, React Native Web, ReactVR
          , Universal Windows Platform are such technologies.
         
          Excited about the future of React Native and revolutionary tools coming out of Facebook. I work with a team which rapid prototypes with Expo, and have built apps from react-native init. 
          </h2>
        </div>
        <div className="flex items-center justify-center mx-2 my-12 w-96 rounded-full">
            <Image className="rounded-full"
              src={profilepic} alt="Sambulo Senda"
            />
        </div>
      </div>
    </div>
  );
}
