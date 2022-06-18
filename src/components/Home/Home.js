import React from "react";
import {
    FaDiscord,
    FaInstagram,
    FaSlack,
    FaMedium,
    FaYoutube,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProjectTile from "./ProjectTile.js"

import "./Home.css";

const workshops = [
    {
        title: "All about JavaScript",
        lead: "Divyank",
        description:
            "I love javascript so much. I would love to help others realize how astounding of a language it is",
        date: "2020-01-01",
        time: "12:00",
        location: "ACM Room",
    },
    {
        title: "Why Rust > All",
        lead: "Adil",
        description: "????",
        date: "2020-01-01",
        time: "12:00",
        location: "ACM Room",
    },
];

const projects = [
    // [
    {
        name: "Westin Montana",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUycBT///+PqIciYwDe5dwxbRDr8OiNsHwgaQA2cxk8dx9BeyV1nmDq7umMpYP8/fvm7eSHrHSYuIlvnFkIYQBTiTh7o2dEfCoeaAAAWQAQXQC8ybeZEcYQAAABW0lEQVR4nO3Px00DUBQAQYNNBpNz/33SAIcvJOR91mwFO5uTY29z6IF/j3B+hPMjnB/h/AjnRzg/wvkRzu8X4f352HZ3S8KHx6eLmT2/7JeEu9e3t9uRvW9P14SX7zfXE7s6WxbeXG1GRkjYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn7Lwo/rQ6/+sWXhy9nUVoWf26l97ZeEd/vTqe2/l4RHFuH8COdHOD/C+RHOj3B+hPMjnN/xC38AOHN6HP38BCYAAAAASUVORK5CYII=",
        projectLink: "https://store.steampowered.com/app/1943220/Sketch/",
    },
    {
        name: "Prathmesh Jain",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUycBT///+PqIciYwDe5dwxbRDr8OiNsHwgaQA2cxk8dx9BeyV1nmDq7umMpYP8/fvm7eSHrHSYuIlvnFkIYQBTiTh7o2dEfCoeaAAAWQAQXQC8ybeZEcYQAAABW0lEQVR4nO3Px00DUBQAQYNNBpNz/33SAIcvJOR91mwFO5uTY29z6IF/j3B+hPMjnB/h/AjnRzg/wvkRzu8X4f352HZ3S8KHx6eLmT2/7JeEu9e3t9uRvW9P14SX7zfXE7s6WxbeXG1GRkjYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn7Lwo/rQ6/+sWXhy9nUVoWf26l97ZeEd/vTqe2/l4RHFuH8COdHOD/C+RHOj3B+hPMjnN/xC38AOHN6HP38BCYAAAAASUVORK5CYII=",
        projectLink: "http://ucr-campus-map.herokuapp.com/",
    },
    // ],
    // [
    {
        name: "Sample",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUycBT///+PqIciYwDe5dwxbRDr8OiNsHwgaQA2cxk8dx9BeyV1nmDq7umMpYP8/fvm7eSHrHSYuIlvnFkIYQBTiTh7o2dEfCoeaAAAWQAQXQC8ybeZEcYQAAABW0lEQVR4nO3Px00DUBQAQYNNBpNz/33SAIcvJOR91mwFO5uTY29z6IF/j3B+hPMjnB/h/AjnRzg/wvkRzu8X4f352HZ3S8KHx6eLmT2/7JeEu9e3t9uRvW9P14SX7zfXE7s6WxbeXG1GRkjYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn7Lwo/rQ6/+sWXhy9nUVoWf26l97ZeEd/vTqe2/l4RHFuH8COdHOD/C+RHOj3B+hPMjnN/xC38AOHN6HP38BCYAAAAASUVORK5CYII=",
        projectLink: "",
    },
    {
        name: "Sample 2",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUycBT///+PqIciYwDe5dwxbRDr8OiNsHwgaQA2cxk8dx9BeyV1nmDq7umMpYP8/fvm7eSHrHSYuIlvnFkIYQBTiTh7o2dEfCoeaAAAWQAQXQC8ybeZEcYQAAABW0lEQVR4nO3Px00DUBQAQYNNBpNz/33SAIcvJOR91mwFO5uTY29z6IF/j3B+hPMjnB/h/AjnRzg/wvkRzu8X4f352HZ3S8KHx6eLmT2/7JeEu9e3t9uRvW9P14SX7zfXE7s6WxbeXG1GRkjYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn7Lwo/rQ6/+sWXhy9nUVoWf26l97ZeEd/vTqe2/l4RHFuH8COdHOD/C+RHOj3B+hPMjnN/xC38AOHN6HP38BCYAAAAASUVORK5CYII=",
        projectLink: "",
    },
    // ],
];

const Home = () => {
    return (
        <main>
            <title>ACM@UCR</title>
            <div className="home-home-container">
                <img src="blocks.svg" className="home-home-acmimg"></img>
                {/* <Container style={{ margin: "2em" }}>
                    <Row>
                        <Col>
                        Welcome
                        </Col>
                    </Row>
                </Container> */}
                <Container style={{ margin: "2em" }}>
                    <Row className="row">
                        <Col lg={4} sm={12} className="col">
                            <h1 className="home-home-heading">Learn</h1>
                            <Carousel>
                                {workshops.map((workshop, ind) => (
                                    <Carousel.Item key={ind}>
                                        <div className="home-home-workshop-container">
                                            <h2>{workshop.title}</h2>
                                            <h3>{workshop.lead}</h3>
                                            <p>{workshop.description}</p>
                                            <p>
                                                {workshop.date} {workshop.time} {workshop.location}
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>

                        <Col lg={4} sm={12}>
                            <h1 className="home-home-heading">Inspire</h1>
                            <p>
                                The Association for Computing Machinery at the University of
                                California, Irvine is a non-profit organization that is
                                dedicated to the advancement of computing and the development of
                                computing-related technologies.
                            </p>
                            <p>
                                <a href="https://www.acm.org/">ACM@UCR</a> is a non-profit
                                organization that is dedicated to the advancement of computing
                                and the development of computing-related technologies.
                            </p>

                            {/* <Carousel> */}
                            <Row className="home-home-projects">
                                {projects.map((project) => (
                                    <Col className="home-home-projects-col" sm={6}>
                                        <ProjectTile
                                            name={project.name}
                                            image={project.img}
                                            link={project.projectLink}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        <Col lg={4} sm={12}>
                            <h1 className="home-home-heading">Connect</h1>
                            <div className="home-home-icons">
                                <a
                                    className="home-home-icon"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfImoSRQ7d5lQASl5OPxxEK_2iiZT0UKxVsMsn3BMVCkqC-WQ/viewform"
                                    target="_blank"
                                >
                                    <FaDiscord />
                                </a>
                                <a
                                    href="https://www.instagram.com/acm_ucr/"
                                    target="_blank"
                                    className="home-home-icon"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://csatucr.slack.com/join/shared_invite/zt-pcaakxnq-pT7js04C52GpGHRoggHNIw#/shared-invite/email"
                                    target="_blank"
                                    className="home-home-icon"
                                >
                                    <FaSlack />
                                </a>
                                <a
                                    href="https://medium.com/acm-at-ucr"
                                    target="_blank"
                                    className="home-home-icon"
                                >
                                    <FaMedium />
                                </a>
                                <a
                                    href="mailto:contact@acmucr.org"
                                    target="_blank"
                                    className="home-home-icon"
                                >
                                    <SiGmail />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCSLoGcSzNfpHIzdT6QzsmnQ"
                                    target="_blank"
                                    className="home-home-icon"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    );
};

export default Home;
