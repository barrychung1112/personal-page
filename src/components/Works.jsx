import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  metric,
  accent,
  visual,
  icons,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 18, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-lg sm:w-[360px] w-full border border-white/10"
      >
        <div className={`relative w-full h-[230px] overflow-hidden rounded-lg bg-gradient-to-br ${accent}`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">
            {metric}
          </div>
          <div className="absolute right-5 top-5 flex gap-2">
            {icons?.map((icon) => (
              <div
                key={`${name}-${icon.name}`}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/90 shadow-lg"
                title={icon.name}
              >
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="h-7 w-7 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-5 bottom-5">
            <div className="text-white/25 text-[96px] font-black leading-none">
              {visual}
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-white/20">
              <div className="h-2 w-2/3 rounded-full bg-white/80" />
            </div>
          </div>
          {source_code_link && (
            <div className="absolute insert-0 flex justify-end m-3 card-img_hover w-full">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] leading-7">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">{tags.map(
          (tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`rounded-full bg-white/5 px-3 py-1 text-[13px] font-medium ${tag.color}`}
            >
              #{tag.name}
            </span>
          )
        )}</div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
    <div className="ml-0 sm:ml-20">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These selected work highlights show how I apply AI agents, full-stack
          engineering, system analysis, and product thinking to practical
          business problems across climate reporting, insurance, and university
          operations.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
