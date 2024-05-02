import { Link } from 'react-router-dom'
import './Message.scss'

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          {" "}
          <Link to="/messages">MESSAGES</Link> {">"} FAHEEM
        </span>

        <div className="messages">
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quasi aut quae autem in aliquid ea? Qui deserunt pariatur minus
              sint! Provident commodi doloremque dolore sit qui aliquam amet
              neque, tempora cumque in nostrum iste nam sapiente nihil
              cupiditate rerum quia ex totam saepe sequi ad laboriosam
              voluptates porro eveniet.
            </p>
          </div>

          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quasi aut quae autem in aliquid ea? Qui deserunt pariatur minus
              sint! Provident commodi doloremque dolore sit qui aliquam amet
              neque, tempora cumque in nostrum iste nam sapiente nihil
              cupiditate rerum quia ex totam saepe sequi ad laboriosam
              voluptates porro eveniet.
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quasi aut quae autem in aliquid ea? Qui deserunt pariatur minus
              sint! Provident commodi doloremque dolore sit qui aliquam amet
              neque, tempora cumque in nostrum iste nam sapiente nihil
              cupiditate rerum quia ex totam saepe sequi ad laboriosam
              voluptates porro eveniet.
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quasi aut quae autem in aliquid ea? Qui deserunt pariatur minus
              sint! Provident commodi doloremque dolore sit qui aliquam amet
              neque, tempora cumque in nostrum iste nam sapiente nihil
              cupiditate rerum quia ex totam saepe sequi ad laboriosam
              voluptates porro eveniet.
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quasi aut quae autem in aliquid ea? Qui deserunt pariatur minus
              sint! Provident commodi doloremque dolore sit qui aliquam amet
              neque, tempora cumque in nostrum iste nam sapiente nihil
              cupiditate rerum quia ex totam saepe sequi ad laboriosam
              voluptates porro eveniet.
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quasi aut quae autem in aliquid ea? Qui deserunt pariatur minus
              sint! Provident commodi doloremque dolore sit qui aliquam amet
              neque, tempora cumque in nostrum iste nam sapiente nihil
              cupiditate rerum quia ex totam saepe sequi ad laboriosam
              voluptates porro eveniet.
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quasi aut quae autem in aliquid ea? Qui deserunt pariatur minus
              sint! Provident commodi doloremque dolore sit qui aliquam amet
              neque, tempora cumque in nostrum iste nam sapiente nihil
              cupiditate rerum quia ex totam saepe sequi ad laboriosam
              voluptates porro eveniet.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message