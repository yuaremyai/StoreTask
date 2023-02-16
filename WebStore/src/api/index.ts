import { IProduct } from "../types";

export function saveToDB(product: IProduct) {
  fetch("http://127.0.0.1:5000/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return true;
      },
      (error) => {
        return false;
      }
    );
}

export function getProducts(setResponse: (value: IProduct[]) => void) {
  fetch("http://127.0.0.1:5000/get")
    .then((res) => res.json())
    .then(
      (result: IProduct[]) => {
        setResponse(result);
      },
      (error) => {
        console.log(error);
      }
    );
}

export function deleteFromDB(id: number) {
    fetch("http://127.0.0.1:5000/delete", {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({'id': id}),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            return true;
          },
          (error) => {
            return false;
          }
        );
}