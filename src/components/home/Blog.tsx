import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/testimonials";

export function Blog() {
  return (
    <section id="blog" className="border-t border-ink/10 bg-amber py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal as="div" className="mb-10 sm:mb-14">
          <p className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink">
            <span
              aria-hidden="true"
              className="h-2.5 w-[22px] border border-ink bg-[length:22px_22px]"
              style={{
                backgroundImage: "repeating-linear-gradient(-45deg, var(--color-ink) 0 7px, var(--color-amber) 7px 14px)",
              }}
            />
            Resources
          </p>
          <h2 className="font-display uppercase leading-[1.02] tracking-wide" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}>
            Guides &amp; Advice from Our Team
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal
              key={post.title}
              as="article"
              delay={i as 0 | 1 | 2}
              className="group flex flex-col border-[3px] border-ink bg-white shadow-[7px_7px_0_var(--color-ink)] transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[10px_10px_0_var(--color-navy)]"
            >
              <div className="relative overflow-hidden border-b-[3px] border-ink">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="400px"
                    className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-3.5 top-3.5 border-2 border-ink bg-amber px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wide text-ink">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-[22px] pb-6 pt-[22px]">
                <h3 className="mb-2.5 font-condensed text-[19px] font-bold leading-snug">{post.title}</h3>
                <p className="flex-1 text-[14.5px] text-grey">{post.body}</p>
                <span className="mt-4 font-mono text-xs font-bold uppercase tracking-wide text-red transition-transform duration-300 group-hover:translate-x-1.5">
                  Read more →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
