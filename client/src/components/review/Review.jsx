import { useQuery } from "@tanstack/react-query";
import "./Review.scss";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="review">
      {isLoading ? (
        "Loading!"
      ) : error ? (
        "Something Went Wrong!"
      ) : (
        <div className="user">
          <img
            className="pp"
            src={data.img || "/assets/noavatar.jpg"}
            alt="loading"
          />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}

      <div className="stars">
        {Array(review.star)
          .fill()
          .map((i) => (
            <img src="/assets/star.png" alt="loading" key={Math.random()} />
          ))}

        <span>{review.star}</span>
      </div>

      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/assets/like.png" alt="" />
        <span>Yes</span>
        <img src="/assets/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
