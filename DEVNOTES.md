## Procedures

### Adding a new entry

1. Add a new folder under the `data` directory, with the name corresponding to the `id` of the new entry. Make note of this `id`. To keep things consistent, `id` is suggested to be an incremental number, but its fine to keep it whatever. In this diagram, we call the folder `new_entry_id`.

```
project-root/
├── README.md
├── data.json
├── data/
│   ├── 01/
│   │   └── shader.frag
│   ├── existing_entry2/
│   │   └── shader.frag
|   |
│   └── new_entry_id/     |<- Step 1 *
│
│
└── data/
    └── fallback/
        └── shader.vert
```

2. Add the `shader.frag` (mandatory) and `shader.vert` (optional) for the fragment and vertex shaders respectively, in this new folder. If no `shader.vert` is placed, it will by default use the `data/fallback/shader.vert` instead.

```
project-root/
├── README.md
├── data.json
├── data/
│   ├── 01/
│   │   └── shader.frag
│   ├── existing_entry2/
│   │   └── shader.frag
|   |
│   └── new_entry_id/
│       ├── shader.frag             |<-- Step 2 *
│       └── shader.vert (optional)  |<-┘
└── data/
    └── fallback/
        └── shader.vert
```

3. Append this entry in the `data.json` file in the root of this project. An entry should have these three values populated:

   - `id`: The same id as before, this is going to be used to look up the folder

   - `title`: Any name will do, best if its short - this will show up on the left sidebar

   - `description`: A short description of the entry, HTML supported. USE SEMANTIC TAGS WITH NO CLASSES. e.g. `<h1>`, `<p>`, `<br>`, and `<i>` tags.

```
project-root/
├── README.md
├── data.json        |<- Step 3)*
├── data/
│   ├── 01/
│   │   └── shader.frag
│   ├── existing_entry2/
│   │   └── shader.frag
|   |
│   └── new_entry_id/
│       ├── shader.frag
│       └── shader.vert (optional)
└── data/
    └── fallback/
        └── shader.vert
```

4. Once done, append the entry to the `README.md` at the root of the project, following the formatting. If semantic tags were used in step `3c`, this step can be made easier with `pandoc`, with this command:

```sh
# produces Github Flavored Markdown (gfm) from the provided HTML
echo "PASTE THE DESCRIPTION TEXT HERE" | pandoc -f html -t gfm
```

```
project-root/
├── README.md        (<- Step 4)*
├── data.json
├── data/
│   ├── 01/
│   │   └── shader.frag
│   ├── existing_entry2/
│   │   └── shader.frag
|   |
│   └── new_entry_id/
│       ├── shader.frag
│       └── shader.vert (optional)
└── data/
    └── fallback/
        └── shader.vert
```

## Ideas

1. Play around with using IndexedDB to store shaders locally on the browser
2. ?
