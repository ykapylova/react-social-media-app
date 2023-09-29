import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
    const [user] = useAuthState(auth)
const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts")

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
        ...data,
        username: user?.displayName,
        userId: user?.uid
    });

    navigate("/")
  };
  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
    <p style={{width: errors.title ? "150px" : "0px", borderBottom: "solid 2px orange", paddingBottom: "2px"}}>{errors.title?.message}</p>
      <p style={{width: errors.description ? "150px" : "0px", borderBottom: "solid 2px orange", paddingBottom: "2px"}}>{errors.description?.message}</p>
      <input type="text" placeholder="Title..." {...register("title")} />
      <textarea placeholder="Description..." {...register("description")} />
      <input type="submit" value="Send" />
    </form>
  );
};
