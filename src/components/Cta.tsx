import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container flex flex-col place-items-center gap-8">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Lets{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Scale{" "}
            </span>
            together
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            We've helped many businesses save 10,000+ hours and $45K+ with
            automation. Let us do the same for your company.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">
            <a href="/free-automation-consultation">Book a Free Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
