Hi 👋,
[todomvc](http://todomvc.com). It's a neat, but outdated project, which contains a reference implementation of a simple to-do app written in various JavaScript frameworks, libraries and dialects. In this fork we only include the typescript-react implementation in order to keep the challenge simple. The implementation is not production-ready, and your goal will be to get it there and to add new features.

### Steps to Run the App
 * yarn && yarn start

### Steps to Build the App
 * yarn build

### Steps to Run the Unit test
 * yarn test

# What we care about

- 🚀 What you deliver should be a production ready application
- 🧹 Whatever you write, make sure it's clean and maintainable
- 👌 Ensure the app looks good with the new features you add
- 📝 Show us how you work, by writing proper Git commits

# Task 1

Start the app by using `yarn && yarn start` and check it out at `http://localhost:4000`.

Ask yourself:

- What's bad?
   * Code quality
   * Bad structure
   * Hard to maintain
   * Not using built in state management
   * No need of routing and extra library for router

- What would you do differently?
   * I did complete refactor of the application
- Are you missing anything in the tooling department?

Apply your suggestions/improvements to the existing code and feel free to refactor as much as you like.

# Task 2

We would like to be able to add labels to each to-do item.

- When entering a new item we want to add one or more labels by adding words like @work or @important to an item.
  - These labels should not be part of the item title itself, but instead show up right-aligned as badges.
  - On double-click we want to be able to edit the to-do title and labels.
  - Example:
    - "Buy groceries @shopping @household"
      - To-do: "Buy groceries"
      - Tags: "shopping", "household"
- The labels should be individually deletable when not in edit mode.

# Task 3

You'll get bonus points if you write React component tests for your newly added features 😉

# How to submit your solution

- Develop on a branch and create a merge request once you are done.
- Send an email to your contact from the Unite HR team, and we will have a look at your submission.

Have fun with the challenge,
