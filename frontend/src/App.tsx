import {ReactComponent as GithubIcon} from './assets/img/github.svg';

function App() {
  return (
    <header>
      <nav>
        <div>
          <h1>DSMovie</h1>
          <a href="https://github.com/Flgc">
            <div>
              <GithubIcon />
              <p>/Flgc</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default App;
