import React from "react";
import Landing from "../components/Landing";
import Introduction from "../components/Introduction";
import Stats from "../components/Stats";
import Upcoming from "../components/Upcoming";
import Learn from "../components/Learn";
import Inspire from "../components/Inspire";
import Head from "next/head";

const IndexPage = () => {
	return (
		<div className='overflow-y-auto overflow-x-auto'>
			<Head>
				<title>ACM at UCR</title>
			</Head>
			<Landing />
			<Introduction />
			<Stats />
			<Upcoming />
			<Learn />
			<Inspire />
		</div>
	);
};

export default IndexPage;

// DO NOT EDIT
