<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/phonist/tictactoe.git">
    <img src="https://github.com/phonist/tictactoe/blob/main/public/favicon.ico?raw=true" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Tic Tac Toe</h3>

  <p align="center">
    Tic Tac Toe Game
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

![Timer](https://github.com/phonist/tictactoe/blob/main/public/assets/gameboard.png?raw=true)

This is a straightforward Tic Tac Toe game.
The game was built using NextJs on top of React with Typescript.
Then there's redux, redux-thunk, and material-UI.

### Built With
* [React](https://reactjs.org/)
* [NextJs](https://nextjs.org/docs/basic-features/typescript)
* [Typescript](https://www.typescriptlang.org/)
* [Redux](https://redux.js.org/)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Material-UI](https://mui.com/)


<!-- GETTING STARTED -->
## Getting Started
The project are mainly categorize into two parts:
```
pages
|-- index.tsx
|-- _app.tsx
|-- Board.tsx
|-- Game.tsx
|-- Square.tsx
redux
|-- reducers
|-- actions
|-- thunks
|-- types
      |-- interfaces
|-- reducers.ts
|-- store.ts
```
* All UI components are kept in the `pages` folder..
* All redux logic are kept inside `redux` folder.
* All typescript interfaces are kept inside `types` and `types/interfaces` folder.


### Prerequisites
* Node - 16.2.0
* Yarn - 1.22.17


### Installation
1. git clone https://github.com/phonist/tictactoe.git
2. cd tictactoe
3. yarn dev
4. navigate to localhost:3000 and start your development

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement" or "bug".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/<featureName>`)
3. Commit your Changes (`git commit -m 'add <featurename>'`)
4. Push to the Branch (`git push origin feature/<featureName>`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.




<!-- CONTACT -->
## Contact

Adrian Chong - [@twitter_handle](https://twitter.com/AdrianC50883820) - rujyi94@hotmail.com

Project Link: [https://github.com/phonist/tictactoe](https://github.com/phonist/tictactoe)