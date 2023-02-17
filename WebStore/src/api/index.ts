import { IComment, IProduct } from "../types";


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
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
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

export function sendComment(id: number, comment: IComment) {
  fetch("http://127.0.0.1:5000/addComment", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, data: comment }),
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

export function getComments(
  id: number,
  setResponse: (value: IComment[]) => void
) {
  fetch("http://127.0.0.1:5000/getComments", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
    .then((res) => res.json())
    .then(
      (result: IComment[]) => {
        setResponse(result);
      },
      (error) => {
        console.log(error);
      }
    );
}

export function deleteComment(id: number) {
  fetch("http://127.0.0.1:5000/delComment", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
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