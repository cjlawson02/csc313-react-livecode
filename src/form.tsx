import "./App.css";
import { Api } from "./api";

function Form() {
  const submitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const job = form.elements.namedItem("job") as HTMLInputElement;

    Api.submitForm({
      name: name.value,
      job: job.value,
    });
  };

  return (
    <>
      <h1>My Form</h1>
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
    </>
  );
}

export default Form;
