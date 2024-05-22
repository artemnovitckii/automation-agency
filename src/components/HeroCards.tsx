import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  CircleCheckBig,
  Phone,
  CircleDollarSign,
  Proportions,
} from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Samsung Testimonial"
              src="https://m.samsungsem.com/files/imageView.do?key=49750dd7-76bd-443f-ae06-d358f3ad4e8e"
            />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Samsung Person</CardTitle>
            <CardDescription>@samsung_person</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Automate transformed our workflow, saving us countless hours and
          significantly boosting our productivity with its intuitive AI-powered
          tools.
        </CardContent>
      </Card>

      {/* Team */}
      {/* <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-layout-dashboard absolute grayscale-[0%] -top-12  w-24 h-24 aspect-square object-cover"
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>

          <CardTitle className="text-center">Automate:</CardTitle>
          <CardDescription className="font-normal text-primary">
            Quick Stats:
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I really enjoy transforming ideas into functional software that
            exceeds expectations
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card> */}

      {/* Pricing */}
      <Card className="absolute top-[220px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Automate:
            <Badge variant="secondary" className="text-sm text-primary">
              Quick Stats
            </Badge>
          </CardTitle>
          {/* <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div> */}

          {/* <CardDescription>We love helping people</CardDescription> */}
        </CardHeader>
        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "$45000+ saved",
              "10 clients",
              "In-house engineering team",
              "Latest AI technologies",
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <CircleCheckBig className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
        <hr className="w-4/5 m-auto mb-4" />
        <CardContent>
          <Button className="w-full">
            <a href="#about">Learn more</a>
          </Button>
        </CardContent>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] top-[5px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-3 rounded-full flex items-center justify-center">
            <Phone width={28} height={28} />
          </div>
          <div>
            <CardTitle>Free Business Consultation</CardTitle>
            <CardDescription className="text-md mt-2">
              We don't charge anything if we can't help you.
            </CardDescription>
          </div>
        </CardHeader>
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-3 rounded-full flex items-center justify-center">
            <CircleDollarSign width={28} height={28} />
          </div>
          <div>
            <CardTitle>You only pay % of what you save</CardTitle>
            <CardDescription className="text-md mt-2">
              Our pricing policy ensures that businesses save money with us.
            </CardDescription>
          </div>
        </CardHeader>
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-3 rounded-full flex items-center justify-center">
            <Proportions width={28} height={28} />
          </div>
          <div>
            <CardTitle>Custom Solutions</CardTitle>
            <CardDescription className="text-md mt-2">
              Custom solutions for your problems.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
