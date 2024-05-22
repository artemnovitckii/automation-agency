import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
  blob: string;
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Artem Novitckii",
    position: "Chief Executive Officer",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/artem-novitckii/" },
    ],
    blob: "Experienced leader in driving business growth and innovation.",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Michael Shaimerden",
    position: "Chief Operations Officer",
    socialNetworks: [{ name: "Linkedin", url: "http://linkedin.com" }],
    blob: "Expert in optimizing operations and ensuring efficiency.",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Hitarth Sharma",
    position: "Chief Technology Officer",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/hitarthsharma/" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/disruptive.kiwi",
      },
    ],
    blob: "Passionate about AI with 8+ years of experience.",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Shannon Blackhall",
    position: "Tech Lead",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/shannon-blackhall-ba7357159/",
      },
    ],
    blob: "Dedicated to leading tech teams to deliver innovative solutions.",
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Meet our leadership team.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks, blob }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{blob}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
