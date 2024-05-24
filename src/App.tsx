import "./App.css";
import { Api } from "./api";

function App() {
  const submitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    const { name, job } = event.target as unknown as any;

    event.preventDefault();
    Api.submitForm({
      name: name.value,
      job: job.value,
    });
  };

  return (
    <div className="card">
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="job">Job</label>
          <input type="text" name="job" id="job" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
