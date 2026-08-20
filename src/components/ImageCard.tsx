import Image from "next/image";
import Link from "next/link";
import { CentreItem } from "@/data/centreData";

interface Props {
  item: CentreItem;
}

export default function Card({ item }: Props) {
  const cardContent = (
    <>
      <Image
        src={item.image}
        alt={item.title}
        width={450}
        height={520}
        className="coe-card-img"
      />

      <div className="coe-overlay"></div>

      <div className="subheading18">{item.title}</div>
    </>
  );

  if (item.link) {
    return (
      <Link href={item.link} className="coe-card">
        {cardContent}
      </Link>
    );
  }

  return <div className="coe-card">{cardContent}</div>;
}