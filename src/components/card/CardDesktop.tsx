import CardTextDesktop from "./CardTextDesktop";
import CardImgDesktop from "./CardImgDesktop";
import CardProductDesktop from "./CardProductDesktop";
import CardOrganization from "./CardOrganization";
import CardPeople from "./CardPeople";
import { associationObj } from "./CardPeople";
import CardTextMatch from "./CardTextMatch";

interface CardProps {
  heading: string;
  type: "needs" | "offers" | "organizations" | "people";
  option?: "services" | "partnership" | "products" | "matches";
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  terms?: string;
  count?: number;
  budgetType?: "per item";
  img?: string;
  associations?: associationObj[];
  matchType?: "Invite" | "Recommendation";
}

export default function CardDesktop(props: CardProps) {
  return (
    <>
      {props.option === "matches" && <CardTextMatch {...props} />}
      {props.type === "organizations" && <CardOrganization {...props} />}
      {props.type === "people" && <CardPeople {...props} />}
      {(props.type === "needs" || props.type === "offers") &&
        props.option !== "matches" && (
          <>
            {props.option === "products" && props.type === "offers" ? (
              <CardProductDesktop {...props} />
            ) : props.img ? (
              <CardImgDesktop {...props} />
            ) : (
              <CardTextDesktop {...props} />
            )}
          </>
        )}
    </>
  );
}
