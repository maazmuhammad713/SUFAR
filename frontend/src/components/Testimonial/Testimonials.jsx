import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpeg";
import ava02 from "../../assets/images/hammad.jpg";
import ava03 from "../../assets/images/me.jpg";
import ava04 from "../../assets/images/abdullah.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Our website would not have been possible without the guidance and
          expertise of our dedicated supervisor, <b>Prof. Saleem Zubair</b>.
          With his extensive experience he played a crucial role in ensuring
          that our website developed to the highest standards.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Prof. Saleem Zubair</h6>
            <p>Project Supervisor</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          As the team leader of our website, he has been instrumental in
          bringing our vision to life. With his exceptional leadership skills
          and extensive knowledge of development, he has been a driving force
          behind our success.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Maaz Ghazanfar</h6>
            <p>Team Leader</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          <b>Hammad</b> is also a great team player, always willing to lend a
          hand and support his colleagues. He is a pleasure to work with, and a
          talented problem solver, always coming up with innovative solutions to
          the challenges we face.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Hammad Ghazanfar</h6>
            <p>Team Member</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          <b>Abdullah's</b> keen eye for detail and commitment to quality has
          been crucial in ensuring that our website not only looks great, but
          also performs seamlessly. He has been instrumental in designing the
          key components of our website.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Abdullah Tariq</h6>
            <p>Team Member</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
