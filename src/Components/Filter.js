import React from "react";

export default function Filter(props) {
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    fetch("https://tasty.p.rapidapi.com/tags/list", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "3eda0bbd97msh60a04f4e64d7443p15e1bejsnd5b5eb2351e1",
      },
    })
      .then((res) => res.json())
      .then((data) => setTags(data.results))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <select
        id="filter"
        onChange={(event) => props.filterSelected(event, event.target.value)}
      >
        <option value="">Select</option>
        {tags.map((x) => (
          <option value={x.name}>{x.display_name}</option>
        ))}
      </select>
    </div>
  );
}
