import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="sub-footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M8.923 12c0-1.699 1.377-3.076 3.077-3.076s3.078 1.376 3.078 3.076-1.379 3.077-3.078 3.077-3.077-1.378-3.077-3.077zm7.946-.686c.033.225.054.453.054.686 0 2.72-2.204 4.923-4.922 4.923s-4.923-2.204-4.923-4.923c0-.233.021-.461.054-.686.031-.221.075-.437.134-.647h-1.266v6.719c0 .339.275.614.616.614h10.769c.34 0 .615-.275.615-.615v-6.719h-1.265c.058.211.102.427.134.648zm.515-5.314h-1.449c-.341 0-.615.275-.615.615v1.45c0 .34.274.616.615.616h1.449c.34 0 .616-.276.616-.616v-1.45c0-.34-.275-.615-.616-.615zm6.616-1v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 .846c0-1.019-.826-1.846-1.846-1.846h-12.308c-1.019 0-1.846.827-1.846 1.846v12.307c0 1.02.827 1.847 1.846 1.847h12.309c1.019 0 1.845-.827 1.845-1.847v-12.307z" />
        </svg>
      </div>
      <div className="footer">
        <div className="d-flex">
          <div className="footer-left">
            <p>About Us</p>
            <h4 className="about-us">
              Married on September 2nd, 2019 it was a constant question of what
              we would eat every night. In response to that question, Shanda
              created this little project as a way to capture thier favorite
              recipes and finally pick what they want for dinner.
              <span> Subscribe now</span> for full access.
            </h4>
          </div>
          <div className="footer-right">
            <p>Learn More</p>
            <h6>Our Cooks</h6>
            <h6>See Our Features</h6>
            <h6>FAQ</h6>
            <h6>Tools for Saving</h6>
            <h6>NYTimes.com/food</h6>
          </div>
          <div className="footer-right">
            <p>Learn More</p>
            <h6>Our Cooks</h6>
            <h6>See Our Features</h6>
            <h6>FAQ</h6>
            <h6>Tools for Saving</h6>
            <h6>NYTimes.com/food</h6>
          </div>
        </div>
        <div className="copywrite">??2022 Shanda Pinell | A Pinell Company</div>
      </div>
    </div>
  );
}
