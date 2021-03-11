import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Animations/Loading";

export default function Confirmation() {
  const { token } = useParams();
  const history = useHistory();

  useEffect(() => {
    document.title = `Confirmation | ${process.env.REACT_APP_BASE_TITLE}`;
    if (token) {
      fetch(`${process.env.REACT_APP_SERVER}/api/user/confirm`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast.success(data.error);
            history.push("/");
          } else {
            toast.success(data.message);
            history.push("/user/login");
          }
        });
    }
  }, []);

  return (
    <div>
      <Loading time={4} confirmation />
    </div>
  );
}
