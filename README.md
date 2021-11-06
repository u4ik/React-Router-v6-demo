

# Changes

 - No more Switch components, instead import and replace it with Routes

- Route Usage:

	<Route path='/news' element={<News />} />
	<Route path='/welcome' element={<Welcome />} />
	<Route path='/about' element={<About />} />

- 'exact' is no longer needed as a prop to Route, as it is enabled by default.
If you did want to load a component based on the prefix path you can do this:

	<Route path='/news/*' element={`<News />`} />

- This will render the news component as long as the url pathname begins with /news. Any paths that follow will still keep this news component rendered. 
    Ex. /news/:id -> `<NewsItem/>`
    (`<News/>` will still be rendered, however with version 6 React will internally try to decide the best component to fit)
- Order of routes no longer matter.
    Before you would have to have dynamic routes underneath static routes.
    Ex. /news/main would have to come before /news/:id.
        This is no longer the case with Version 6.

- No more `Redirect`, instead import and use `Navigate`

- Every `Route` MUST be wrapped in `Routes`. No matter where it is within your app even if it's a single `Route`.

- If a parent is loaded with /welcome/*, this nested route will assume that /welcome is already present, which allows us to omit it from this nested path.
        - Parent 
    <Route path="/welcome/*" element={<Welcome/>} />
         - Nested 
	<Route path="new-user" element={<WelcomeUser/>} />
        Full Path: .../welcome/new-user.
        Both components are rendered.

- Nested Link/NavLink components will also use relative pathing.
    <`NavLink` to="new-user">
                Enter
    </`NavLink`>

    -Nested Routes have relative paths.

- `UseHistory` no longer exists, instead use `useNavigate`
    - You can also provide options to the navigate object that's returned when calling useNavigate.
    Ex.     const navigate = useNavigate();
            navigate('/welcome', { replace: true })
- Which then will redirect, instead of pushing the new route to the navigation stack.
- You can also provide numbers such as -1 or 1, to navigate to the previous and next page. Ore even -2 to go 2 steps back to the previous page.
    
- Prompt is not yet available in version 6# react-router-dom-6-demo
