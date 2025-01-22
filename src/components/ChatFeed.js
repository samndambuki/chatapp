//fetches chat rooms from chats table in database
//displays list of chats
//chatFeed is a functional component
const chatFeed = ({ setActiveChat }) => {
  const [chats, setChats] = useState([]);
  //runs when the component is mounted
  useEffect(() => {
    //fetches all chats from the chats table
    const fetchChats = async () => {
      const { data, error } = await supabase.from("chats").select("*");
      if (error) console.error("Error fetching chats", error);
      else setChats(data);
    };
    fetchChats();
    //real time updates for chats
  });
};
