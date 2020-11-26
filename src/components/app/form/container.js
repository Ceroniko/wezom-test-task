import { reduxForm } from "redux-form";
import { View } from "./view";

const Form = reduxForm({
	form: "login",
})(View);

export { Form };
