// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {

    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

     console.log({nodes, edges});

const handleSubmit = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nodes,
        edges,
      }),
    });

    const data = await response.json();
 
     console.log({data});

    alert(
      `Pipeline Analysis:\n\n` +
      `Nodes: ${data.num_nodes}\n` +
      `Edges: ${data.num_edges}\n` +
      `Is DAG: ${data.is_dag ? "Yes" : "No"}`
    );
  } catch (err) {
    alert("Failed to analyze pipeline");
    console.error(err);
  }
};


    return (
        <div onClick={handleSubmit} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit">Submit</button>
        </div>
    );
}
