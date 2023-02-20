import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartState } from "../../context/Auth";
const Rating = ({ onClick, rating }) => {
  const {
    state: { product },
    dispatch,
  } = CartState();
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="mx-0 d-flex align-items-center rating justify-content-around gap-1 "
          onClick={() => onClick(i)}
        >
          { rating > i ? (
            <AiFillStar className="text-warning" fontSize="20px" />
          ) : (
            <AiOutlineStar className="text-warning" fontSize="20px" />
          )}
              {i + 1} и выше
        </span>
      ))}
    </>
  );
};

export default Rating;
