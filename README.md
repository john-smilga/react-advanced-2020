## React Small Projects Practice

#### useState [state,setState], setState is async function! it is very important!

Notes: if we use previous state for state updating, then we need to use functional update form in setState.
eg: The example is in useState-Practice branch: counter app
If we don't use functional form into setState, the current state might be wrong if we mimic real project async event
Let's say init count value = 0, if I click add btn 3 times,the setState will triger 3 times, but according to setState is async function, 3 times setState will async on the value 0.
That's why even 3 times clicked, the update state still is 1, not 3 in this case.
But functional form can resolve this issue.
**Therefore,everytime if we want to base on previous state to update current state, use functional form in setState**
setState(count + 1) ❌
setState((prevState) => prevState + 1) ✅ _AND functional form always need return a value(not undefined!)_

#### Projects

1. Birthday Reminder

#### useEffect and Conditional Rendering

2. Tours
3. Reviews
4. Accordion
5. Menu
6. Tabs
7. Slider

#### Forms

8. Lorem Ipsum Generator
9. Color Shades Generator
10. Grocery Bud

#### useRef

11. Navbar

#### useContext

12. Modal and Sidebar
13. Stripe Menus

#### useReducer and useContext

14. Cart

#### React Router
