import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

function Products() {
  const scrollRef = useRef();

  const products = [
    {
      id: 1,
      name: "Ergo Chair",
      image: "/chair.jpg",
      category: "Seating",
      price: "₹14,999",
    },
    {
      id: 2,
      name: "Standing Desk",
      image: "/table.jpg",
      category: "Workspace",
      price: "₹24,999",
    },
    {
      id: 3,
      name: "Luxury Sofa",
      image: "/sofa.jpg",
      category: "Comfort",
      price: "₹29,999",
    },
    {
      id: 4,
      name: "Functional Chair",
      image: "/functionalchair.jpg",
      category: "Ergonomic",
      price: "₹18,999",
    },
    {
      id: 5,
      name: "Relaxation Chair",
      image: "/relaxchair.jpg",
      category: "Wellness",
      price: "₹16,499",
    },
  ];

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="products-section">
      <div className="products-header">
        <span>OUR COLLECTION</span>
        <h2>Explore Our Premium Products</h2>
        <p>
          Designed to elevate comfort, productivity, and workspace aesthetics.
        </p>
      </div>

      <div className="products-controls">
        <button onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>
        <button onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>

      <div className="products-grid" ref={scrollRef}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
              <span className="product-tag">{product.category}</span>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>

              <button>
                View Product <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;