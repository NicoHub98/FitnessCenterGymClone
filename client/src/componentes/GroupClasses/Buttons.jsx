export const Buttons = ({ onChangeFilter  }) => {
  return (
    <div className="flex flex-col">
      <button
         onClick={() => onChangeFilter('Mañana')}
        value="Mañana"
        className="font-[Poppins] btn-primary m-[1rem] px-5 bg-[#1A1363] rounded-lg mb-2 w-40"
      >
        Mañana
      </button>

      <button
         onClick={() => onChangeFilter('Tarde')}
        value="Tarde"
        className="font-[Poppins] btn-primary m-[1rem] px-5 bg-[#1A1363] rounded-lg mb-2 w-40"
      >
        Tarde
      </button>

      <button
         onClick={() => onChangeFilter('Noche')}
        value="Noche"
        className="font-[Poppins] btn-primary m-[1rem] px-5 bg-[#1A1363] rounded-lg mb-2 w-40"
      >
        Noche
      </button>
    </div>
  );
};