const CardDetail = ({ gambar, judul, deskripsi }) => {
  // Menyingkat teks
  const shortText = (deskripsi) => {
    const splitText = deskripsi.split(" ", 8);
    const result = splitText.join(" ") + " ...";
    return result;
  };
  return (
    <>
      <div className="w-full h-full rounded-[20px] overflow-hidden drop-shadow-xl">
        <div className="w-full h-64 ">
          <img
            src={gambar}
            alt="card_1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full  bg-primary px-4 py-4 flex flex-col text-white rounded-[20px] relative -top-4">
          <h4 className="font-semibold text-lg mb-2">{judul}</h4>
          <p className="">{shortText(deskripsi)}</p>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
