import arrowImage from "../../images/arrow.png";

const FaqItems = (props) => {
  const question = props.data.ques;
  const answer = props.data.ans;
  const showItem = props.showItem;
  const setShowItem = props.setShowItem;
  const closeShowItem = props.closeShowItem;

  const handleClick = () => {
    if (!showItem) setShowItem();
    else closeShowItem();
  };

  return (
    <div className=" relative rounded-2xl  bg-slate-200 my-4  mx-auto w-10/12  flex  justify-between">
      <div className="py-8  px-12 font-bold text-lg">
        {question}

        {/*  arrow - image */}
        <img
          alt="logo"
          onClick={handleClick}
          className="cursor-pointer absolute top-5 right-0  w-12 h-12 rounded-full rotate-90 "
          src={arrowImage}
        ></img>

        {/*  answer section */}
        {showItem && (
          <div className="my-4 py-4 border-t border-black">{answer}</div>
        )}
      </div>
    </div>
  );
};

export default FaqItems;
