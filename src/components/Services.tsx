import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Cog,
  Workflow,
  LineChart,
  Bot,
  ServerCog,
  Waypoints,
  HandHelping,
  BellElectric,
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Process Automation",
    description:
      "Streamline repetitive tasks and improve efficiency with our advanced process automation solutions, tailored to meet your specific business needs.",
    icon: <Cog />,
  },
  {
    title: "Workflow Optimization",
    description:
      "Optimize your workflows to reduce bottlenecks and enhance productivity. Our experts design and implement solutions to make your processes more efficient.",
    icon: <Workflow />,
  },
  {
    title: "AI-Driven Analytics",
    description:
      "Leverage the power of AI to gain insights from your data. Our AI-driven analytics services help you make informed decisions and drive business growth.",
    icon: <LineChart />,
  },
  {
    title: "Robotic Process Automation (RPA)",
    description:
      "Automate mundane and repetitive tasks with our RPA solutions, freeing up your team to focus on more strategic activities. Our RPA tools seamlessly integrate with your existing systems.",
    icon: <Bot />,
  },
  {
    title: "Custom Automation Solutions",
    description:
      "Get tailored automation solutions designed to address your unique business challenges. Our team works closely with you to develop custom solutions that fit your needs.",
    icon: <ServerCog />,
  },
  {
    title: "Integration Services",
    description:
      "Seamlessly integrate automation tools with your existing systems and applications. Our integration services ensure a smooth transition and minimal disruption.",
    icon: <Waypoints />,
  },
  {
    title: "IT Support and Maintenance",
    description:
      "Ensure your automation solutions run smoothly with our comprehensive IT support and maintenance services. We're here to help you every step of the way.",
    icon: <HandHelping />,
  },
  {
    title: "Training and Consulting",
    description:
      "Empower your team with the knowledge and skills needed to maximize the benefits of automation. Our training and consulting services are designed to help you succeed.",
    icon: <BellElectric />,
  },
];

export const Services = () => {
  const firstColumnServices = serviceList.slice(0, 4);
  const secondColumnServices = serviceList.slice(4);
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Our{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Automation{" "}
          </span>
          Services
        </h2>
        <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          We are using latest AI technologies to automate your workflows.
        </p>
      </div>
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8">
        <div className="flex flex-col gap-8">
          {firstColumnServices.map(
            ({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-full">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            )
          )}
        </div>

        <div className="flex flex-col gap-8">
          {secondColumnServices.map(
            ({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-full">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};
