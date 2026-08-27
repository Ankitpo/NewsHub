import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

async function getNews() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=50c25ce81659402cbaca82874d6e10aa",
  );

  const data = await response.json();

  return data.articles;
}

export default async function Home() {
  const articles = await getNews();

  return (
    <main>
      <Header />

      <div className="container">
        <section className="mt-3">
          <div className="border rounded p-2 d-flex align-items-center gap-2">
            <span className="badge bg-danger">BREAKING NEWS</span>

            <p className="mb-0">{articles[0].title}</p>
          </div>
        </section>

        <section className="py-4">
          <div className="row g-4">
            {/* Main News */}

            <div className="col-lg-8">
              <a
                href={articles[0].url}
                target="_blank"
                className="text-decoration-none text-dark"
              >
                <div className="card">
                  <img
                    src={
                      articles[0].urlToImage || "/images/news-placeholder.jpg"
                    }
                    className="card-img-top"
                    alt={articles[0].title}
                    style={{
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <small className="text-danger fw-bold">
                      {articles[0].source.name}
                    </small>

                    <h2 className="fw-bold mt-2">{articles[0].title}</h2>

                    <p>{articles[0].description}</p>

                    <small className="text-muted">
                      {formatDate(articles[0].publishedAt)}
                    </small>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4">
              <div className="d-flex flex-column gap-3">
                {articles.map((article, index) => {
                  if (index >= 1 && index <= 3) {
                    return (
                      <a
                        href={article.url}
                        target="_blank"
                        className="text-decoration-none text-dark"
                        key={index}
                      >
                        <div className="card">
                          <div className="row">
                            <div className="col-5">
                              <img
                                src={
                                  article.urlToImage ||
                                  "/images/news-placeholder.jpg"
                                }
                                className="img-fluid rounded-start"
                                alt={article.title}
                                style={{
                                  height: "120px",
                                  width: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>

                            <div className="col-7">
                              <div className="p-2">
                                <small className="text-danger fw-bold">
                                  {article.source.name}
                                </small>

                                <h6 className="fw-bold mt-1">
                                  {article.title}
                                </h6>

                                <small className="text-muted">
                                  {formatDate(article.publishedAt)}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold">Top Stories</h4>

            <Link
              href="/categories"
              className="text-danger text-decoration-none"
            >
              View All
            </Link>
          </div>

          <div className="row g-4">
            {articles.map((article, index) => {
              if (index >= 4 && index <= 7) {
                return (
                  <div className="col-sm-6 col-lg-3" key={index}>
                    <a
                      href={article.url}
                      target="_blank"
                      className="text-decoration-none text-dark"
                    >
                      <div className="card h-100">
                        <img
                          src={
                            article.urlToImage || "/images/news-placeholder.jpg"
                          }
                          className="card-img-top"
                          alt={article.title}
                          style={{
                            height: "160px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="card-body">
                          <small className="text-danger fw-bold">
                            {article.source.name}
                          </small>

                          <h6 className="fw-bold mt-2">{article.title}</h6>

                          <p className="small text-muted">
                            {article.description}
                          </p>

                          <small className="text-muted">
                            {formatDate(article.publishedAt)}
                          </small>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </section>

        <section className="pb-5">
          <div className="row g-4">
            {/* Trending */}

            <div className="col-lg-4">
              <h4 className="fw-bold mb-3">Trending Now</h4>

              <div className="border rounded p-3">
                {articles.map((article, index) => {
                  if (index >= 8 && index <= 10) {
                    return (
                      <a
                        href={article.url}
                        target="_blank"
                        className="text-decoration-none text-dark"
                        key={index}
                      >
                        <div className="d-flex gap-3 py-3 border-bottom">
                          <span className="text-danger fw-bold fs-5">
                            0{index - 7}
                          </span>

                          <div>
                            <h6 className="fw-bold">{article.title}</h6>

                            <small className="text-muted">
                              {formatDate(article.publishedAt)}
                            </small>
                          </div>
                        </div>
                      </a>
                    );
                  }

                  return null;
                })}
              </div>
            </div>

            <div className="col-lg-5">
              <h4 className="fw-bold mb-3">Featured</h4>

              <a
                href={articles[11].url}
                target="_blank"
                className="text-decoration-none text-dark"
              >
                <div className="card">
                  <img
                    src={
                      articles[11].urlToImage || "/images/news-placeholder.jpg"
                    }
                    className="card-img-top"
                    alt={articles[11].title}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <small className="text-danger fw-bold">
                      {articles[11].source.name}
                    </small>

                    <h4 className="fw-bold mt-2">{articles[11].title}</h4>

                    <p>{articles[11].description}</p>

                    <small className="text-muted">
                      {formatDate(articles[11].publishedAt)}
                    </small>
                  </div>
                </div>
              </a>
            </div>

            {/* Newsletter */}

            <div className="col-lg-3">
              <div className="border rounded p-4 h-100">
                <h5 className="fw-bold">Stay Updated</h5>

                <p className="text-muted">
                  Get the latest news delivered to your inbox.
                </p>

                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter your email"
                />
                <button className="btn btn-danger w-100">Subscribe</button>

                <hr />

                <h6 className="fw-bold">Follow Us</h6>

                <div className="d-flex gap-2">
                  <button className="btn btn-primary">
                    <i className="bi bi-facebook"></i>
                  </button>

                  <button className="btn btn-info text-white">
                    <i className="bi bi-twitter"></i>
                  </button>

                  <button className="btn btn-danger">
                    <i className="bi bi-youtube"></i>
                  </button>

                  <button className="btn btn-dark">
                    <i className="bi bi-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

function formatDate(date) {
  if (!date) {
    return "";
  }

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
