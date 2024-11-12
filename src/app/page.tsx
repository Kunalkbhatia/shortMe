import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import chart from "../assests/chart.png";
import barChart from "../assests/barChart.png";
// import QR from "../assests/QR.png";
import svg1 from "../assests/Dn2faup5mukNtR03MMFtt56LwI.svg";
import svg2 from "../assests/jHCqkdk4lhQt4sbKVlJy2CUCQ2Q.svg";
import svg3 from "../assests/x9WGidJ1IAyzsTlPqMrTpca6P6g.svg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Landing() {
  return (
    <div className=" p-5 md:p-11 space-y-20">
      <div className="flex justify-between items-center">
        <div className="font-bold text-4xl">Short Me</div>
        <Link
          href="/sign-in"
          className="font-semibold bg-primaryButton text-white text-xl p-2 md:p-4 rounded-full"
        >
          Get Started
        </Link>
      </div>
      <div className="flex flex-col gap-5 items-center bg-secondaryBg p-4 rounded-xl">
        <div className="bg-white p-3 rounded-full font-semibold">
          🔥 Introducing ShortMe
        </div>
        <div className="font-extrabold text-3xl md:text-5xl lg:text-7xl text-center lg:w-[900px]">
          URL shortening amplified, where insights meet impact.
        </div>
        <div className="font-semibold text-gray-500 md:text-2xl md:w-[600px] text-center">
          Elevate your brand presence with ShortMe : An URL shortening for
          impactful digital trails. Seamlessly boost brand recognition
        </div>
        <Button className="bg-primaryButton ">Watch Demo</Button>
        <video
          width={800}
          height={500}
          src="https://www.youtube.com/watch?v=38fhj9tFfAQ"
          className="border-4 border-black rounded-md"
        />
      </div>
      <div className="flex flex-col gap-8 items-center bg-secondaryBg py-10 rounded-xl">
        <div className="bg-white p-3 rounded-full font-semibold">
          🔥 The Problem
        </div>
        <div className="font-extrabold text-3xl md:text-5xl text-center md:w-[700px]">
          All-in-One Solution for Link Management
        </div>

        <div className="grid md:grid-cols-3 gap-8 p-10">
          <div>
            <Image src={svg1} width={50} height={50} alt="svg1" />
            <div>
              <div className="font-semibold">Data-Driven Insights</div>
              <div className="text-gray-500 ">
                ShortMe provides real-time analytics that go beyond click
                tracking, helping you understand your audience and make smarter
                decisions to boost engagement.
              </div>
            </div>
          </div>
          <div>
            <Image src={svg3} width={50} height={50} alt="svg1" />
            <div>
              <div className="font-semibold">Boost Online Presence</div>
              <div className="text-gray-500">
                Create branded short links with custom slugs to enhance your
                online presence and build trust with your audience effortlessly.
              </div>
            </div>
          </div>
          <div>
            <Image src={svg2} width={50} height={50} alt="svg1" />
            <div>
              <div className="font-semibold">Connect Audience Instantly</div>
              <div className="text-gray-500">
                Generate and customize QR codes that quickly connect users to
                your content, streamlining access and boosting engagement.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="bg-secondaryBg p-3 rounded-full font-semibold">
          🔥 The Solution
        </div>
        <div className="font-extrabold text-3xl md:text-4xl text-center md:w-[700px]">
          Effortlessly Scale Your Marketing Efforts
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <Card className="flex flex-col items-center">
            <CardHeader>
              <Image src={chart} width={500} alt="chart" />
            </CardHeader>
            <CardContent>
              <div>
                <div className="font-semibold">Device & Browser Insights</div>
                <div>
                  Optimize your content for your audience&apos;s preferences
                  with detailed device and browser analytics. ShortMe helps you
                  tailor your approach, ensuring a seamless experience across
                  all platforms.
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center">
            <CardHeader>
              <Image src={barChart} width={500} alt="bar chart" />
            </CardHeader>
            <CardContent>
              <div>
                <div className="font-semibold">Geographic Click Insights</div>
                <div>
                  Gain a deeper understanding of your audience by tracking
                  clicks from different states and cities. ShortMe&apos;s
                  geographic insights empower you to tailor your strategies and
                  maximize your impact in key regions.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-around gap-5 items-center bg-secondaryBg p-5 rounded-xl">
        <div>
          <div className="text-2xl font-bold">ShortMe</div>
          <div className="md:text-xl">
            Increase productivity and achieve better results
          </div>
          <div className="font-extralight text-gray-400">
            Copyright © 2024 ShortMe. All Rights Reserved
          </div>
        </div>
        <div className="font-bold">
          <div>LInkedIn</div>
          <div>Twitter</div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
