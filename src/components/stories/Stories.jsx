import "./stories.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const [file, setFile] = useState(null);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["stories"],
    queryFn: () =>
      makeRequest.get("/stories").then(res => {
        return res.data;
      }),
  });

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: newStory => {
      return makeRequest.post("/stories", newStory);
    },

    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["stories"]);
    },
  });

  const handleAdd = async e => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ img: imgUrl });
    setFile(null);
  };

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <input
          type="file"
          id="sfile"
          style={{ display: "none" }}
          onChange={e => setFile(e.target.files[0])}
        />
        <label htmlFor="sfile">
          <span style={{ cursor: "pointer" }}>{currentUser.name}</span>
        </label>
        <button onClick={handleAdd}>+</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading Stories"
        : data.map(story => (
            <div className="story" key={story.id}>
              <img src={"/upload/" + story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  );
};

export default Stories;
