import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import TransportationMeans from "../images/transportation-means.png"
import Ai from "../images/ai.png"
import Tp from "../images/tp@4x.png"
import Accordion from "../components/accordion"

const TakingAction = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Taking Action</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="md:w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">How Can We Make It Happen?</h2>
            <p className="text-2xl">
              Our region stands at a turning point. We face big
              challenges—creating opportunities for every resident,
              strengthening our infrastructure, making communities more
              resilient, and responding to a changing economy and environment.
              New technologies can help, but progress depends on people: the
              choices we make, the policies we adopt, and the partnerships we
              build.
            </p>
            <p>
              Creating the future we want will take collaboration, creativity,
              and commitment. Everyone has a part to play—from governments
              agencies and businesses to community organizations and residents.
              Together, we can make our shared vision for Greater Philadelphia a
              reality.
            </p>
          </div>
        </div>
        <div className="w-full bg-white relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                Big Moves, Big Support
              </h2>
            </div>
            <div className="flex flex-col space-y-6 md:p-6 p-2 pt-0 text-[#063446]">
              <p>
                Ambitious ideas can’t move forward without strong support. Too
                many critical projects are delayed or underfunded, even as costs
                rise, and communities wait. To deliver the infrastructure,
                housing, and economic opportunities our region needs, we must
                streamline decision-making and secure the resources to match the
                scale of our goals.
              </p>
              <p>
                This means thinking big and acting boldly. Dependable
                investments and diversified funding streams will help us cut
                through red tape and get projects moving.
              </p>
              <p>Here's what is needed:</p>
              <ul className="list-disc ml-4">
                <li>
                  <strong>Reliable, long-term federal and state funding</strong>{" "}
                  to maintain and improve infrastructure and support ongoing
                  transit operations.
                </li>
                <li>
                  <strong>Stronger formula-based federal funding,</strong>{" "}
                  paired with competitive programs that reward innovation.
                </li>
                <li>
                  <strong>
                    Greater financial support for metropolitan planning
                  </strong>{" "}
                  recognizing that regional challenges require regional
                  solutions.
                </li>
                <li>
                  <strong>
                    State legislation enabling local governments to raise funds
                  </strong>
                  for their own transportation priorities.
                </li>
                <li>
                  <strong>
                    Flexibility to invest in local and regional priorities
                  </strong>
                  —projects that connect people to jobs, lower the cost of
                  living, and improve quality of life through safe, multimodal
                  travel.
                </li>
                <li>
                  <strong>
                    Streamlined federal permitting (NEPA) processes
                  </strong>{" "}
                  to reduce time and cost, especially for smaller or
                  environmentally beneficial projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                What DVRPC Is Doing
              </h2>
            </div>
            <div className="flex flex-col space-y-6 md:p-6 p-2 pt-0 text-[#063446]">
              <p>
                DVRPC brings together people and ideas to tackle the region’s
                toughest challenges. As the metropolitan planning organization
                (MPO) for Greater Philadelphia, we serve as a regional
                convener—connecting local governments, transportation agencies,
                business leaders, and community voices to plan for a better
                future.
              </p>
              <p>
                In a world that’s changing fast, DVRPC grounds decisions in
                data, technical expertise, and a commitment to innovation and
                improving communities for all. In a region as large and diverse
                as ours, strong, trusted leadership is essential—and DVRPC will
                continue to step up.
              </p>
              <p>
                <strong>Our commitment:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <strong>Deliver trusted data and analysis</strong> that
                  empower partners to make informed decisions.
                </li>
                <li>
                  <strong>Support local and regional projects</strong> that
                  align with long-term priorities and shared goals.
                </li>
                <li>
                  <strong>Strengthen civic leadership</strong> and bridge gaps
                  across boundaries to align action.
                </li>
                <li>
                  <strong>Facilitate regional collaboration</strong> and
                  cooperation across sectors, from municipalities and agencies
                  to nonprofits and the private sector, to implement real
                  solutions.
                </li>
                <li>
                  <strong>Listen to communities</strong> and elevate their
                  voices.
                </li>
                <li>
                  <strong>Advance the Plan’s goals</strong> through DVRPC’s
                  annual work program, the TIP, and collaboration with regional
                  planning partners.
                </li>
              </ul>
              <p>
                DVRPC’s work provides the foundation for lasting change, but
                real transformation depends on all of us. To create a better,
                more connected region, we must work together.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                What Local Governments Can Do
              </h2>
            </div>
            <div className="flex flex-col space-y-6 md:p-6 p-2 pt-0 text-[#063446]">
              <p>
                Local governments play a key role in building a stronger, more
                connected region by turning long-range plan goals and strategies
                into on-the-ground progress. Every zoning update, infrastructure
                investment, and community initiative that is consistent with the
                Plan helps bring the regional vision to life. DVRPC offers a
                variety of resources to help local governments deliver results
                that reflect local priorities while advancing shared regional
                goals.
              </p>
              <p>
                <strong>Ways to get involved:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <strong>Put Plan strategies into practice.</strong> Visit the
                  Strategies web page for actionable steps communities can take
                  to advance the regional vision, organized by topic area.
                </li>
                <li>
                  <strong>Link local efforts to funding.</strong> Participate in
                  the Municipal Exchange to hear from subject matter experts on
                  a variety of municipal challenges. Learn of grant
                  opportunities and technical assistance programs that can help
                  local governments secure funding for projects that advance the
                  Long-Range Plan’s goals.
                </li>
                <li>
                  <strong>Access planning tools and guidance.</strong> Explore
                  Municipal Resources for data resources to support sound
                  decision-making, effective local planning, and informed
                  approaches to community growth and housing needs.
                </li>
                <li>
                  <strong>Visit the Municipal Help Desk.</strong> Not sure where
                  to start? Use the Municipal Help Desk to connect with the
                  right DVRPC staff for support with planning, public
                  engagement, data, grants, funding, and implementation.
                </li>
              </ul>
              <p>
                Change starts locally. By aligning community goals with regional
                priorities, local governments can help ensure that every
                project, policy, and plan contributes to a Greater Philadelphia
                that works better for everyone.
              </p>
              <Link
                className="text-2xl mx-auto p-2 bg-[#063446] text-white my-4"
                to="/"
              >
                Click Here for Ways To Stay Connected
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TakingAction
