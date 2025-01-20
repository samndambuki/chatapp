import "./App.css";
import { Session } from "@talkjs/react";
import { Chatbox } from "@talkjs/react";

function App() {
  return (
    <div className="App">
      <Session appId="tYkNJgM7" userId="sample_user_alice"></Session>
      <Chatbox
        conversationId="sample_group_chat"
        style={{ width: "100%", height: "500px" }}
      ></Chatbox>
    </div>
  );
}
export default App;
