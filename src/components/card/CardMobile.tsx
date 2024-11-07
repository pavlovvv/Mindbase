import CardTextMobile from "./CardTextMobile";
import CardImgMobile from "./CardImgMobile";
import CardProduct from "./CardProductDesktop";
import CardOrganization from "./CardOrganization";
import CardPeople from "./CardPeople";
import { associationObj } from "./CardPeople";
import CardTextMatchMobile from "./CardTextMatchMobile";

interface CardProps {
  heading: string;
  type: "needs" | "offers" | "organizations" | "people";
  option?: "services" | "partnership" | "products" | "matches";
  matchType?: "Invite" | "Recommendation";
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  terms?: string;
  count?: number;
  budgetType?: "per item";
  img?: string;
  associations?: associationObj[];
}

export default function CardMobile(props: CardProps) {
  return (
    <>
      {props.option === "matches" && <CardTextMatchMobile {...props} />}
      {props.type === "organizations" && <CardOrganization {...props} />}
      {props.type === "people" && <CardPeople {...props} />}
      {(props.type === "needs" || props.type === "offers") &&
        props.option !== "matches" && (
          <>
            {props.option === "products" && props.type === "offers" ? (
              <CardProduct {...props} />
            ) : props.img ? (
              <CardImgMobile {...props} />
            ) : (
              <CardTextMobile {...props} />
            )}
          </>
        )}
    </>
  );
}
