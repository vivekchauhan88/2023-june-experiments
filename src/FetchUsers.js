import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import useFetch from "./useFetch";

function FetchUsers() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) return "Loading...";
  if (error) return error.message;

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>{theme}</button>
      {data.map((item) => {
        const itemData = Object.keys(item).map((key) => (
          <li>
            {key}: {JSON.stringify(item[key])}
          </li>
        ));

        return <ol key={item.id}>{itemData}</ol>;
      })}
    </div>
  );
}

export default FetchUsers;
