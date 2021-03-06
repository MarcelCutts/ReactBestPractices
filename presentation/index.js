// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Spectacle,
  Layout,
  Fill,
  Fit,
  Image,
  Appear,
  List,
  ListItem,
  CodePane,
  Text,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  twitterLogo: require("../assets/twitter-logo.png"),
  componentStructure: require("../assets/component-structure.png"),
  flatComponents: require("../assets/flat-components.png"),
  css3Logo: require("../assets/css3-logo.png"),
  lessLogo: require("../assets/less-logo.png"),
  sassLogo: require("../assets/sass-logo.svg"),
  jestLogo: require("../assets/jest-logo.png"),
  esLintLogo: require("../assets/eslint-logo.svg"),
  airbnbLogo: require("../assets/airbnb-logo.png"),
  reactDevTools: require("../assets/react-developer-tools.gif")
};

preloader(images);

const theme = createTheme({
  badgerRed: "#FC1D42",
  badgerWhite: "#F8F8F8",
  badgerBlack: "#212121"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={1} fit caps lineHeight={1} textColor="badgerRed">
              React
            </Heading>
            <Heading size={1} fit caps textColor="badgerRed">
              Best Practices
            </Heading>
            <Layout>
              <Fill>
                <Heading size={6} caps textColor="badgerWhite" bgColor="badgerBlack" margin={10}>
                  Marcel Cutts
                </Heading>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="badgerWhite" bgColor="badgerBlack" margin={10}>
                  @marcelcutts <Image src={images.twitterLogo} height="30px" margin="3px 0 0 0"/>
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={1} fit caps lineHeight={1} textColor="badgerRed">
              Best Practices
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={1} fit caps lineHeight={1} textColor="badgerRed" textFont="Gloria Hallelujah">
              "Best Practices"
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={1} fit caps lineHeight={1} textColor="badgerRed">
              Structure
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Application Structure
            </Heading>
            <CodePane
              lang="markdown"
              source={require("raw!../assets/application-structure.example")}
              margin="40px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Component Structure
            </Heading>
            <Heading size={5} caps lineHeight={1} textColor="badgerBlack" margin="20px 0">
              Components library - as flat as possible!
            </Heading>
            <Image src={images.flatComponents} />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Component Structure
            </Heading>
            <Heading size={5} caps lineHeight={1} textColor="badgerBlack" margin="20px 0">
              Cohabiting + self sufficient
            </Heading>
            <Image src={images.componentStructure} />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps fit lineHeight={1} textColor="badgerRed">
              Component (Class)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/class.example")}
              margin="40px auto 0"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps fit lineHeight={1} textColor="badgerRed">
              Component (Functional)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/stateless.example")}
              margin="40px auto 0"
            />
          </Slide>


          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={1} fit lineHeight={1} textColor="badgerRed">
              COMPONENT (createClass)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/createclass.example")}
              margin="40px auto 0"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={4} caps lineHeight={1} textColor="badgerRed">
              Functional Components
            </Heading>
            <Heading size={4} caps lineHeight={1} textColor="badgerRed">
               >
            </Heading>
            <Heading size={4} caps lineHeight={1} textColor="badgerRed">
              Class Components
            </Heading>
            <Heading size={4} caps lineHeight={1} textColor="badgerRed">
               > > >
            </Heading>
            <Heading size={4} caps lineHeight={1} textColor="badgerRed">
              createClass Components
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={1} fit caps lineHeight={1} textColor="badgerRed">
              Styles
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles
            </Heading>
            <Heading size={5} caps lineHeight={1} textColor="badgerBlack">
              Styles are <em>hard</em>
            </Heading>
            <List>
              <Appear>
                <ListItem>Browser differences</ListItem>
              </Appear>
              <Appear>
                <ListItem>Viewport differences</ListItem>
              </Appear>
              <Appear>
                <ListItem>Performance considerations</ListItem>
              </Appear>
              <Appear>
                <ListItem>Naming conflicts</ListItem>
              </Appear>
              <Appear>
                <ListItem>Cascading nature</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles
            </Heading>
            <Heading size={5} caps lineHeight={1} textColor="badgerBlack">
              {"Don't care about stylesheet language"}
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.lessLogo} width="95%" margin="50% 0 0 0"/>
              </Fill>
              <Fill>
                <Image src={images.css3Logo} width="95%" margin="3px 0 0 0"/>
              </Fill>
              <Fill>
                <Image src={images.sassLogo} width="95%" margin="30% 0 0 0"/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles
            </Heading>
            <Heading size={3} caps lineHeight={1} textColor="badgerBlack">
              BEM
              <Layout>
                <Fill>
                  <Layout>
                    <Fit>
                      <Heading size={4} bold textColor="badgerRed" margin="0 0 0 10px">B</Heading>
                    </Fit>
                    <Fit>
                      <Heading size={4} textColor="badgerBlack" margin="0 10px 0 0">lock</Heading>
                    </Fit>
                  </Layout>
                </Fill>
                <Fill>
                  <Layout>
                    <Fit>
                      <Heading size={4} bold textColor="badgerRed" margin="0 0 0 10px">E</Heading>
                    </Fit>
                    <Fit>
                      <Heading size={4} textColor="badgerBlack" margin="0 10px 0 0">lement</Heading>
                    </Fit>
                  </Layout>
                </Fill>
                <Fill>
                <Layout>
                  <Fit>
                    <Heading size={4} bold textColor="badgerRed" margin="0 0 0 10px">M</Heading>
                  </Fit>
                  <Fit>
                    <Heading size={4} textColor="badgerBlack" margin="0 10px 0 0">odifier</Heading>
                  </Fit>
                </Layout>
                </Fill>
              </Layout>
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles (BEM)
            </Heading>
            <Heading size={4} textColor="badgerBlack" margin="20px 10px 10px 10px">React</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/bem-html.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles (BEM)
            </Heading>
            <Heading size={4} textColor="badgerBlack" margin="40px 10px 10px 10px">CSS</Heading>
            <CodePane
              lang="css"
              source={require("raw!../assets/bem-css.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles
            </Heading>
            <Heading size={3} caps lineHeight={1} textColor="badgerBlack">
              CSS Modules
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles (CSS Modules)
            </Heading>
            <Heading size={4} textColor="badgerBlack" margin="20px 10px 10px 10px">React</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/css-modules-js.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles (CSS Modules)
            </Heading>
            <Heading size={4} textColor="badgerBlack" margin="40px 10px 10px 10px">CSS</Heading>
            <CodePane
              lang="css"
              source={require("raw!../assets/css-modules-css.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles (CSS Modules)
            </Heading>
            <Heading size={4} textColor="badgerBlack" margin="40px 10px 10px 10px">HTML</Heading>
              <CodePane
                lang="html"
                source={require("raw!../assets/css-modules-rendered.example")}
                margin="20px auto"
              />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              Styles
            </Heading>
            <Heading size={3} caps lineHeight={1} textColor="badgerBlack" margin="20px 0">
              CSS in JS Soon?
            </Heading>
            <Link href="https://github.com/MicheleBertoli/css-in-js">
              {"https://github.com/MicheleBertoli/css-in-js"}
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={1} fit caps lineHeight={1} textColor="badgerRed">
              Testing
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed" margin="0 0 40px 0">
              Testing
            </Heading>
            <Layout>
              <Fill>
                <Text>Mocha</Text>
                <Text>Jasmine</Text>
                <Text>Chai</Text>
                <Text>Should</Text>
                <Text>Cucumber</Text>
              </Fill>
              <Fill>
                <Text>Sinon</Text>
                <Text>Ava</Text>
                <Text>Enzyme</Text>
                <Text>Selenium</Text>
                <Text>Mockito</Text>
              </Fill>
              <Fill>
                <Text>Tape</Text>
                <Text>Karma</Text>
                <Text>Assert</Text>
                <Text>JSDOM</Text>
                <Text>PhantomJS</Text>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed" margin="0 0 40px 0">
              Testing
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.jestLogo} height="60%"/>
              </Fill>
              <Fill>
                <Heading fit textColor="badgerBlack" margin="40% 0 0 0">Enzyme</Heading>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={1} fit caps lineHeight={1} textColor="badgerRed">
              Tools
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed" margin="0 0 40px 0">
              Tools
            </Heading>
            <Layout>
              <Fill>
                <Heading size={3}>ESLint</Heading>
                <Image src={images.esLintLogo} />
              </Fill>
              <Fill>
                <Heading size={3}>AirBnB Rules</Heading>
                <Image src={images.airbnbLogo} height="80%"/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2}>React Developer Tools</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Image src={images.reactDevTools} />
          </Slide>

          <Slide transition={["slide"]} bgColor="badgerWhite">
            <Heading size={2} caps lineHeight={1} textColor="badgerRed">
              JavaScript
            </Heading>
            <Heading size={3} caps lineHeight={1} textColor="badgerBlack" margin="20px 0">
              Core strength
            </Heading>
            <Link href="https://github.com/ryanmcdermott/clean-code-javascript">
              {"https://github.com/ryanmcdermott/clean-code-javascript"}
            </Link>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
