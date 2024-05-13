import { Link, useParams } from "react-router-dom";
import "./Message.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

    const mutation = useMutation({
      mutationFn: (message) => {
        return newRequest.post(`/messages`,message);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["messages"]);
      },
    });

      const handleSubmit = (e) => {
        e.preventDefault()
        mutation.mutate({
          conversationId : id,
          desc : e.target[0].value
        });

        e.target[0].value = ""
      };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          {" "}
          <Link to="/messages">MESSAGES</Link> {">"} FAHEEM
        </span>

        {isLoading ? (
          "loading"
        ) : error ? (
          "Somethig Went Wrong"
        ) : (
          <div className="messages">
            {data.map((m) => (
              <div
                className={m.userId === currentUser._id ? "owner item " : "item"}
                key={m._id}
              >
                <img
                  src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea placeholder="write a message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
