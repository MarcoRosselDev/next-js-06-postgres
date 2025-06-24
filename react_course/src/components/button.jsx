export default function Button() {
  function handleClick() {
    console.log('click event');
  }
  return <button onClick={handleClick}>mi botoncito!</button>
}