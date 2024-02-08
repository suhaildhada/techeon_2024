import { useMediaQuery } from "@mantine/hooks";
export const useMobile = (size: "xs" | "sm" | "md" | "lg" | "xl") => {
  const xl = "88em";
  const lg = "75em";
  const md = "62em";
  const sm = "48em";
  const xs = "36em";

  const sizes = { xl, lg, md, sm, xs };
  return useMediaQuery(`(max-width: ${sizes[size]})`);
};
