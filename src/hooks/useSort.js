import { useEffect } from "react";


const useSort = (state, setState, arr, func) => {
    useEffect(() => {
        func();
        switch (state) {

            case "Car Type":
                console.log("Car type Chosen");
                setState([...arr].sort((a, b) => a.carType.localeCompare(b.carType))
                );
                break;
            case "Location":
                console.log("Location picked");
                setState([...arr].sort((a, b) => a.address.city.localeCompare(b.address.city))
                );
                break;
            case "Price":
                console.log("Price Picked");
                setState([...arr].sort((a, b) => a.price - b.price));
                break;
            default:
                break;
        }
    }, [state]);
    /*  useEffect(() => {
         switch (state) {
             case "None":
                 console.log("None picked");
                 setState(arr);
                 break;
             case "Car Type":
                 console.log("Car type Chosen");
                 setState((newCars) =>
                     newCars.sort((a, b) => a.carType.localeCompare(b.carType))
                 );
                 break;
             case "Location":
                 console.log("Location picked");
                 setState((newCars) =>
                     newCars.sort((a, b) => a.city.localeCompare(b.city))
                 );
                 break;
             case "Price":
                 console.log("Price Picked");
                 setState((newCars) => newCars.sort((a, b) => a.price - b.price));
                 break;
             default:
                 break;
         }
     }, [state]); */
}

export default useSort;