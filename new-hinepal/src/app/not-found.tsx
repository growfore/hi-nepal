import { redirect } from "next/navigation";

const NotFoundPage = async () => {
  return redirect("/");
};

export default NotFoundPage;
