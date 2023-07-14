import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <div>
      <MainPage offersCount={offersCount} />
    </div>
  );
}

export default App;
