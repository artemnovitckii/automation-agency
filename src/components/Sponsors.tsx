import { SamsungIcon } from "./Icons";

interface SponsorProps {
  icon: JSX.Element;
}

const sponsors: SponsorProps[] = [
  {
    icon: <SamsungIcon />,
  },
  {
    icon: <SamsungIcon />,
  },
  {
    icon: <SamsungIcon />,
  },
  {
    icon: <SamsungIcon />,
  },
  {
    icon: <SamsungIcon />,
  },
  {
    icon: <SamsungIcon />,
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32 sm:pb-8">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Brands we worked with
      </h2>
      <div className="sponsors-container">
        <div className="sponsors-list flex justify-center items-center gap-4 md:gap-8">
          {sponsors.concat(sponsors).map(({ icon }: SponsorProps, index) => (
            <div
              key={index}
              className="sponsor-item flex items-center gap-1 text-muted-foreground/60"
            >
              <span>{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
