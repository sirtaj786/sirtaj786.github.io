import React from "react";
import { stackList } from "../../data/ProjectData";
import { stackList1 } from "../../data/ProjectData";
import { Soft } from "../../data/ProjectData";
import {
    Technologies,
    Tech,
    TechImg,
    TechName,
    TechName1,
    Tech1,
    ContactWrapper,
} from "./SkillsElement";
function Skills() {
    return (
        <>
            <ContactWrapper id="skills">
                <div className="Container">
                    <div className="SectionTitle" style={{ "margin-top":"150px" }}>Skills</div>
                    <div className="BigCard">
                        <h1  className="SectionTitle1" >Frontend</h1>
                        <Technologies>
                            {stackList.map((stack, index) => (
                                <Tech key={index} className="tech">
                                    <TechImg src={stack.img} alt={stack.name} />
                                    <TechName>{stack.name}</TechName>
                                </Tech>
                            ))}
                        </Technologies>
                        <h1 className="SectionTitle2">Backend</h1>
                        <Technologies>
                            {stackList1.map((stack, index) => (
                                <Tech key={index} className="tech">
                                    <TechImg src={stack.img} alt={stack.name} />
                                    <TechName>{stack.name}</TechName>
                                </Tech>
                            ))}
                        </Technologies>
                        <h1 className="SectionTitle2">Soft Skills</h1>
                        <Technologies>
                            {Soft.map((stack, index) => (
                                <Tech1 key={index} className="tech">
                                    {/* <TechImg src={stack.img} alt={stack.name} /> */}
                                    <TechName1 className="soft">{stack.title}</TechName1>
                                </Tech1>
                            ))}
                        </Technologies>
                    </div>
                </div>
            </ContactWrapper>
        </>
    );
}

export default Skills;
