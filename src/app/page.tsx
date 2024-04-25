import Image from "next/image";
import Main from "@/components/main/index"
import Table from "@/components/table/index"
import Video from "@/components/video/index"
import Pricing from "@/components/pricing/index"

export default function Home() {
  return (
    <div>
      <Main/>
      <Table/>
      <Video/>
      <Pricing/>
    </div>
  );
}
