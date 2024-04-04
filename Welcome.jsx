/* Modify the Welcome component so that the Age component is rendered 5 times. For every time use conditional rendering with one of the following conditions:
- The Age component is rendered only if the age prop is greater than 18.
- The Age component is rendered only if the age prop is present.
- The Age component is rendered only if the age prop is greater than 18 and less than 65.
- The Age component is rendered only if the age prop is greater than 18, less than 65 and the name prop is equal to "John". */

import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <>
      <strong>Welcome, {name}!</strong>
      <p>Your Age is {age}</p>
      {age >= 18 ? <p><Age age = {age}/></p> : 'dasds'}
      {age ? <p><Age age = {age}/></p> : 'dasds'}
      {age >= 18 && age <= 65 ? <p><Age age = {age}/></p> : 'dasds'}
      {age >= 18 && age <= 65 && name === 'John' ? <p><Age age = {age}/></p> : 'dasds'}
    </>
  );
}

export default Welcome;
