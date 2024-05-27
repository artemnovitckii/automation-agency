import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "../components/Icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Free Consultation",
    description: "Firstly, we will make sure that we can help you.",
  },
  {
    icon: <MapIcon />,
    title: "Auditing",
    description:
      "We will go through your business processes and workflows to identify areas to automate.",
  },
  {
    icon: <PlaneIcon />,
    title: "Development",
    description:
      "Our in-house engineering team will develop easy-to-use solution custom to your problems.",
  },
  {
    icon: <GiftIcon />,
    title: "Delivery",
    description: "We will teach to you use the solution and that's it.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        We have a system in place which will ensure you get the most out of our
        solution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
