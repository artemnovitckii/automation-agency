import { buttonVariants } from "@/components/ui/button";
import React from "react";
import { useParams } from "react-router-dom";
import delux from "../assets/case-delux.png";
import samsung from "../assets/case-samsung.png";

interface ClientPageProps {}

const clientData = [
  {
    slug: "samsung",
    imgSrc: samsung,
    title: "Samsung",
    job: "Price Monitoring Automation for Samsung",
    website: "https://www.samsung.com",
    challenge:
      "Samsung needed a solution to monitor competitor pricing efficiently. Their existing manual process was time-consuming and prone to errors, consuming valuable resources.",
    solution:
      "We developed a custom automation tool that streamlined the price monitoring process. By leveraging advanced web scraping and data processing techniques, our solution provided real-time updates and comprehensive reports.",
    results:
      "Time Saved: The automation saved Samsung 5 hours per week, allowing their team to focus on more strategic tasks. Increased Accuracy: Reduced human errors and provided consistent, reliable data. Enhanced Efficiency: Streamlined the monitoring process, delivering timely and actionable insights.",
  },
  {
    slug: "delux-interiors",
    title: "Delux Interiors",
    job: "Data Pipeline Automation",
    imgSrc: delux,
    website: "https://deluxinteriors.co.nz/",
    challenge:
      "Delux Interiors faced a significant challenge with their data pipeline. Product data was delivered in PDF catalogs, but they required this information in CSV format for their systems. Converting the data manually took several full days each quarter, diverting resources from other critical tasks.",
    solution:
      "We developed an automation tool that efficiently extracts data from PDF catalogs and converts it into CSV format with 100% accuracy. This solution utilized advanced OCR (Optical Character Recognition) and data processing techniques to ensure precise and reliable conversions.",
    results:
      "Time Saved: The automation eliminated the need for manual data conversion, saving several full days each quarter. 100% Accuracy: Ensured precise data extraction and conversion, eliminating errors and inconsistencies. Resource Optimization: Freed up valuable team resources, allowing them to focus on other essential tasks.",
    testimonial: `"The automation solution provided by Automate has saved us a lot of time from having to do manual and tedious data entry work that should’ve been automated long ago." — Irina Rais, Director, Delux Interiors`,
  },
];

const ClientPage: React.FC<ClientPageProps> = () => {
  let { clientName } = useParams<"clientName">();
  const correctData = clientData.find((item) => item.slug === clientName);

  return (
    <div className="flex flex-col p-6 md:p-10 lg:p-12">
      {correctData ? (
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {correctData.title}
          </h1>
          <div className="place-center">
            <img
              className="w-[250px] md:w-[300px] lg:w-[350px] rounded-md"
              src={correctData.imgSrc}
            />
          </div>

          <hr className="mt-6 w-8/12 mx-auto" />

          <div className="flex flex-col w-full md:w-8/12 gap-3 mb-6 lg:gap-4 lg:mb-8 mt-8">
            <strong className="text-2xl lg:text-3xl">Job:</strong>{" "}
            <p className="text-lg lg:text-xl text-muted-foreground">
              {correctData.job}
            </p>
          </div>
          <div className="flex flex-col w-full md:w-8/12 gap-3 mb-6 lg:gap-4 lg:mb-8">
            <strong className="text-2xl lg:text-3xl">Challenge:</strong>{" "}
            <p className="text-lg lg:text-xl text-muted-foreground">
              {correctData.challenge}
            </p>
          </div>
          <div className="flex flex-col w-full md:w-8/12 gap-3 mb-6 lg:gap-4 lg:mb-8">
            <strong className="text-2xl lg:text-3xl">Solution:</strong>{" "}
            <p className="text-lg lg:text-xl text-muted-foreground">
              {correctData.solution}
            </p>
          </div>
          <div className="flex flex-col w-full md:w-8/12 gap-3 mb-6 lg:gap-4 lg:mb-8">
            <strong className="text-2xl lg:text-3xl">Results:</strong>{" "}
            <p className="text-lg lg:text-xl text-muted-foreground">
              {correctData.results}
            </p>
          </div>
          <a
            className={buttonVariants({
              variant: "link",
            })}
            href={correctData.website}
          >
            {correctData.title}
          </a>
        </div>
      ) : (
        <h1 className="text-5xl md:text-6xl font-bold mb-6 self-center">
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Coming soon...
          </span>
        </h1>
      )}
    </div>
  );
};

export default ClientPage;
