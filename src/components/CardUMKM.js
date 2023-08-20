const CardUMKM = ({ data, check }) => {
  return (
    <>
      <div className="rounded-[20px] h-72 overflow-hidden drop-shadow-2xl">
        <div className="w-full h-3/4">
          <img
            src={data.gambar}
            alt="card_1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="h-1/4 bg-secondary py-6 rounded-b-lg flex justify-center items-center">
          <h5 className="text-center font-medium text-[28px] text-white">{data.nama}</h5>
        </div>
      </div>
    </>
  );
};

export default CardUMKM;
