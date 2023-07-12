"use client";

import { useMemo } from "react";
import type { IIcon } from "./Icon.interface";

export default function Icon({ type, ...props }: IIcon) {
  const icon = useMemo(() => {
    switch (type) {
      case "light":
        return (
          <svg {...props} viewBox="0 0 48 48">
            <path d="M24 30.35q2.6 0 4.5-1.85t1.9-4.5q0-2.6-1.875-4.5T24 17.6q-2.6 0-4.475 1.875Q17.65 21.35 17.65 24q0 2.6 1.85 4.475 1.85 1.875 4.5 1.875Zm0 3.85q-4.25 0-7.225-2.975Q13.8 28.25 13.8 24t2.975-7.25q2.975-3 7.225-3t7.25 3q3 3 3 7.25t-3 7.225Q28.25 34.2 24 34.2ZM3.5 25.9q-.8 0-1.35-.55T1.6 24q0-.8.55-1.375t1.35-.575h5q.8 0 1.375.575T10.45 24q0 .8-.575 1.35T8.5 25.9Zm36 0q-.8 0-1.35-.55T37.6 24q0-.8.55-1.375t1.35-.575h5q.8 0 1.375.575T46.45 24q0 .8-.575 1.35t-1.375.55ZM24 10.4q-.8 0-1.35-.55T22.1 8.5v-5q0-.8.55-1.375T24 1.55q.8 0 1.375.575T25.95 3.5v5q0 .8-.575 1.35T24 10.4Zm0 36q-.8 0-1.35-.55t-.55-1.35v-5q0-.8.55-1.375T24 37.55q.8 0 1.375.575t.575 1.375v5q0 .8-.575 1.35T24 46.4Zm-12.25-32L8.9 11.6q-.6-.6-.6-1.4 0-.8.55-1.4.55-.5 1.35-.5t1.4.55l2.85 2.85q.5.55.5 1.35t-.5 1.3q-.55.6-1.375.6t-1.325-.55Zm24.7 24.7-2.85-2.85q-.55-.5-.55-1.275 0-.775.6-1.375.5-.55 1.3-.55t1.35.55l2.85 2.75q.55.65.55 1.45 0 .8-.5 1.35-.6.55-1.4.55-.8 0-1.35-.6Zm-2.8-24.7q-.6-.55-.6-1.35t.6-1.35l2.75-2.85q.6-.55 1.4-.55.8 0 1.4.5.5.6.5 1.4 0 .8-.55 1.35L36.3 14.4q-.55.55-1.35.55t-1.3-.55ZM8.85 39.15q-.55-.55-.55-1.35t.6-1.4l2.85-2.85q.5-.5 1.275-.525.775-.025 1.375.525.55.6.55 1.4 0 .8-.55 1.3l-2.75 2.85q-.65.6-1.45.6-.8 0-1.35-.55ZM24 24Z" />
          </svg>
        );
      case "dark":
        return (
          <svg {...props} viewBox="0 0 48 48">
            <path d="M24 42.35q-7.7 0-13.025-5.325T5.65 24q0-7.7 5.325-13.05Q16.3 5.6 24 5.6q.25 0 .65.025t1.15.075q-1.55 1.7-2.375 3.975Q22.6 11.95 22.6 14.3q0 4.65 3.25 7.875 3.25 3.225 7.9 3.225 2.45 0 4.625-.7t3.925-2.25q0 .55.05.925t.05.625q0 7.7-5.375 13.025T24 42.35Zm0-3.9q4.9 0 8.725-2.975Q36.55 32.5 37.6 28.4q-.95.4-2.075.625-1.125.225-2.175.225-6-.15-10.2-4.325-4.2-4.175-4.4-10.225 0-.9.175-1.975.175-1.075.725-2.475-4.45 1.5-7.275 5.325T9.55 24q0 6.05 4.2 10.25T24 38.45Zm-.4-14.1Z" />
          </svg>
        );
      default:
        return (
          <svg {...props} viewBox="0 0 24 24">
            <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          </svg>
        );
    }
  }, [props, type]);

  return icon;
}
