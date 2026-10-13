import { useEffect, useState } from "react";
import { Clock, Copy, MapPin, Minus, Plus, X } from "lucide-react";
import {
  CATEGORIES,
  DELIVERY_URL,
  MAPS_URL,
  MENU,
  WHATSAPP_DISPLAY,
  rupees,
  whatsappHref,
  type Category,
} from "@/data/menu";
import { useOrder } from "@/components/use-order";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "The gali" },
  { href: "#visit", label: "Visit" },
];

export function SaluSite() {
  const order = useOrder();
  const [filter, setFilter] = useState<Category | "All">("All");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const visible = filter === "All" ? MENU : MENU.filter((item) => item.category === filter);
  const whatsapp = whatsappHref(order.slip);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function copySlip() {
    if (!order.slip) return;
    try {
      await navigator.clipboard.writeText(order.slip);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="min-w-0 leading-none">
            <span className="block font-display text-lg font-semibold tracking-wide text-ink">
              Salu Gujjar Sweet
            </span>
            <span className="block text-xs tracking-widest text-brass uppercase">Sialkot</span>
          </a>
          <nav className="ml-auto hidden items-center gap-1 sm:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted hover:bg-clay hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-full bg-maroon px-4 text-sm font-medium text-milk sm:ml-0"
          >
            Order
            <span className="rounded-full bg-milk/15 px-2 py-0.5 text-xs tabular-nums">
              {order.count}
            </span>
          </button>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-3 sm:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-line bg-milk px-4 py-2 text-sm text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-widest text-brass uppercase">
              Trunk Bazaar · Deputy Bagh
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none font-semibold text-ink sm:text-6xl lg:text-7xl">
              The gali still
              <span className="block text-maroon">carries the name.</span>
            </h1>
            <p className="mt-5 font-urdu text-2xl leading-loose text-maroon-deep" dir="rtl" lang="ur">
              سالو گجر والی گلی
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Thick rabri doodh, kheer, falooda and ras malai from the milk house inner Sialkot
              named a street after. One glass at the counter. A parcel if you are leaving the city.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-maroon px-5 text-sm font-medium text-milk"
              >
                <WhatsAppMark className="size-4" />
                Order on WhatsApp
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-milk"
              >
                See the counter
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-milk px-5 text-sm font-medium text-ink"
              >
                Get directions
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Known for</dt>
                <dd className="mt-1 font-display text-lg text-ink">Rabri doodh</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Usually</dt>
                <dd className="mt-1 font-display text-lg text-ink">7am – 2am</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Began as</dt>
                <dd className="mt-1 font-display text-lg text-ink">A shop thara</dd>
              </div>
            </dl>
          </div>
          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-card bg-clay shadow-lg">
              <img
                src="/photos/rabri.jpg"
                alt="A brass tumbler of thick rabri milk with pistachio and saffron"
                className="aspect-3/4 w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Rabri doodh · one glass</span>
              <span className="font-medium text-ink">{rupees(700)}</span>
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Signature
              name="Rabri doodh"
              detail="The heavy glass"
              price={700}
              photo="/photos/rabri.jpg"
              onAdd={() => {
                order.add("rabri");
                setOpen(true);
              }}
            />
            <Signature
              name="Qulfi falooda"
              detail="Rose, seed, qulfi"
              price={500}
              photo="/photos/falooda.jpg"
              onAdd={() => {
                order.add("qulfi-falooda");
                setOpen(true);
              }}
            />
            <Signature
              name="Kheer"
              detail="Half kilo"
              price={600}
              photo="/photos/kheer.jpg"
              onAdd={() => {
                order.add("kheer-500");
                setOpen(true);
              }}
            />
            <Signature
              name="Ras malai"
              detail="A packet to go"
              price={500}
              photo="/photos/rasmalai.jpg"
              onAdd={() => {
                order.add("rasmalai");
                setOpen(true);
              }}
            />
          </div>
        </section>

        <section id="menu" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-widest text-brass uppercase">The counter</p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-ink">What they pour</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Prices follow the shop’s published list. The counter can move them — confirm before you pay.
            </p>
          </div>
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={
                    active
                      ? "shrink-0 min-h-11 rounded-full bg-ink px-4 text-sm text-milk"
                      : "shrink-0 min-h-11 rounded-full border border-line bg-milk px-4 text-sm text-ink"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {visible.map((item) => {
              const qty = order.lines.find((line) => line.id === item.id)?.qty ?? 0;
              return (
                <li key={item.id} className="flex gap-4 py-5">
                  <img
                    src={item.photo}
                    alt=""
                    className="size-20 shrink-0 rounded-2xl object-cover sm:size-24"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl text-ink">
                          {item.name}
                          <span className="ml-2 font-sans text-sm text-muted">{item.unit}</span>
                        </h3>
                        <p className="font-urdu text-sm leading-loose text-brass" dir="rtl" lang="ur">
                          {item.urdu}
                        </p>
                      </div>
                      <p className="shrink-0 font-medium tabular-nums text-ink">{rupees(item.price)}</p>
                    </div>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{item.blurb}</p>
                    <div className="mt-3">
                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => order.add(item.id)}
                          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-milk px-4 text-sm text-ink"
                        >
                          <Plus className="size-4" aria-hidden="true" />
                          Add
                        </button>
                      ) : (
                        <div className="inline-flex items-center gap-1 rounded-full border border-line bg-milk p-1">
                          <button
                            type="button"
                            aria-label={`Remove one ${item.name}`}
                            onClick={() => order.setQty(item.id, qty - 1)}
                            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-clay"
                          >
                            <Minus className="size-4" />
                          </button>
                          <span className="w-6 text-center text-sm tabular-nums">{qty}</span>
                          <button
                            type="button"
                            aria-label={`Add another ${item.name}`}
                            onClick={() => order.setQty(item.id, qty + 1)}
                            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-clay"
                          >
                            <Plus className="size-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section id="story" className="scroll-mt-28 bg-maroon text-milk">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-card">
              <img
                src="/photos/counter.jpg"
                alt="Brass milk pots and bowls on an old sweet-shop counter at night"
                className="aspect-video w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-gold uppercase">How the lane got its name</p>
              <h2 className="mt-3 font-display text-4xl leading-tight font-semibold">
                A thara became a street.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-milk/85">
                <p>
                  Inner Sialkot still points visitors to Salu Gujjar Wali Gali the way a city points to a
                  landmark. The work started smaller than the name: a grandfather selling rabri and falooda
                  doodh from the threshold of a shop.
                </p>
                <p>
                  The counter stayed in Deputy Bagh, off Trunk Bazaar and Lahai Bazaar, beside Yusuf Mall.
                  The street did not stay anonymous. People kept asking for the house, and the gali took the
                  name with it.
                </p>
                <p>
                  What comes out of the brass has not been dressed up. A heavy glass of rabri. Kheer that
                  shows up when someone searches for the best bowl in the city. Falooda cold enough for the
                  walk back through the bazaar. Ras malai, khoya barfi, and tins of desi ghee for the kitchen
                  at home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-xs font-medium tracking-widest text-brass uppercase">Find the house</p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-ink">Come to the gali.</h2>
              <p className="mt-4 font-urdu text-2xl leading-loose text-maroon" dir="rtl" lang="ur">
                ڈراما بال چوک سے لہائی بازار، یوسف مال کے ساتھ سالو گجر والی گلی۔
              </p>
              <address className="mt-4 text-lg leading-relaxed text-ink not-italic">
                Salu Gujjar Wali Gali
                <br />
                Deputy Bagh, Street No. 2
                <br />
                Trunk Bazaar, Sialkot
                <br />
                Punjab, Pakistan
              </address>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  <span>Usually pouring from 7 in the morning until 2 at night. Ask if you are later than that.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  <span>
                    From Drama Ball Chowk, straight into Lahai Bazaar. The gali sits with Yusuf Mall. A board
                    marks the house.
                  </span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-maroon px-5 text-sm font-medium text-milk"
                >
                  <WhatsAppMark className="size-4" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-milk px-5 text-sm font-medium text-ink"
                >
                  Open in Maps
                </a>
                <a
                  href={DELIVERY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-milk px-5 text-sm font-medium text-ink"
                >
                  Order on Foodpanda
                </a>
              </div>
            </div>
            <aside className="overflow-hidden rounded-card bg-ink text-milk lg:col-span-2">
              <img
                src="/photos/kheer.jpg"
                alt="A bowl of rice kheer with almonds and saffron"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-5">
                <p className="font-display text-2xl">One bowl, then the lane.</p>
                <p className="mt-2 text-sm leading-relaxed text-milk/75">
                  Add what you want, then send the slip on WhatsApp. The list stays on this phone until you clear it.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:px-6">
          <p className="font-display text-lg text-ink">Salu Gujjar Sweet</p>
          <p>Rabri, kheer & falooda · Sialkot</p>
        </div>
      </footer>

      {order.count > 0 && !open ? (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ink px-4 py-3 text-milk sm:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex min-h-11 w-full items-center justify-between text-sm"
          >
            <span>
              {order.count} {order.count === 1 ? "item" : "items"}
            </span>
            <span className="font-medium">{rupees(order.total)}</span>
          </button>
        </div>
      ) : null}

      {open ? (
        <div className="fixed inset-0 z-40 flex justify-end">
          <button
            type="button"
            aria-label="Close order"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex h-full w-full max-w-md flex-col bg-milk text-ink shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <p className="text-xs tracking-widest text-brass uppercase">Your slip</p>
                <h2 className="font-display text-2xl">For the counter</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="inline-flex size-11 items-center justify-center rounded-full hover:bg-clay"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {order.detailed.length === 0 ? (
                <p className="text-sm leading-relaxed text-muted">
                  The slip is empty. Add a glass of rabri, a bowl of kheer, or whatever you are carrying home.
                </p>
              ) : (
                <ul className="space-y-4">
                  {order.detailed.map((line) => (
                    <li key={line.id} className="flex items-center gap-3">
                      <img
                        src={line.item.photo}
                        alt=""
                        className="size-14 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{line.item.name}</p>
                        <p className="text-xs text-muted">{line.item.unit}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          aria-label={`Remove one ${line.item.name}`}
                          onClick={() => order.setQty(line.id, line.qty - 1)}
                          className="inline-flex size-10 items-center justify-center rounded-full border border-line"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm tabular-nums">{line.qty}</span>
                        <button
                          type="button"
                          aria-label={`Add another ${line.item.name}`}
                          onClick={() => order.setQty(line.id, line.qty + 1)}
                          className="inline-flex size-10 items-center justify-center rounded-full border border-line"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <p className="w-16 text-right text-sm tabular-nums">{rupees(line.lineTotal)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="border-t border-line px-5 py-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted">Total</span>
                <span className="font-display text-3xl">{rupees(order.total)}</span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-maroon px-4 text-sm font-medium text-milk"
                >
                  <WhatsAppMark className="size-4" />
                  {order.count === 0 ? "Order on WhatsApp" : "Send slip on WhatsApp"}
                </a>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={copySlip}
                    disabled={order.count === 0}
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 text-sm disabled:opacity-40"
                  >
                    <Copy className="size-4" aria-hidden="true" />
                    {copied ? "Copied" : "Copy slip"}
                  </button>
                  <button
                    type="button"
                    onClick={order.clear}
                    disabled={order.count === 0}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-4 text-sm disabled:opacity-40"
                  >
                    Clear
                  </button>
                </div>
              </div>
              <a
                href={DELIVERY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-line text-sm"
              >
                Or send it on Foodpanda
              </a>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.85c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.63-.61-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.25 2.24 1.39.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.32.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

function Signature({
  name,
  detail,
  price,
  photo,
  onAdd,
}: {
  name: string;
  detail: string;
  price: number;
  photo: string;
  onAdd: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-card bg-milk">
      <img src={photo} alt="" className="aspect-4/3 w-full object-cover" />
      <div className="flex items-end justify-between gap-3 p-4">
        <div>
          <h3 className="font-display text-xl text-ink">{name}</h3>
          <p className="text-sm text-muted">
            {detail} · {rupees(price)}
          </p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-clay px-4 text-sm text-ink"
        >
          Add
        </button>
      </div>
    </article>
  );
}
