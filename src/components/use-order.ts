import { useCallback, useEffect, useMemo, useState } from "react";
import { MENU } from "@/data/menu";

const KEY = "salu-gujjar-order";

export type OrderLine = { id: string; qty: number };

function read(): OrderLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as OrderLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        typeof line?.id === "string" &&
        typeof line?.qty === "number" &&
        line.qty > 0 &&
        MENU.some((item) => item.id === line.id),
    );
  } catch {
    return [];
  }
}

export function useOrder() {
  const [lines, setLines] = useState<OrderLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(read());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((id: string) => {
    setLines((prev) => {
      const found = prev.find((line) => line.id === id);
      if (!found) return [...prev, { id, qty: 1 }];
      return prev.map((line) => (line.id === id ? { ...line, qty: line.qty + 1 } : line));
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((line) => line.id !== id);
      const found = prev.find((line) => line.id === id);
      if (!found) return [...prev, { id, qty }];
      return prev.map((line) => (line.id === id ? { ...line, qty } : line));
    });
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const detailed = useMemo(
    () =>
      lines
        .map((line) => {
          const item = MENU.find((entry) => entry.id === line.id);
          if (!item) return null;
          return { ...line, item, lineTotal: item.price * line.qty };
        })
        .filter((line): line is NonNullable<typeof line> => line !== null),
    [lines],
  );

  const count = detailed.reduce((sum, line) => sum + line.qty, 0);
  const total = detailed.reduce((sum, line) => sum + line.lineTotal, 0);

  const slip = useMemo(() => {
    if (detailed.length === 0) return "";
    const rows = detailed
      .map(
        (line) =>
          `${line.qty} × ${line.item.name} (${line.item.unit}) — Rs ${line.lineTotal.toLocaleString("en-PK")}`,
      )
      .join("\n");
    return [
      "Salu Gujjar Sweet — order slip",
      "Salu Gujjar Wali Gali, Trunk Bazaar, Sialkot",
      "",
      rows,
      "",
      `Total Rs ${total.toLocaleString("en-PK")}`,
      "",
      "Please confirm at the counter. Prices follow the published list and can move.",
    ].join("\n");
  }, [detailed, total]);

  return { lines, detailed, count, total, add, setQty, clear, slip, ready };
}
