// import React from "react";
// import "./Progress.scss";
// import {illustration, techStack} from "../../portfolio";
// import {Fade} from "react-reveal";
// import Build from "../../assets/lottie/build";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";

// export default function StackProgress() {
//   if (techStack.viewSkillBars) {
//     return (
//       <Fade bottom duration={1000} distance="20px">
//         <div className="skills-container">
//           <div className="skills-bar">
//             <h1 className="skills-heading">Proficiency</h1>
//             {techStack.experience.map((exp, i) => {
//               const progressStyle = {
//                 width: exp.progressPercentage
//               };
//               return (
//                 <div key={i} className="skill">
//                   <p>{exp.Stack}</p>
//                   <div className="meter">
//                     <span style={progressStyle}></span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="skills-image">
//             {illustration.animated ? (
//               <DisplayLottie animationData={Build} />
//             ) : (
//               <img
//                 alt="Skills"
//                 src={require("../../assets/images/skill.svg")}
//               />
//             )}
//           </div>
//         </div>
//       </Fade>
//     );
//   }
//   return null;
// }
import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function StackProgress() {
  const data = techStack.experienceBuckets || [];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  if (!techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Experience</h1>

            <PieChart width={400} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }

  return null;
}
