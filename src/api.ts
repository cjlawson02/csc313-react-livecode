export const Api = {
  submitForm: async (data: { name: string; job: string }) => {
    alert("Form submitted: " + data.name + " " + data.job);
  },
};
