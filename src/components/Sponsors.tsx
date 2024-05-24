import admaker from "../assets/admaker.png";
import melomaniac from "../assets/melomaniac.png";
import salesmaker from "../assets/salemaker.png";
import { DeluxInterioisIcon, SamsungIcon } from "./Icons";

interface SponsorProps {
  icon?: JSX.Element;
  imgSrc?: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <SamsungIcon />,
  },
  {
    icon: <DeluxInterioisIcon />,
  },
  {
    imgSrc: melomaniac,
  },
  {
    imgSrc: admaker,
  },
  {
    imgSrc: salesmaker,
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
          {sponsors
            .concat(sponsors)
            .map(({ icon, imgSrc }: SponsorProps, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-muted-foreground/60"
              >
                {imgSrc ? (
                  <img
                    width="160"
                    height={"auto"}
                    style={{ maxWidth: "none" }}
                    src={imgSrc ?? ""}
                  />
                ) : (
                  <span>{icon}</span>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
