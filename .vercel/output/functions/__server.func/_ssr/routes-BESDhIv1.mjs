import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, i as Minus, o as Copy, r as Plus, s as Clock, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BESDhIv1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Signature",
	"Kheer",
	"Cold",
	"Mithai",
	"Pantry"
];
var MENU = [
	{
		id: "rabri",
		name: "Rabri doodh",
		urdu: "ربڑی دودھ",
		blurb: "The glass the gali is known for. Thick milk, a skin of malai, not a café latte.",
		price: 700,
		unit: "1 glass",
		category: "Signature",
		photo: "/photos/rabri.jpg"
	},
	{
		id: "rasmalai",
		name: "Ras malai",
		urdu: "رس ملائی",
		blurb: "Soft chenna in saffron milk. Take a packet home if the bowl is finished.",
		price: 500,
		unit: "1 packet",
		category: "Signature",
		photo: "/photos/rasmalai.jpg"
	},
	{
		id: "kheer-200",
		name: "Kheer",
		urdu: "کھیر",
		blurb: "The small bowl. Rice, milk, nuts — the one people search Sialkot for.",
		price: 280,
		unit: "200 g",
		category: "Kheer",
		photo: "/photos/kheer.jpg"
	},
	{
		id: "kheer-500",
		name: "Kheer",
		urdu: "کھیر",
		blurb: "A family portion. Enough for the table after nihari, or to send to the house.",
		price: 600,
		unit: "500 g",
		category: "Kheer",
		photo: "/photos/kheer.jpg"
	},
	{
		id: "kheer-1kg",
		name: "Kheer",
		urdu: "کھیر",
		blurb: "The full kilo. For a daawat, or for whoever said they would only taste a spoon.",
		price: 1200,
		unit: "1 kg",
		category: "Kheer",
		photo: "/photos/kheer.jpg"
	},
	{
		id: "qulfi-falooda",
		name: "Qulfi falooda",
		urdu: "قلفی فالودہ",
		blurb: "The cold glass: rose, vermicelli, basil seed and a scoop of qulfi.",
		price: 500,
		unit: "1 piece",
		category: "Cold",
		photo: "/photos/falooda.jpg"
	},
	{
		id: "durian-falooda",
		name: "Durian falooda",
		urdu: "فالودہ",
		blurb: "A lighter falooda pour when you still have the bazaar left to walk.",
		price: 250,
		unit: "1 piece",
		category: "Cold",
		photo: "/photos/falooda.jpg"
	},
	{
		id: "gulab",
		name: "Gulab jamun",
		urdu: "گلاب جامن",
		blurb: "Warm, syruped, and gone before the tea arrives.",
		price: 380,
		unit: "250 g",
		category: "Mithai",
		photo: "/photos/barfi.jpg"
	},
	{
		id: "barfi",
		name: "Khoya barfi",
		urdu: "کھویا برفی",
		blurb: "Diamond-cut khoya barfi. The parcel that travels better than the glass does.",
		price: 2200,
		unit: "1 kg",
		category: "Mithai",
		photo: "/photos/barfi.jpg"
	},
	{
		id: "khoya",
		name: "Khalis khoya",
		urdu: "خالص کھویا",
		blurb: "Plain khoya for the house — for barfi, for halwa, for whatever the kitchen decides.",
		price: 2200,
		unit: "1 kg",
		category: "Mithai",
		photo: "/photos/barfi.jpg"
	},
	{
		id: "ghee-500",
		name: "Desi ghee",
		urdu: "دیسی گھی",
		blurb: "Half a kilo of the ghee the sweets are cooked in.",
		price: 1750,
		unit: "500 g",
		category: "Pantry",
		photo: "/photos/counter.jpg"
	},
	{
		id: "ghee-1kg",
		name: "Desi ghee",
		urdu: "دیسی گھی",
		blurb: "The tin people carry out of Trunk Bazaar along with the kheer.",
		price: 3500,
		unit: "1 kg",
		category: "Pantry",
		photo: "/photos/counter.jpg"
	},
	{
		id: "honey",
		name: "Honey",
		urdu: "شہد",
		blurb: "A small jar from the counter, if the sweet tooth wants something quieter.",
		price: 500,
		unit: "250 g",
		category: "Pantry",
		photo: "/photos/counter.jpg"
	}
];
var MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Salu+Gujjar+Wali+Gali+Trunk+Bazaar+Sialkot";
var DELIVERY_URL = "https://www.foodpanda.pk/shop/ia1i/salu-gujjar-milk-shop";
/** Sallu Gujjer Kheer House, Deputy Bagh, Sialkot — published line. */
var WHATSAPP_NUMBER = "923339999614";
var WHATSAPP_DISPLAY = "0333 9999614";
function whatsappHref(slip) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(slip || "Assalamualaikum Salu Gujjar,\nI would like to place an order.\nSalu Gujjar Wali Gali, Trunk Bazaar, Sialkot.")}`;
}
function rupees(n) {
	return `Rs ${n.toLocaleString("en-PK")}`;
}
var KEY = "salu-gujjar-order";
function read() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((line) => typeof line?.id === "string" && typeof line?.qty === "number" && line.qty > 0 && MENU.some((item) => item.id === line.id));
	} catch {
		return [];
	}
}
function useOrder() {
	const [lines, setLines] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLines(read());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(KEY, JSON.stringify(lines));
	}, [lines, ready]);
	const add = (0, import_react.useCallback)((id) => {
		setLines((prev) => {
			if (!prev.find((line) => line.id === id)) return [...prev, {
				id,
				qty: 1
			}];
			return prev.map((line) => line.id === id ? {
				...line,
				qty: line.qty + 1
			} : line);
		});
	}, []);
	const setQty = (0, import_react.useCallback)((id, qty) => {
		setLines((prev) => {
			if (qty <= 0) return prev.filter((line) => line.id !== id);
			if (!prev.find((line) => line.id === id)) return [...prev, {
				id,
				qty
			}];
			return prev.map((line) => line.id === id ? {
				...line,
				qty
			} : line);
		});
	}, []);
	const clear = (0, import_react.useCallback)(() => setLines([]), []);
	const detailed = (0, import_react.useMemo)(() => lines.map((line) => {
		const item = MENU.find((entry) => entry.id === line.id);
		if (!item) return null;
		return {
			...line,
			item,
			lineTotal: item.price * line.qty
		};
	}).filter((line) => line !== null), [lines]);
	const count = detailed.reduce((sum, line) => sum + line.qty, 0);
	const total = detailed.reduce((sum, line) => sum + line.lineTotal, 0);
	return {
		lines,
		detailed,
		count,
		total,
		add,
		setQty,
		clear,
		slip: (0, import_react.useMemo)(() => {
			if (detailed.length === 0) return "";
			return [
				"Salu Gujjar — order slip",
				"Salu Gujjar Wali Gali, Trunk Bazaar, Sialkot",
				"",
				detailed.map((line) => `${line.qty} × ${line.item.name} (${line.item.unit}) — Rs ${line.lineTotal.toLocaleString("en-PK")}`).join("\n"),
				"",
				`Total Rs ${total.toLocaleString("en-PK")}`,
				"",
				"Please confirm at the counter. Prices follow the published list and can move."
			].join("\n");
		}, [detailed, total]),
		ready
	};
}
var LINKS = [
	{
		href: "#menu",
		label: "Menu"
	},
	{
		href: "#story",
		label: "The gali"
	},
	{
		href: "#visit",
		label: "Visit"
	}
];
function SaluSite() {
	const order = useOrder();
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const visible = filter === "All" ? MENU : MENU.filter((item) => item.category === filter);
	const whatsapp = whatsappHref(order.slip);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "min-w-0 leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-lg font-semibold tracking-wide text-ink",
								children: "Salu Gujjar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-widest text-brass uppercase",
								children: "Sialkot"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ml-auto hidden items-center gap-1 sm:flex",
							children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "rounded-full px-4 py-2 text-sm text-muted hover:bg-clay hover:text-ink",
								children: link.label
							}, link.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(true),
							className: "ml-auto inline-flex min-h-11 items-center gap-2 rounded-full bg-maroon px-4 text-sm font-medium text-milk sm:ml-0",
							children: ["Order", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-milk/15 px-2 py-0.5 text-xs tabular-nums",
								children: order.count
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-2 overflow-x-auto px-4 pb-3 sm:hidden",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "shrink-0 rounded-full border border-line bg-milk px-4 py-2 text-sm text-ink",
						children: link.label
					}, link.href))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-brass uppercase",
									children: "Trunk Bazaar · Deputy Bagh"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-3 font-display text-5xl leading-none font-semibold text-ink sm:text-6xl lg:text-7xl",
									children: ["The gali still", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-maroon",
										children: "carries the name."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 font-urdu text-2xl leading-loose text-maroon-deep",
									dir: "rtl",
									lang: "ur",
									children: "سالو گجر والی گلی"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xl text-lg leading-relaxed text-muted",
									children: "Thick rabri doodh, kheer, falooda and ras malai from the milk house inner Sialkot named a street after. One glass at the counter. A parcel if you are leaving the city."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: whatsapp,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-maroon px-5 text-sm font-medium text-milk",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, { className: "size-4" }), "Order on WhatsApp"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#menu",
											className: "inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-milk",
											children: "See the counter"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex min-h-11 items-center rounded-full border border-line bg-milk px-5 text-sm font-medium text-ink",
											children: "Get directions"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs tracking-widest text-muted uppercase",
											children: "Known for"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-display text-lg text-ink",
											children: "Rabri doodh"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs tracking-widest text-muted uppercase",
											children: "Usually"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-display text-lg text-ink",
											children: "7am – 2am"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs tracking-widest text-muted uppercase",
											children: "Began as"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-display text-lg text-ink",
											children: "A shop thara"
										})] })
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "lg:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-card bg-clay shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/photos/rabri.jpg",
									alt: "A brass tumbler of thick rabri milk with pistachio and saffron",
									className: "aspect-3/4 w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-3 flex items-baseline justify-between text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rabri doodh · one glass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-ink",
									children: rupees(700)
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-6xl px-4 pb-6 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {
									name: "Rabri doodh",
									detail: "The heavy glass",
									price: 700,
									photo: "/photos/rabri.jpg",
									onAdd: () => {
										order.add("rabri");
										setOpen(true);
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {
									name: "Qulfi falooda",
									detail: "Rose, seed, qulfi",
									price: 500,
									photo: "/photos/falooda.jpg",
									onAdd: () => {
										order.add("qulfi-falooda");
										setOpen(true);
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {
									name: "Kheer",
									detail: "Half kilo",
									price: 600,
									photo: "/photos/kheer.jpg",
									onAdd: () => {
										order.add("kheer-500");
										setOpen(true);
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {
									name: "Ras malai",
									detail: "A packet to go",
									price: 500,
									photo: "/photos/rasmalai.jpg",
									onAdd: () => {
										order.add("rasmalai");
										setOpen(true);
									}
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "menu",
						className: "scroll-mt-28 mx-auto max-w-6xl px-4 py-14 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-brass uppercase",
									children: "The counter"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-4xl font-semibold text-ink",
									children: "What they pour"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm text-sm leading-relaxed text-muted",
									children: "Prices follow the shop’s published list. The counter can move them — confirm before you pay."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-2 overflow-x-auto pb-2",
								children: CATEGORIES.map((category) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setFilter(category),
										className: filter === category ? "shrink-0 min-h-11 rounded-full bg-ink px-4 text-sm text-milk" : "shrink-0 min-h-11 rounded-full border border-line bg-milk px-4 text-sm text-ink",
										children: category
									}, category);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 divide-y divide-line border-y border-line",
								children: visible.map((item) => {
									const qty = order.lines.find((line) => line.id === item.id)?.qty ?? 0;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-4 py-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.photo,
											alt: "",
											className: "size-20 shrink-0 rounded-2xl object-cover sm:size-24"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
														className: "font-display text-xl text-ink",
														children: [item.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "ml-2 font-sans text-sm text-muted",
															children: item.unit
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-urdu text-sm leading-loose text-brass",
														dir: "rtl",
														lang: "ur",
														children: item.urdu
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "shrink-0 font-medium tabular-nums text-ink",
														children: rupees(item.price)
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 max-w-xl text-sm leading-relaxed text-muted",
													children: item.blurb
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-3",
													children: qty === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => order.add(item.id),
														className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-milk px-4 text-sm text-ink",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
															className: "size-4",
															"aria-hidden": "true"
														}), "Add"]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "inline-flex items-center gap-1 rounded-full border border-line bg-milk p-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																"aria-label": `Remove one ${item.name}`,
																onClick: () => order.setQty(item.id, qty - 1),
																className: "inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-clay",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "w-6 text-center text-sm tabular-nums",
																children: qty
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																"aria-label": `Add another ${item.name}`,
																onClick: () => order.setQty(item.id, qty + 1),
																className: "inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-clay",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
															})
														]
													})
												})
											]
										})]
									}, item.id);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "story",
						className: "scroll-mt-28 bg-maroon text-milk",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/photos/counter.jpg",
									alt: "Brass milk pots and bowls on an old sweet-shop counter at night",
									className: "aspect-video w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-gold uppercase",
									children: "How the lane got its name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl leading-tight font-semibold",
									children: "A thara became a street."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-4 text-base leading-relaxed text-milk/85",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Inner Sialkot still points visitors to Salu Gujjar Wali Gali the way a city points to a landmark. The work started smaller than the name: a grandfather selling rabri and falooda doodh from the threshold of a shop." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The counter stayed in Deputy Bagh, off Trunk Bazaar and Lahai Bazaar, beside Yusuf Mall. The street did not stay anonymous. People kept asking for the house, and the gali took the name with it." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What comes out of the brass has not been dressed up. A heavy glass of rabri. Kheer that shows up when someone searches for the best bowl in the city. Falooda cold enough for the walk back through the bazaar. Ras malai, khoya barfi, and tins of desi ghee for the kitchen at home." })
									]
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "visit",
						className: "scroll-mt-28 mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium tracking-widest text-brass uppercase",
										children: "Find the house"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-4xl font-semibold text-ink",
										children: "Come to the gali."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-urdu text-2xl leading-loose text-maroon",
										dir: "rtl",
										lang: "ur",
										children: "ڈراما بال چوک سے لہائی بازار، یوسف مال کے ساتھ سالو گجر والی گلی۔"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
										className: "mt-4 text-lg leading-relaxed text-ink not-italic",
										children: [
											"Salu Gujjar Wali Gali",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Deputy Bagh, Street No. 2",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Trunk Bazaar, Sialkot",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Punjab, Pakistan"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-6 space-y-3 text-sm text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
												className: "mt-0.5 size-4 shrink-0 text-brass",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Usually pouring from 7 in the morning until 2 at night. Ask if you are later than that." })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												className: "mt-0.5 size-4 shrink-0 text-brass",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "From Drama Ball Chowk, straight into Lahai Bazaar. The gali sits with Yusuf Mall. A board marks the house." })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: whatsapp,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-maroon px-5 text-sm font-medium text-milk",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, { className: "size-4" }),
													"WhatsApp ",
													WHATSAPP_DISPLAY
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: MAPS_URL,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex min-h-11 items-center rounded-full border border-line bg-milk px-5 text-sm font-medium text-ink",
												children: "Open in Maps"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: DELIVERY_URL,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex min-h-11 items-center rounded-full border border-line bg-milk px-5 text-sm font-medium text-ink",
												children: "Order on Foodpanda"
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "overflow-hidden rounded-card bg-ink text-milk lg:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/photos/kheer.jpg",
									alt: "A bowl of rice kheer with almonds and saffron",
									className: "aspect-4/3 w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl",
										children: "One bowl, then the lane."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-milk/75",
										children: "Add what you want, then send the slip on WhatsApp. The list stays on this phone until you clear it."
									})]
								})]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-ink",
						children: "Salu Gujjar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rabri, kheer & falooda · Sialkot" })]
				})
			}),
			order.count > 0 && !open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ink px-4 py-3 text-milk sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(true),
					className: "flex min-h-11 w-full items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						order.count,
						" ",
						order.count === 1 ? "item" : "items"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: rupees(order.total)
					})]
				})
			}) : null,
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 flex justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close order",
					className: "absolute inset-0 bg-ink/40",
					onClick: () => setOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "relative flex h-full w-full max-w-md flex-col bg-milk text-ink shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-line px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-brass uppercase",
								children: "Your slip"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "For the counter"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen(false),
								"aria-label": "Close",
								className: "inline-flex size-11 items-center justify-center rounded-full hover:bg-clay",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-y-auto px-5 py-4",
							children: order.detailed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted",
								children: "The slip is empty. Add a glass of rabri, a bowl of kheer, or whatever you are carrying home."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-4",
								children: order.detailed.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: line.item.photo,
											alt: "",
											className: "size-14 rounded-xl object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate font-medium",
												children: line.item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted",
												children: line.item.unit
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": `Remove one ${line.item.name}`,
													onClick: () => order.setQty(line.id, line.qty - 1),
													className: "inline-flex size-10 items-center justify-center rounded-full border border-line",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-5 text-center text-sm tabular-nums",
													children: line.qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": `Add another ${line.item.name}`,
													onClick: () => order.setQty(line.id, line.qty + 1),
													className: "inline-flex size-10 items-center justify-center rounded-full border border-line",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "w-16 text-right text-sm tabular-nums",
											children: rupees(line.lineTotal)
										})
									]
								}, line.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-line px-5 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-3xl",
										children: rupees(order.total)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: whatsapp,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-maroon px-4 text-sm font-medium text-milk",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, { className: "size-4" }), order.count === 0 ? "Order on WhatsApp" : "Send slip on WhatsApp"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: copySlip,
											disabled: order.count === 0,
											className: "inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 text-sm disabled:opacity-40",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
												className: "size-4",
												"aria-hidden": "true"
											}), copied ? "Copied" : "Copy slip"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: order.clear,
											disabled: order.count === 0,
											className: "inline-flex min-h-11 items-center justify-center rounded-full border border-line px-4 text-sm disabled:opacity-40",
											children: "Clear"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: DELIVERY_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-line text-sm",
									children: "Or send it on Foodpanda"
								})
							]
						})
					]
				})]
			}) : null
		]
	});
}
function WhatsAppMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.85c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.63-.61-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.25 2.24 1.39.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.32.07.12.07.68-.17 1.36z" })
	});
}
function Signature({ name, detail, price, photo, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-card bg-milk",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: photo,
			alt: "",
			className: "aspect-4/3 w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-3 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-ink",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					detail,
					" · ",
					rupees(price)
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAdd,
				className: "inline-flex min-h-11 shrink-0 items-center rounded-full bg-clay px-4 text-sm text-ink",
				children: "Add"
			})]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaluSite, {});
}
//#endregion
export { Home as component };
