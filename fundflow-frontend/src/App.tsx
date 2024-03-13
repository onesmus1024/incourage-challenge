import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme ,{ GlobalStyle } from "./theme/theme";
import AppRoutes from "./routes/AppRoutes";
import store from "./store";
import { Provider } from "react-redux";
import ErrorBoundary  from "./components/ErrorBoundary";
import Auth from "./containers/Auth";


const App: FC = () => {
  if(localStorage.getItem("token")){
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </Router>
        </ThemeProvider>
      </DndProvider>
    </Provider>
  );
  }
  
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <ErrorBoundary>
              <Auth />
            </ErrorBoundary>
          </Router>
        </ThemeProvider>
      </DndProvider>
    </Provider>
  )
};

export default App;