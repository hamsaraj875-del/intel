# Two Engines. Two Missions. Your Kind of Power.
React + Vite + Framer Motion scroll story comparing Intel Core Ultra Series 3 (Panther Lake) and Intel Core Series 3 (Wildcat Lake).

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in dist/

- `src/Art.jsx` holds the shaded vector cars, animated engines, chips and laptop screens. To use real photos, add files to `public/` and swap the `<Car>` calls in `src/App.jsx` for `<img>` tags.
- `src/App.jsx` holds the six sections and every scroll animation.
- Only three product claims are used: each family's positioning, and that both use Intel 18A. No benchmarks or specs are invented.
- Reduced-motion and small screens get a calm, static layout.
