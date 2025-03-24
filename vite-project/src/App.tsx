import "./App.css";

function App() {
  return (
    <>
      {/* Navigation bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#interests">Interests</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </nav>

      <div className="container">
        {/* Name and --> */}
        <div className="profile-flex">
          <div>
            <h1>
              {/* TODO: below `data-type` with custom phrases (line 30) --> */}
              <a
                className="typewrite"
                data-period="2000"
                data-type='[ "Heyo peeps, I&#39;m Will.", "I love to learn.", "William De Rocco :)" ]'
              >
                <span className="wrap"></span>
              </a>
            </h1>
            <ul>
              {/* TODO: with your info --> */}
              <li>ClassNaclassName of 2025</li>
              <li>B.A. in Computer Science, Minor in Economics</li>
              <li>Teaching Assistant for cs412 (Full-Stack Applications)</li>
            </ul>
          </div>

          {/* TODO: with your info --> */}
          <div className="profile tilt">
            <a
              href="https://github.com/wderocco8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="profile-img"
                src="/images/profile/profile.jpeg"
                alt="profile"
              />
            </a>
          </div>
        </div>

        <div className="content-separator"></div>

        {/* Short Bio */}
        {/* TODO: with your info --> */}
        <h2 id="about">About me</h2>
        <p>
          Hello there, my name is Will, and I'm originally from Manhattan,
          although I have lived in a few other cities, my family has found our
          way back there yet again! Currently, I'm a senior and aspiring
          software engineer studying at Boston University.
        </p>
        <p>
          I absolutely love learning new skills and challenging myself in
          different aspects. To learn more about what I've been working on, feel
          free to check out my
          <a href="https://github.com/wderocco8">GitHub</a> 😁.
        </p>

        <div className="content-separator"></div>

        {/* Projects -->
       {/* TODO: with your info --> */}
        <h2 id="projects">Projects</h2>
        <div className="projects-container">
          {/* project 1 */}
          <a
            href="https://github.com/wderocco8/Grub-Gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link tilt tilt-small"
          >
            <div className="project">
              <img
                src="/images/projects/project1.jpeg"
                alt="Grub Gallery"
              />
              <h3>Grub Gallery</h3>
              <p>
                Grub Gallery is a dynamic web application built using the MERN
                stack, integrating Google OAuth, Spoonacular API, and Google
                Calendar API. This project allows users to discover and
                personalize dishes and recipes effortlessly.
              </p>
            </div>
          </a>

          {/* project 2 */}
          <a
            href="https://github.com/wderocco8/ZipSurf"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link tilt tilt-small"
          >
            <div className="project">
              <img src="/images/projects/project2.jpeg" alt="ZipSurf" />
              <h3>ZipSurf</h3>
              <p>
                ZipSurf is a React based web application designed to enabling
                users to create, save, delete, and export shortened URLs
              </p>
            </div>
          </a>
          {/* Add more blocks as needed --> */}
        </div>

        <div className="content-separator"></div>

        {/* Activites and --> */}
        {/* TODO: with your info --> */}
        <h2 id="interests">How I spend my free time?</h2>
        <div className="interests-table-container">
          <table className="interests-table">
            {/* activity 1 */}
            <tr>
              <td>
                <img
                  src="/images/activities/activity1.jpeg"
                  alt="coding with David Malin at HackHarvard"
                />
              </td>
              <td>
                <h3>Coding</h3>
                <p>
                  Even though we have to code constantly for className, this is
                  something that I genuinely enjoy learning in my free time.
                </p>
                <p>
                  Especially for when it comes to
                  <strong>web-development</strong>, where the creative
                  opportunities are literally endless, I find myself spending
                  hours going down rabbit holes of formative exploration.
                </p>
              </td>
              <td>
                <h3>Quicklinks</h3>
                <ul>
                  <li>
                    <a
                      href="https://github.com/whyphi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhyPhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://grub-gallery.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GrubGallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/wderocco8/ZipSurf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ZipSurf
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/alexjmiller5/BU-GCalSync"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BU-GCalSync
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            {/* activity 2 */}
            <tr>
              <td>
                <img
                  src="/images/activities/activity2.jpeg"
                  alt="rock climbing at FitRec"
                />
              </td>
              <td>
                <h3>Rock Climbings</h3>
                <p>
                  I started rock climbing about 2 years ago, and since then, it
                  has been nothing short of amazing (maybe even
                  <em>addicting</em>).
                </p>
                <p>
                  I love the challenge of finding the optimal "beta" through a
                  problem, and pushing your body to it's limit.
                </p>
              </td>
              <td>
                <h3>Quicklinks</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.bu.edu/fitrec/what-we-offer/outdoor-programs/rock-climbing/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fitrec Climbing Wall
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            {/* activity 3 */}
            <tr>
              <td>
                <img
                  src="/images/activities/activity3.jpeg"
                  alt="tabling with PCT (Phi Chi Theta)"
                />
              </td>
              <td>
                <h3>BU Phi Chi Theta (PCT)</h3>
                <p>
                  I joined PCT (a professional business fraternity) my very
                  first semesert at BU. It was probably one of the most
                  impactfuly decsions I've made in terms of the
                  <strong>friends</strong> made, <strong>skills</strong>{" "}
                  acquired, and abundance of unique experiences. (Feel free to
                  check out our website WhyPhi 😜)
                </p>
              </td>
              <td>
                <h3>Quicklinks</h3>
                <ul>
                  <li>
                    <a
                      href="https://bupct.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BUPCT
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/whyphi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhyPhi
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            {/* activity 4 */}
            <tr>
              <td>
                <img
                  src="/images/activities/activity4.jpeg"
                  alt="cooking with my mom"
                />
              </td>
              <td>
                <h3>Cooking</h3>
                <p>
                  Growing up, I always had the opportunity to watch my mom cook,
                  and even help out in the kitchen. Once my parents started
                  working more, I ended up taking more responsibility for
                  cooking meals for the whole family.
                </p>
                <p>
                  This slowly grew into a passion, and now is something that I
                  spend a lot of free time doing for fun!
                </p>
              </td>
              <td>
                <h3>Quicklinks</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.babi.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Babish Culinary Universe
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cooking.nytimes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NYT Cooking
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            {/* Add more table rows as needed --> */}
          </table>
        </div>

        <div className="content-separator"></div>

        {/* connect Section */}
        {/* TODO: with your info --> */}
        <h2 id="connect">Let's Connect</h2>
        <div className="connect-container">
          <p>Feel free to reach out through any of these platforms:</p>
          <ul className="connect-links">
            <li>
              <a
                href="mailto:wderocco@bu.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/wderocco8"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/william-derocco"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
