## Procedures

### Adding a new entry

1. Add a new folder under the `data` directory, with the name corresponding to the `id` of the new entry. Make note of this `id`.
2. Add the `shader.frag` and (optionally) `shader.vert` for the fragment and vertex shader source code respectively, in this new folder. If no `shader.vert` is placed, it will use the `data/fallback/shader.vert` instead.
3. Append this entry in the `data.json` file in the root of this project. An entry should have these three values populated:
   a. `id`: The same id as before, this is going to be used to look up the folder
   b. `title`: Any name will do, best if its short - this will show up on the left sidebar
   c. `description`: A short description of the entry, HTML supported. USE SEMANTIC TAGS WITH NO CLASSES.
4. Once done, append the entry to the `README.md` at the root of the project, following the formatting. If semantic tags were used in step `3c`, this step can be made easier with `pandoc`, with this command:

```sh
# produces Github Flavored Markdown (gfm) from the provided HTML
echo "PASTE THE DESCRIPTION TEXT HERE" | pandoc -f html -t gfm
```

## Ideas

1. Play around with using IndexedDB to store shaders locally on the browser
2. ?
