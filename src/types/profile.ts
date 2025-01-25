// types/profile.ts
import { AvatarProps } from "./avatar";

export type ProfileProps = {
  person: AvatarProps['person'];
  profession: string;
  awards: string;
  discoveries: string;
};
