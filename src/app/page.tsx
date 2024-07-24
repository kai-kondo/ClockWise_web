// components
import { Navbar, Footer,  } from "@/components";

// sections
import Hero from "./hero";
import WhyChooseUs from "./why-choose-us";
import CarouselFeatures from "./carousel-features";
import Pricing from "./pricing";
import OtherCourses from "./other-courses";
import OnlineCourse from "./online-course.1";
import BusinessContent from "./Business-content";
import CompanyOverview from "./company-overview";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <OnlineCourse />
      <BusinessContent />
      <CarouselFeatures />
      <CompanyOverview />
      <Pricing />
      <OtherCourses />
      <Footer />
    </>
  );
}
