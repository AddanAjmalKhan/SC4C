import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function AreasBanner() {
  return (
    <section className="border-y-[3px] border-ink bg-amber py-9 text-ink">
      <Container className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <Reveal>
          <h2 className="font-display uppercase leading-tight" style={{ fontSize: "clamp(1.5rem, 3.8vw, 2.5rem)" }}>
            We Serve All These Areas Across the GTA
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <Button href="#areas" variant="primary" className="shrink-0">
            Get Started <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
