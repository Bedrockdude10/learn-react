import { AvatarProps } from "@/types/avatar";

function Avatar({ person, size = 100 }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Profile({ person, profession, awards, discoveries }: ProfileProps) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <Avatar person={person} size={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discoveries}
        </li>
      </ul>
    </section>
  );
}