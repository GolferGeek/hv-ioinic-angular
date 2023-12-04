import Arc from "./arc.model";

export default interface User {
  id: string;
  email: string;
  username: string;
  arcs: Arc[];
}
