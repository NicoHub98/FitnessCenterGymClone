import "react-toastify/dist/ReactToastify.css"
import ButtonsTable from "./ButtonsTable"

const Table = ({ tHeader, tBody, setTBody, type, error, setTError }) => {
  const providersName = tBody?.map(({ provider }) => provider?.name)
  return (
    <>
      <div className="w-full overflow-x-scroll scroll-smooth h-full rounded-lg">
        <table className="table table-pin-rows">
          <thead>
            <tr className="grow bg-pallete-blue text-pallete-white">
              {tHeader &&
                tHeader.map((item, i) => (
                  <th key={i}>
                    <p className="font-PoppinsMedium">{item}</p>
                  </th>
                ))}
              <th>
                <p className="pr-14 text-start font-PoppinsMedium">Acción</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tBody.length >= 1 ? (
              tBody.map((data, i) => {
                return (
                  <tr key={i}>
                    {Object.values(data).map((item, subI) => {
                      // console.log("TABLE-ITEMS:", item, "INDEX:", subI)
                      if (type === "provider") {
                        if (subI !== 0 && subI !== 6 && subI !== 7 && subI !== 8) {
                          return (
                            <td key={subI}>
                              <div className="flex flex-row gap-2">
                                <p className="font-PoppinsRegular whitespace-nowrap">
                                  {subI !== 9 ? item : providersName[i]}
                                </p>
                              </div>
                            </td>
                          );
                        }
                      } else if (type === "element-client") {
                        if (subI !== 0 && subI !== 6 && subI !== 8) {
                          return (
                            <td key={subI}>
                              <div className="flex flex-row gap-2">
                                <p className="font-PoppinsRegular whitespace-nowrap">
                                {subI !== 7 ? item : providersName[i]}
                                </p>
                              </div>
                            </td>
                          );
                        }
                      } else if (subI !== 0 && subI !== 7 && subI !== 8) {
                        return (
                          <td key={subI}>
                            <div className="flex flex-row gap-2">
                              <p className="font-PoppinsRegular whitespace-nowrap">
                                {item}
                              </p>
                            </div>
                          </td>
                        );
                      }
                    })}
                    <ButtonsTable
                      id={data.id}
                      tBody={tBody}
                      setTBody={setTBody}
                      type={type}
                      setTError={setTError}
                    />
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={tHeader.length + 1} className="text-center">

                  <p className=' text-lg font-PoppinsRegular text-pallete-grey'>
                    {error ? error : "No hay información disponible"}
                  </p>
                </td >
              </tr >

            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
