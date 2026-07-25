# 📖 Understanding Git Diffs

Before making your first contribution, it's helpful to understand what a **diff** is.

A **diff** shows the changes made between two versions of a file. Git uses diffs to display exactly what has been **added**, **removed**, or **modified**.

---

## Why Does This Matter?

Reviewing a diff before committing helps you:

- ✅ Catch accidental changes
- ✅ Verify your work
- ✅ Keep commits clean and focused
- ✅ Make code reviews easier

Even experienced developers check their diffs before every commit.

---

# Anatomy of a Diff

Example:

```diff
--- a/src/example.js
+++ b/src/example.js

 function greet() {
-    console.log("Hello");
+    console.log("Hello, World!");
 }
```

Let's break this down.

## File Paths

```diff
--- a/src/example.js
+++ b/src/example.js
```

- `---` represents the previous version of the file.
- `+++` represents the updated version.

The `a/` and `b/` prefixes simply identify the old and new versions.

---

## Removed Lines

Lines beginning with a **minus (`-`)** were removed.

```diff
- console.log("Hello");
```

Git typically highlights these lines in **red**.

---

## Added Lines

Lines beginning with a **plus (`+`)** were added.

```diff
+ console.log("Hello, World!");
```

Git typically highlights these lines in **green**.

---

## Unchanged Lines

Lines without a `+` or `-` provide surrounding context.

```diff
function greet() {
```

These help you understand where the changes occurred.

---

# Visual Example

```text
Old File

Hello
World
Git
```

becomes

```text
New File

Hello
GitHub
Git
```

Git displays this as:

```diff
 Hello
-World
+GitHub
 Git
```

---

# Before You Commit

A good habit is to review your changes:

```bash
git diff
```

If everything looks correct, stage your files:

```bash
git add .
```

Then create your commit:

```bash
git commit -m "Describe your changes"
```

---

# Tips for Beginners

✔ Read every diff before committing.

✔ Small diffs are easier to understand than large ones.

✔ If something unexpected appears in the diff, investigate before committing.

✔ Don't worry if diffs look confusing at first. Reading them becomes much easier with practice.

---

# Summary

| Symbol | Meaning |
|--------|---------|
| `+` | Added line |
| `-` | Removed line |
| `---` | Previous version |
| `+++` | Updated version |
| Context | Unchanged surrounding lines |

---

Happy coding! 🚀
