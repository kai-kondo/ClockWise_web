"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "プログラミングスキルを上達させるには？",
    desc: "みなさんこんにちは...",
    buttonLabel: "Reed More",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "WebDev Pro Code-a-Thon: Build a Responsive Website",
    desc: "Participants will have 48 hours to create a responsive website from scratch using HTML, CSS, and JavaScript.",
    buttonLabel: "register for free",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Ask the Experts: Frontend Web Development",
    desc: "Join our live Q&A session with our experienced instructors. Get answers to your queries, insights into best practices.",
    buttonLabel: "get ticket",
  },
  {
    img: "/image/blogs/blog4.svg",
    title: "Web Accessibility: Building Inclusive Websites",
    desc: "Industry experts will discuss the importance of inclusive design and share strategies for creating websites.",
    buttonLabel: "get ticket",
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          {...({} as any)}
          variant="h2"
          color="blue-gray"
          className="mb-6 mt-12"
        >
          ClockWiseブログ
        </Typography>
        <Typography
          {...({} as any)}
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          ClockWiseでの日々の日常や技術に関することを記事でまとめています
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
