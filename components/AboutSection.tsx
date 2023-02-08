import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Devops" },
  { skill: "Gitops" },
  { skill: "GitHub" },
  { skill: "GitLab" },
  { skill: "CI/CD" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Argo CD" },
  { skill: "Helm" },
  { skill: "Ansible" },
  { skill: "MySQL" },
  { skill: "PostgreSQL" },
  { skill: "Jira" },
  { skill: "Cloud Computing" },
  { skill: "AWS" },
  { skill: "GCP" },
  { skill: "Digital Ocean" },
  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Altaf and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Devops engineer
              based in Islamabad, Pakistan.
            </p>
            <br />
            <p>
            As a seasoned DevOps Engineer and Cloud Solution Architect, I possess a wealth of expertise in crafting innovative and scalable solutions that are designed to meet the bespoke requirements of my clients. My proficiency in systems automation, cloud infrastructure, and continuous integration/delivery has resulted in a demonstrable track record of success in catalyzing digital transformation and propelling business growth.
            </p>
            <br />
            <p>
            Leveraging my penchant for innovation and a comprehensive grasp of the latest technologies, I have consistently delivered reliable and scalable systems that have been instrumental in fostering business growth and transformation. My proficiency in automation, cloud infrastructure, and continuous integration/delivery has allowed me to successfully execute a plethora of intricate projects that have had a marked impact on the organizations I have partnered with.
            </p>
            <br />
            <p>
            In conclusion, if you are seeking a{" "}
              <span className="font-bold text-teal-500">
              talented and experienced
              </span>{" "}
              DevOps Engineer and Cloud Solution Architect to drive your organization towards success in the digital age, I am the ideal candidate. My passion for innovation, commitment to quality, and profound understanding of the latest technologies, position me as the perfect partner to take your organization to the next level. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/devops.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:mt-10  md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
