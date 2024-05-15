import { Slider } from "infinite-react-carousel";
import { useQuery } from "@tanstack/react-query";
import "./Gig.scss";
import newRequest from "../../utils/newRequest";
import { useParams , Link } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";

const Gig = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) => {
        return res.data;
      }),
    enabled: !userId,
  });
  return (
    <div className="gig">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadbrumbs">
              FIVER {">"} GRAPHICS & DESIGN {">"}{" "}
            </span>
            <h1>{data.title}</h1>

            {isLoadingUser ? (
              "loading..."
            ) : errorUser ? (
              "Somethig Went Wrong"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "/assets/noavatar.jpg"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/assets/star.png" alt="" key={i} />
                      ))}

                    <span>
                      {" "}
                      {Math.round(data.totalStars / data.starNumber)}
                    </span>
                  </div>
                )}
              </div>
            )}

            <Slider slideToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img src={img} key={img} alt="tett" />
              ))}
            </Slider>
            <h2>About this gig</h2>
            <p>{data.desc}</p>

            {isLoadingUser ? (
              "loading..."
            ) : error ? (
              "Somethig Went Wrong"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/assets/noavatar.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/assets/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {" "}
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}

            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/assets/clock.png" alt="" />
                <span>{data.deliveryDate} days Delivery</span>
              </div>

              <div className="item">
                <img src="/assets/recycle.png" alt="" />
                <span>{data.revisionNumber} Revision</span>
              </div>
            </div>

            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/assets/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
