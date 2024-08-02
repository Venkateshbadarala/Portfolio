import dynamic from "next/dynamic";

const SvgPathLoader = dynamic(() => import("@/components/CelebrationAnimation"), {
  suspense: true,
});

export default function Loading() {
  return <SvgPathLoader />;
}
