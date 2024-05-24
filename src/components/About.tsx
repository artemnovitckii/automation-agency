import blackLogo from "../assets/logo-black.png";
import whiteLogo from "../assets/logo-white.png";
import { Statistics } from "./Statistics";
import { useTheme } from "./theme-provider";

export const About = () => {
  const { theme } = useTheme();
  console.log("theme", theme);

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={theme === "dark" ? whiteLogo : blackLogo}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Automate:
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At Automate, we enhance business efficiency through advanced
                automation solutions. By optimizing workflows, we help your team
                focus on high-impact tasks, driving growth and operational
                excellence. Experience seamless, scalable automation tailored to
                your unique needs. Join us to unlock your full potential.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
