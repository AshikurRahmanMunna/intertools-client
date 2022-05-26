import React from "react";

const MyPortfolio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="bg-secondary mb-3 mt-20 rounded-2xl p-10">
          <h2 className="text-5xl">Name: Ashikur Rahman Munna</h2>
          <h4 className="text-2xl">Email: ashikurrahmanmunna3@gmail.com</h4>
          <p>
            Educational Background: I am a student of Inter 1st year. My College
            Name is Narayanganj Technical School And College. My
            Trade(Technology) is Automotive. My P.E.C result is 3.92. My J.S.C
            result is 4.36. My class 9 result (Technical board have a board exam
            in class 9) is 4.82. My S.S.C result is 4.75.
          </p>
        </div>
        <div className="bg-secondary mt-5 p-10 rounded-2xl">
          <h3 className="text-4xl">
            List of <span className="text-primary">Technologies</span>
          </h3>
          <ol className="list-decimal">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Firebase Authentication</li>
            <li>Node JS.</li>
            <li>MongoDB</li>
          </ol>
          <h4 className="text-3xl mt-4">Projects</h4>
          <p>
            Groinventory:{" "}
            <a className="underline" href="https://groinventoy.web.app/">
              https://groinventoy.web.app/
            </a>
          </p>
          <p>
            Independent Service Provider:{" "}
            <a className="underline" href="https://independent-service-prov-ff540.web.app/">
            https://independent-service-prov-ff540.web.app/
            </a>
          </p>
          <p>
            Cloth Analysis:{" "}
            <a className="underline" href="https://cloth-analysis.netlify.app/">
            https://cloth-analysis.netlify.app/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
