import Header from "../../Header";
import Footer from "../../Footer";

async function getHealthNews() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=12&apiKey=50c25ce81659402cbaca82874d6e10aa",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await response.json();

  return data.articles;
}

export default async function Health() {
  const articles = await getHealthNews();

  return (
    <main>
      <Header />

      <div className="container py-5">
        <section className="mb-4">
          <h1 className="fw-bold">Health News</h1>

          <p className="text-muted">
            Stay updated with the latest health, wellness, and medical news.
          </p>
        </section>

        <section>
          <div className="row g-4">
            {articles.map((article, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <a
                  href={article.url}
                  target="_blank"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100">
                    <img
                      src={article.urlToImage || "/images/news-placeholder.jpg"}
                      className="card-img-top descimg"
                      alt={article.title}
                    />

                    <div className="card-body">
                      <small className="text-danger fw-bold">
                        {article.source.name}
                      </small>

                      <h5 className="fw-bold mt-2">{article.title}</h5>

                      <p className="text-muted">{article.description}</p>

                      <small className="text-muted">
                        {formatDate(article.publishedAt)}
                      </small>
                    </div>
                  </div>
                </a>
              </div>
            ))}
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
