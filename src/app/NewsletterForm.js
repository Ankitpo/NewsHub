"use client";

export default function NewsletterForm() {
  return (
    <div className="col-12 col-md-12 col-lg-3">
      <h5 className="text-white fw-semibold fs-6 mb-3">Newsletter</h5>

      <p className="small text-white-50">
        Subscribe to our newsletter and get the latest news delivered straight
        to your inbox.
      </p>

      <form className="d-flex gap-2">
        <input
          type="email"
          className="form-control form-control-sm text-black border-secondary-subtle bg-white"
          placeholder="Enter your email"
          aria-label="Email"
        />

        <button type="submit" className="btn btn-sm text-white px-3 buttonn">
          Subscribe
        </button>
      </form>
    </div>
  );
}
