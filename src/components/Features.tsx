import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import delux from "../assets/case-delux.png";
import lux from "../assets/case-lux.png";
import samsung from "../assets/case-samsung.png";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const features: FeatureProps[] = [
  {
    title: "Samsung",
    description: "Price Monitoring Automation for Samsung",
    image: samsung,
    href: "/clients/samsung",
  },
  {
    title: "Delux Interiors",
    description: "Data Pipeline Automation",
    image: delux,
    href: "/clients/delux-interiors",
  },
  {
    title: "LUX",
    description: "Coming soon...",
    image: lux,
    href: "/clients/lux",
  },
];

const featureList: string[] = [
  "Workflow Automation",
  "Process Optimitzation",
  "Automated Reporting Systems",
  "Chatbot Development and Integration",
];

export const Features = () => {
  return (
    <section id="our-work" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Work
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image, href }: FeatureProps) => (
          <Card key={title}>
            <>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>{description}</CardContent>
            </>

            <>
              <CardFooter>
                <img
                  src={image}
                  alt="About feature"
                  className="w-[150px] lg:w-[250px] mx-auto py-10"
                />
              </CardFooter>
              <div className="p-6 flex">
                <a
                  href={href}
                  className={buttonVariants({
                    variant: "default",
                  })}
                >
                  Learn more
                </a>
              </div>
            </>
          </Card>
        ))}
      </div>
    </section>
  );
};
