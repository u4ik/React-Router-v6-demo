# React Router v.6 Changes

 - No more `Switch` components, instead import and replace it with `Routes`

- `Route` Usage:

	`<Route path='/news' element={<News />} />` </br>
	`<Route path='/welcome' element={<Welcome />} />` </br>
	`<Route path='/about' element={<About />} />` </br>

- `exact` is no longer needed as a prop to `Route`, as it is enabled by default.
If you did want to keep a component rendered based on the starting path you can do this:

	`<Route path='/news/*' element={<News />} />`

- This will render the news component as long as the url pathname begins with /news. Any paths that follow will still keep the `<News/>` component rendered.</br>
   - Ex.</br>
      /news/:id -> `<NewsItem/>`</br>

    `<News/>` will still be rendered, however with version 6 React will internally try to decide the best component to render
- Order of routes no longer matter.
    Before, we would have to have dynamic routes positioned underneath static routes.</br>
   - Ex.</br>
      /news/main would have to come before /news/:id.
        This is no longer the case with Version 6.

- No more `Redirect`, instead import and use `Navigate`</br>
   - Ex.</br>
           `<Route path='/' element={<Navigate to='/welcome' />} />`

- Every `Route` MUST be wrapped in `Routes`. No matter where it is within your app even if it's a single `Route`.

- If a parent is loaded with /welcome/*, this nested route will assume that /welcome is already present, which allows us to omit it from this nested path.</br>
    
    - Parent </br>
        `<Route path="/welcome/*" element={<Welcome/>} />`</br>
    - Nested </br>
	    `<Route path="new-user" element={<WelcomeUser/>} />`</br>
        
    Full Path To Render Child: .../welcome/new-user. </br>
    Both components are rendered. </br>

- Nested `Link`/`NavLink` components will also use relative pathing.</br>

    <`NavLink` to="new-user">
                Enter
    </`NavLink`>
    - Nested Routes have relative paths.

- `useHistory` no longer exists, instead use `useNavigate`
    - You can also provide options to the navigate object that's returned when calling `useNavigate`.</br>
    - Ex.</br>
        `const navigate = useNavigate();`</br>
        `navigate('/welcome', { replace: true })`

    - Which then will redirect, instead of pushing the new route to the navigation stack.
- You can also provide numbers such as -1 or 1, to navigate to the previous and next page. Or even -2 to go 2 steps back to the previous page.
    
- `Prompt` is not yet available in version 6.
