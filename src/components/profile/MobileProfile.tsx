import PhotoFull from "@public/photo-full.png";
import mainStyles from "@/main.module.scss";
import shareIcon from "@public/share-icon.png";
import locationIcon from "@public/map-pin-line.png";
import { useState } from "react";
import { useCollapse } from "react-collapsed";

export default function MobileProfile() {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    collapsedHeight: 288,
  });

  return (
    <>
      <section className={mainStyles.main}>
        <div className={mainStyles.main__top_mobile}>
          <div
            style={{ position: "relative", width: "20vw", minWidth: "80px" }}
          >
            <img
              src={PhotoFull}
              alt="user-photo"
              style={{ width: "100%", borderRadius: "50%" }}
            />
            <div className={mainStyles["activity-status"]}></div>
          </div>

          <div>
            <div className={mainStyles["right-top"]}>
              <div className={mainStyles.heading}>John Doe</div>
              <div className={mainStyles.share}>
                Share <img src={shareIcon} />
              </div>
            </div>

            <div className={mainStyles["right-bottom"]}>
              {" "}
              <img src={locationIcon} /> Tokyo, Japan - 8:01 pm local time{" "}
            </div>
          </div>
        </div>

        <div className={mainStyles.main__left}>
          <div
            className={mainStyles["main__left-text"]}
            {...getCollapseProps()}
          >
            I`m a Full Stack Web Developer. I innovate with MERN (Javascript) or
            Python stacks and automation to elevate your online presence. More
            than 5 years of experience in top tech firms working as Full Stack
            Developer.
            <br /> <b>&nbsp;&nbsp;•&nbsp; Web Development Expertise:</b>
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; - Frontend Development: Mastery in
            React.js, Next.js, Tailwind CSS, Bootstrap 5. Focused on crafting
            responsive, engaging websites and applications.
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; - Backend Development: Proficient in
            Python frameworks like Django, Flask Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </div>
          <a
            style={{
              color: "#677ccb",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "...less" : "...more"}
          </a>
        </div>

        <div
          className={mainStyles["main__left-top-buttons"]}
          style={{ gap: "16px" }}
        >
          <div className={mainStyles["main-button_mobile"]}>Connect</div>
          <div className={mainStyles["main-button_mobile"]}>Message</div>
        </div>
      </section>
    </>
  );
}
