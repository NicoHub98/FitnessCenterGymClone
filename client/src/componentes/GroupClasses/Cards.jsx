import axios from "axios";

export const Cards = ({ card }) => {
  const deleteClass = (id) => {
    axios.delete(`/api/class-group/${id}`)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      key={card.id}
      className="card w-auto  bg-[#343A40]  shadow-xl h-auto mx-auto px-5"
    >
      <button
        className="btn btn-outline btn-error mt-3 mx-auto w-14 text-xl"
        onClick={() => deleteClass(card.id)}
      >
        X
      </button>
      <div className="flex">
        <div className="avatar float-left h-[80px] mt-[25px]">
          <div className="w-24 rounded-full">
            <img src={card.img} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-[15px] text-white b">{card.name}</h2>
          <p className="text-white">
            {card.schedule} - {card.duration}
          </p>
          <div className="card-actions float-right ">
            <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">
              {card.trainer}
            </button>
            <div className="text-white text-[12px] ml-[40px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
