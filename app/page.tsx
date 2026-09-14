import Image from "next/image";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CountrySelect } from "@/components/site/CountrySelect";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";
import { Separator } from "@/components/ui/Separator";
import {
  COMBOS,
  COUNTRIES,
  LANDING_IMAGES,
  MENU_CATEGORIES,
  STEPS,
} from "@/lib/brand";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="inicio" className="flex-1">
        {/* Hero — full-bleed image + readable copy without cropping the subject away */}
        <section className="relative isolate overflow-hidden border-b border-gray-6 bg-gray-12 text-gray-1">
          <div className="absolute inset-0">
            <Image
              src={LANDING_IMAGES.hero.src}
              alt={LANDING_IMAGES.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Soft scrim only — keeps the plate visible while protecting type */}
            <div
              className="absolute inset-0 bg-gray-12/55"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-gray-12 via-gray-12/40 to-transparent"
              aria-hidden
            />
          </div>
          <div className="smush relative flex min-h-[70vh] flex-col justify-end gap-2 py-6 md:min-h-[75vh] md:py-8">
            <p className="text-sm text-gray-8">Latinoamérica · multiopción</p>
            <h1 className="h1 max-w-3xl text-balance text-gray-1">
              Rest <span className="text-accent-8">ia</span>
            </h1>
            <p className="p max-w-xl text-gray-8">
              Lo que se te antoje, donde estés. Burgers, tacos, pollo, pizza y más —
              elige tu país y pide en minutos.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-1">
              <Button asChild size="lg">
                <a href="#pedir">Pedir ahora</a>
              </Button>
              <Button asChild variant="pill-dark" size="lg">
                <a href="#menu">Ver menú</a>
              </Button>
            </div>
          </div>
        </section>

        {/* País */}
        <Section id="pais" className="bg-gray-2" container="smush">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="h2">Elige tu país</h2>
              <p className="p text-gray-11">
                Activamos menú, moneda y cobertura local. Rest ia llega a toda
                Latinoamérica.
              </p>
            </div>
            <CountrySelect className="w-full max-w-xs" />
          </div>
          <ul className="mt-3 flex flex-wrap gap-1">
            {COUNTRIES.map((c) => (
              <li key={c.code}>
                <Badge variant="secondary">{c.code}</Badge>
              </li>
            ))}
          </ul>
        </Section>

        {/* Menú */}
        <Section id="menu" container="smush">
          <div className="mb-3 max-w-xl">
            <h2 className="h2">Menú multiopción</h2>
            <p className="p text-gray-11">
              Un solo lugar para todos los antojos. Casual, versátil y fácil de armar.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {MENU_CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                className="flex flex-col gap-1 overflow-hidden rounded-lg border border-gray-6 bg-gray-2 transition-colors hover:border-accent-8"
              >
                <div className="relative h-8 w-full overflow-hidden">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 p-2 pt-0">
                  <h3 className="h3">{cat.title}</h3>
                  <p className="text-sm text-gray-11">{cat.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Combos */}
        <Section id="combos" className="bg-gray-2" container="smush">
          <div className="mb-3 max-w-xl">
            <h2 className="h2">Combos del día</h2>
            <p className="p text-gray-11">
              Ofertas listas para pedir. Precios de referencia — varían por país.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {COMBOS.map((combo) => (
              <article
                key={combo.id}
                className="flex flex-col gap-1 overflow-hidden rounded-lg border border-gray-6 bg-gray-1"
              >
                <div className="relative h-8 w-full overflow-hidden">
                  <Image
                    src={combo.imageSrc}
                    alt={combo.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-3">
                  <Badge status="info" className="w-fit">
                    Combo
                  </Badge>
                  <h3 className="h3">{combo.title}</h3>
                  <p className="text-sm text-gray-11">{combo.description}</p>
                  <p className="mt-auto pt-1 font-semibold text-accent-12">
                    {combo.price}
                  </p>
                  <Button asChild variant="pill" size="sm" className="mt-1 w-fit">
                    <a href="#pedir">Agregar</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Cómo pedir */}
        <Section id="como-pedir" container="smush">
          <div className="mb-3 max-w-xl">
            <h2 className="h2">Cómo pedir</h2>
            <p className="p text-gray-11">Tres pasos. Sin fricción.</p>
          </div>
          <ol className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="rounded-lg border border-gray-6 bg-gray-2 p-3"
              >
                <span className="text-sm font-semibold text-accent-12">{step.n}</span>
                <h3 className="h3 mt-1">{step.title}</h3>
                <p className="text-sm text-gray-11">{step.description}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Pedir / CTA */}
        <Section id="pedir" className="bg-gray-12 text-gray-1" container="smush">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <h2 className="h2 text-gray-1">¿Listo para pedir?</h2>
              <p className="p text-gray-8">
                Elige país, arma tu combo y confirma. Tu antojo, en camino.
              </p>
            </div>
            <div className="flex flex-wrap gap-1">
              <Button asChild size="lg">
                <a href="#menu">Armar pedido</a>
              </Button>
              <Button asChild variant="pill-dark" size="lg">
                <a href="#contacto">Hablar con soporte</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Cobertura */}
        <Section id="cobertura" container="smush">
          <div className="max-w-xl">
            <h2 className="h2">Cobertura LatAm</h2>
            <p className="p text-gray-11">
              Operamos con selector de país para menú y delivery local. Si tu ciudad
              aún no aparece, déjanos tu correo y te avisamos.
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-6">
            {COUNTRIES.map((c) => (
              <div
                key={c.code}
                className="rounded-md border border-gray-6 bg-gray-2 px-1.5 py-1 text-center text-sm text-gray-12"
              >
                {c.name}
              </div>
            ))}
          </div>
        </Section>

        {/* Contacto */}
        <Section id="contacto" className="bg-gray-2" container="smush">
          <div className="mx-auto max-w-lg">
            <h2 className="h2">Contacto</h2>
            <p className="p mb-2 text-gray-11">
              ¿Dudas de tu pedido o quieres llevar Rest ia a tu ciudad? Escríbenos.
            </p>
            <form className="flex flex-col gap-1.5" action="#" method="post">
              <label className="flex flex-col gap-0.5">
                <span className="text-sm text-gray-11">Nombre</span>
                <Input name="name" autoComplete="name" required />
              </label>
              <label className="flex flex-col gap-0.5">
                <span className="text-sm text-gray-11">Email</span>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="flex flex-col gap-0.5">
                <span className="text-sm text-gray-11">Mensaje</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-sm border border-gray-a6 bg-gray-1 px-2 py-1 text-gray-12"
                />
              </label>
              <Button type="submit" className="mt-1 w-fit">
                Enviar
              </Button>
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-gray-6 bg-gray-1 py-4">
        <div className="smush flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-gray-12">
              Rest <span className="font-normal text-accent-12">ia</span>
            </p>
            <p className="text-sm text-gray-11">
              Lo que se te antoje, donde estés.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-gray-11">
            <a href="#menu" className="no-underline hover:text-gray-12">
              Menú
            </a>
            <a href="#combos" className="no-underline hover:text-gray-12">
              Combos
            </a>
            <a href="#cobertura" className="no-underline hover:text-gray-12">
              Países
            </a>
            <a href="#contacto" className="no-underline hover:text-gray-12">
              Contacto
            </a>
          </div>
        </div>
        <Separator className="smush my-2" />
        <p className="smush text-xs text-gray-11">
          © {new Date().getFullYear()} Rest ia. Demo de ventas · Aura Design System.
        </p>
      </footer>
    </>
  );
}
