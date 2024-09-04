import { Outlet, useParams, Navigate } from "react-router-dom";
import { Note } from "../../types";

type Props = {
  notes: Note[];
};

const Layout = ({ notes }: Props) => {
  //urldeki idyi al
  const { id } = useParams();

  // notes dizisinde elemanı ara
  const found = notes.find((i) => i.id === id);

  // bulamazsak anasayfaya yönlendir
  if (!found) return <Navigate to="/" replace />;

  // parent route içerisnde child route'u renderla
  // note verisini alt route'a gönder
  return <Outlet context={found} />;
};

export default Layout;
