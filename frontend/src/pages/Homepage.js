import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "../styles/Homepage.css";

const Homepage = () => {
  const [images, setImages] = useState([]);
  const API_KEY = "ZfqJtGBHxpx90MAyDqurlOsWeIuf9o4N7HhXoG213Lug7KdDVgJx7Bh6";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const SEARCH_QUERY = "fashion store modern";
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${SEARCH_QUERY}&per_page=10`,
          { headers: { Authorization: API_KEY } }
        );

        if (response.data.photos.length > 0) {
          setImages(response.data.photos);
        } else {
          console.warn("⚠ No se encontraron imágenes.");
        }
      } catch (error) {
        console.error("❌ Error al obtener imágenes de Pexels:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="homepage-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a Huarpe Indumentaria</h1>
          <p>Descubre las últimas tendencias en moda</p>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="section-title">Productos Destacados</h2>
        {images.length > 0 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 }
            }}
            modules={[Pagination, Autoplay]}
            className="swiper-container"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={image.src.medium} alt={image.photographer} />
                  </div>
                  <div className="product-info">
                    <h3>Colección Nueva</h3>
                    <p>Descubre más</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="loading-message">
            <p>Cargando productos destacados...</p>
          </div>
        )}
      </section>

      <section className="categories-section">
        <h2 className="section-title">Nuestras Categorías</h2>
        <div className="categories-grid">
          <Link to="/hombre" className="category-card">
            <h3>Hombre</h3>
            <p>Explora nuestra colección masculina</p>
          </Link>
          <Link to="/mujer" className="category-card">
            <h3>Mujer</h3>
            <p>Descubre las últimas tendencias</p>
          </Link>
        </div>
      </section>

      <a href="https://wa.me/123456789" className="whatsapp-floating" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default Homepage;

