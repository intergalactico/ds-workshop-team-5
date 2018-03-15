/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from "react";
import ReactDOM from "react-dom";

import HeroLogo from "../assets/dsconf-logo.png";
import HeroBackground from "../assets/dsconf-wide.jpg";

import Curtis from "../assets/curtis-square-1-1.jpg";
import Jina from "../assets/jina_anne-1.jpg";


import {
	Button,
  NavBar,
  Hero,
  Icon,
  Panel,
  PanelHeader,
  PanelText,
  Profile
} from "../lib/my-awesome-library";

const st = Panel.PanelTypography;

const Home = () => {
  return (
    <div>
      <NavBar
        navItems={[
          { title: "Home", href: "/", active: true },
          { title: "About", href: "/about" }
        ]}
      />
			<Hero
				logo={HeroLogo}
        title="A Design Systems Conference"
        subtitles={["March 14th - 15th, 2018", "In Helsinki, Finland"]}
				description="Conference tickets are now sold out. There are some seats left in the workshops"
				background={HeroBackground}
			>
				<Button ghost>WORKSHOP TICKETS</Button>
			</Hero>
      <Panel dark>
        <PanelHeader>
          A two-day conference with one day of keynotes & one day of workshops.
        </PanelHeader>
        <PanelText>
          DSCONF aims to bring people together to exchange ideas, solutions,
          inspiration, and learn how to build digital products better and more
          efficiently with Design Systems.
        </PanelText>
        <PanelText>
          An event for digital product designers, builders, business owners and
          organizations who want to learn how to build design systems and why
          they are needed in the future. We are at a crossroads whereby making
          the right decisions, you will gain a significant business advantage
          and ensure the best possible user experience for your digital products
          and services.
        </PanelText>
        <PanelText>
          Sounds good? Make sure you familiarize yourself with our{" "}
          <a href="/code-of-conduct" title="code of conduct">
            code of conduct
          </a>.
        </PanelText>
      </Panel>

      <Panel>
        <PanelHeader>
          Keynotes, talks and workshops from the fore-front of Design Systems.
        </PanelHeader>
        <PanelText>
          DSCONF has 4 long, and 6 shorter speeches during the conference day.
          We are aiming to bring abundance of tangible information to attendees
          with real cases and learnings. The second day of DSCONF is dedicated
          to workshops. There is a total number of 5 workshops, and you can
          purchase them separately. The workshops are either half-day or
          full-day.
        </PanelText>
      </Panel>

      <Panel>
        <PanelHeader>
          Keynotes
				</PanelHeader>

        <Profile
          name="Nathan Curtis"
          role="Co-founder of EightShapes"
          social={{
            twitter: "nathancurtis"
          }}
          avatar={Curtis}
				/>

        <Profile
          name="Jina Anne"
          role="Senior Design Systems Lead at Amazon"
          social={{
            twitter: "jina"
          }}
          avatar={Jina}
				/>

      </Panel>
    </div>
  );
};

const HomeOld = () => {
  return (
    <div>
      <div>
        <Icon name="star" color="#000" isInverted size="0.785rem" />
        <Icon name="star" color="#888888" isInverted />
        <Icon name="github" color="#1b8ceb" isInverted size="1.5rem" />
        <Icon name="gift" color="#00d1b2" isInverted size="2.0rem" />
        <Icon name="bug" color="#e91e63" isInverted size="3rem" />
      </div>
      <div>
        <Panel>
          <PanelHeader>Hello!</PanelHeader>
          <PanelText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </PanelText>
        </Panel>
      </div>
    </div>
  );
};

export default Home;
