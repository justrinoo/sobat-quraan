import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailSurat from "../components/HeroSurat/DetailSurat";
import Landing from "../pages/Landing";
import PageAllSurat from "../pages/Surat";
import NotFound from "../private";

function TheRouter() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/reading/allsurat" component={PageAllSurat} />
					<Route
						exact
						path="/detail/:identifer"
						render={(props) => <DetailSurat {...props} />}
					/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		</>
	);
}

export default TheRouter;
