import { useState } from 'react';
import { ItemListProps } from '../../types/arrObj';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
   // Create deep copies of the initial list for each state so they don't share references.
   const [myList, setMyList] = useState(
    initialList.map(item => ({ ...item }))
  );
  const [yourList, setYourList] = useState(
    initialList.map(item => ({ ...item }))
  );

  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    // Create a new array with updated objects for myList
    setMyList(prevList =>
      prevList.map(e =>
        e.id === artworkId ? { ...e, seen: nextSeen } : e
      )
    );
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    // Create a new array with updated objects for yourList
    setYourList(prevList =>
      prevList.map(e =>
        e.id === artworkId ? { ...e, seen: nextSeen } : e
      )
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
