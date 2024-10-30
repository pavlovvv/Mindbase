import { useEffect, useRef } from "react";
import shimmer from "./shimmer.module.scss";
import styles from "@/main.module.scss";

export default function Shimmer({
  children,
}: {
  children: React.ReactNode;
  nameOfClass?: keyof typeof styles; // Explicitly tell TypeScript that this must be a valid key from the `styles` object.
}) {
  const elRef = useRef<HTMLDivElement | null>(null);

  const mouseMoveEvent = (e: MouseEvent) => {
    if (!elRef.current) return;
    const { x, y } = elRef.current.getBoundingClientRect();
    elRef.current.style.setProperty("--x", (e.clientX - x) as any);
    elRef.current.style.setProperty("--y", (e.clientY - y) as any);
  };

  useEffect(() => {
    const currentEl = elRef.current;
    if (currentEl) {
      currentEl.addEventListener("mousemove", mouseMoveEvent);
    }

    return () => {
      currentEl?.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);

  return (
    <div ref={elRef} className={`${shimmer.shimmer}`}>
      {children}
    </div>
  );
}
