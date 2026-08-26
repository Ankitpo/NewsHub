import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function Category() {
  return (
    <main>
      <Header />

      <div className="container py-5">
        <h1 className="fw-bold">Categories</h1>
        <p className="text-muted mb-4">
          Explore news from around the world by category.
        </p>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <CategoryCard
            title="World"
            description="Get the latest updates on events and stories from around the globe."
            image="world.png"
            href="/Category/World"
          />

          <CategoryCard
            title="Science"
            description="Discover the latest scientific discoveries, research, space, and innovations.."
            image="science.png"
            href="/Category/Science"
          />

          <CategoryCard
            title="Business"
            description="Insights on markets, economy, companies, and financial trends."
            image="business.png"
            href="/Category/Business"
          />

          <CategoryCard
            title="Technology"
            description="Discover the latest in tech innovations, gadgets, and more."
            image="technology.png"
            href="/Category/Technology"
          />

          <CategoryCard
            title="Sports"
            description="Scores, match highlights, player news, and sports events."
            image="sports.png"
            href="/Category/Sports"
          />

          <CategoryCard
            title="Entertainment"
            description="Celebrity news, movies, music, TV shows, and more."
            image="entertainment.png"
            href="/Category/Entertainment"
          />

          <CategoryCard
            title="Health"
            description="Health tips, medical breakthroughs, and wellness advice."
            image="health.png"
            href="/Category/Health"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

function CategoryCard(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <Link href={props.href} className="text-decoration-none text-reset">
        <div className="card border rounded-100">
          <img
            src={`./images/${props.image}`}
            className="card-img-top rounded-3 categoryimg"
            alt={props.title}
          />
          <div className="card-body p-3">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text text-muted">{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
