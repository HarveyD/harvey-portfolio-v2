import type { SVGProps } from "react";

export type IconName =
  | "arrowRight"
  | "arrowUpRight"
  | "blog"
  | "chevronDown"
  | "close"
  | "github"
  | "link"
  | "linkedin"
  | "mail"
  | "moon"
  | "stackOverflow"
  | "sun";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  title?: string;
};

const commonProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
};

function iconPaths(name: IconName) {
  switch (name) {
    case "arrowRight":
      return (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      );
    case "arrowUpRight":
      return (
        <>
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </>
      );
    case "blog":
      return (
        <>
          <path d="M6 5h8a4 4 0 0 1 0 8H6z" />
          <path d="M6 13h9a3 3 0 0 1 0 6H6z" />
        </>
      );
    case "chevronDown":
      return <path d="m6 9 6 6 6-6" />;
    case "close":
      return (
        <>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </>
      );
    case "github":
      return (
        <>
          <path d="M9 19c-4.5 1.5-4.5-2.5-6-3" />
          <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </>
      );
    case "link":
      return (
        <>
          <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.7 5.23" />
          <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 1 0 7.07 7.07L13.3 18.77" />
        </>
      );
    case "mail":
      return (
        <>
          <rect x="3.5" y="6" width="17" height="12" rx="2" />
          <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
        </>
      );
    case "linkedin":
      return (
        <>
          <path d="M8 8v8" />
          <path d="M8 5.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" />
          <path d="M12 16v-4.5A2.5 2.5 0 0 1 14.5 9 2.5 2.5 0 0 1 17 11.5V16" />
          <path d="M3.5 4.5h17v15h-17z" />
        </>
      );
    case "moon":
      return <path d="M20 14.5A7.5 7.5 0 1 1 9.5 4 6 6 0 0 0 20 14.5Z" />;
    case "stackOverflow":
      return (
        <>
          <path d="M8 15h8" />
          <path d="m8.5 12.5 7 1.5" />
          <path d="m9.5 10 6.5 3" />
          <path d="m11 7.5 5 4.5" />
          <path d="m13 5 3.5 6" />
          <path d="M6 18h11v3H6z" />
        </>
      );
    case "sun":
      return (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5" />
          <path d="M12 19.5V22" />
          <path d="m4.93 4.93 1.77 1.77" />
          <path d="m17.3 17.3 1.77 1.77" />
          <path d="M2 12h2.5" />
          <path d="M19.5 12H22" />
          <path d="m4.93 19.07 1.77-1.77" />
          <path d="m17.3 6.7 1.77-1.77" />
        </>
      );
    default:
      return null;
  }
}

export function Icon({ name, title, ...props }: IconProps) {
  return (
    <svg aria-hidden={title ? undefined : true} role={title ? "img" : undefined} {...commonProps} {...props}>
      {title ? <title>{title}</title> : null}
      {iconPaths(name)}
    </svg>
  );
}