import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-dark text-white-50 pt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="fs-4 fw-bold text-white mb-3">
              News<span className="hub">Hub</span>
            </div>

            <p className="small text-white-50">
              Your trusted source for breaking news, in-depth analysis, and the
              latest updates from around the world.
            </p>

            <div className="mt-3 d-flex gap-2">
              <Social link="/" title="Facebook" logo="bi-facebook" />
              <Social link="/" title="Twitter" logo="bi-twitter" />
              <Social link="/" title="Instgram" logo="bi-instagram" />
              <Social link="/" title="Youtube" logo="bi-youtube" />
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="text-white fw-semibold fs-6 mb-3">Categories</h5>

            <ul className="list-unstyled ">
              <Footcat href="/World" title="World" />
              <Footcat href="/Science" title="Science" />
              <Footcat href="/Business" title="Business" />
              <Footcat href="/Technology" title="Technology" />
              <Footcat href="/Sports" title="Sports" />
              <Footcat href="/Entertainment" title="Entertainment" />
              <Footcat href="/Health" title="Health" />
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="text-white fw-semibold fs-6 mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <Quicklinks title="About Us" />
              <Quicklinks title="Contact Us" />
              <Quicklinks title="Privacy Policy" />
              <Quicklinks title="Terms of Use" />
              <Quicklinks title="Advertise" />
            </ul>
          </div>

          <NewsletterForm />
        </div>

        <hr className="mt-5 border-secondary-subtle opacity-25" />

        <div className="text-center small text-white-50 py-3">
          © 2026 NewsHub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function Footcat(props) {
  return (
    <li className="mb-2">
      <Link href={`/Category${props.href}`} className="footlink">
        {props.title}
      </Link>
    </li>
  );
}

function Quicklinks(props) {
  return (
    <li className="mb-2">
      <Link href="/" className="footlink">
        {props.title}
      </Link>
    </li>
  );
}
function Social(props) {
  return (
    <a
      href={props.link}
      className="btn btn-sm btn-secondary rounded-circle d-flex align-items-center justify-content-center social"
      target="/blank"
      aria-label={props.title}
    >
      <i className={`bi ${props.logo}`}></i>
    </a>
  );
}
