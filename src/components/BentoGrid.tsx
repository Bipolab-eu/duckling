import React, { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export const BentoGrid: React.FC<Props> = ({ children }: any) => {

  const gridColumnStyles: Record<number, string> = {
    0: "md:col-span-2",
    1: "md:col-span-1",
    2: "md:col-span-1",
    3: "md:col-span-1",
    4: "md:col-span-2",
    5: "md:col-span-1",
    6: "md:col-span-1",
    7: "md:col-span-1",
    8: "md:col-span-2",
  };

  return (
    <section className="grid gap-4 md:grid-cols-4">
      {
        React.Children.map(children, (child, idx) =>
          <article className={`${gridColumnStyles[idx]}`}>
            {child}
          </article>
        )
      }
    </section>
  )
}