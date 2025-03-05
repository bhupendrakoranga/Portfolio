import axios from "axios";
import emailjs from "@emailjs/browser";

const service_id = "service_gixms06" as string;
const template_id = "template_i9mz0gj" as string;
const user_id = "HgzcRqeDkgGrw6MW7" as string;

export const sendContactMail = async (
  name: string,
  email: string,
  message: string
) => {
  const data = { name, email, message };
  try {
    const templateParams = { from_name: name, email: email, message: message };
    await emailjs.send(service_id, template_id, templateParams, user_id);

    return await axios.post("/api/contact", data);
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};
